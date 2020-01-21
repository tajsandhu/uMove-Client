const loadTf = require('tensorflow-lambda')
const posenet = require('@tensorflow-models/posenet')
const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
const randomBytes = require('crypto').randomBytes;
    
const {
createCanvas, Image
} = require('canvas')
const imageScaleFactor = 0.5;
const outputStride = 16;
const flipHorizontal = false;

exports.handler = async (event) => {

	//const username = event.requestContext.authorizer.claims['cognito:username'];
	const poseId = toUrlString(randomBytes(16));
	console.log('Received event (', poseId, '): ', event);
	const requestBody = JSON.parse(event.body);
	//var pose = tryModel(requestBody);
	recordPose(poseId).then(() => {
        // You can use the callback function to provide a return value from your Node.js
        // Lambda functions. The first parameter is used for failed invocations. The
        // second parameter specifies the result data of the invocation.

        // Because this Lambda function is called by an API Gateway proxy integration
        // the result object must use the following structure.
        callback(null, {
            statusCode: 201,
            body: JSON.stringify({
                PoseId: poseId,
                //Pose: pose,
            }),
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        });
    }).catch((err) => {
        console.error(err);

        // If there is an error during processing, catch it and return
        // from the Lambda function successfully. Specify a 500 HTTP status
        // code and provide an error message in the body. This will provide a
        // more meaningful error response to the end client.
        errorResponse(err.message, context.awsRequestId, callback)
    });
};


    
const tryModel = async(requestBody) => {
    const tf = await loadTf()

	var imageData = fs.readFileSync(requestBody.path)
	const image = new Image({
    type: 'image/png',
    data: imageData,
  	})

    console.log('start');
    const net = await posenet.load({
        architecture: 'MobileNetV1',
        outputStride: 16,
        inputResolution: 513,
        multiplier: 0.75
    });
    const image_dimensions = image_size(imageData);
    
    const img = new Image();
    img.src = imageData;
    img.width = image_dimensions.width;
    img.height = image_dimensions.height;
    const canvas = createCanvas(img.width, img.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
	
    const input = await tf.browser.fromPixels(canvas);
    const pose = await net.estimateSinglePose(input, imageScaleFactor, flipHorizontal, outputStride);
    console.log(pose);

    //FOR FLIPPED IMAGE ACROSS X-AXIS       
    ctx.translate(0, img.height);
    ctx.scale(1, -1);
    ctx.drawImage(img, 0, 0);
    var input2 = await tf.browser.fromPixels(canvas);
    var pose2 = await net.estimateSinglePose(input2, imageScaleFactor, flipHorizontal, outputStride);
    console.log(pose2);
    ctx.translate(0, img.height);
    ctx.scale(1, -1);
    ctx.drawImage(img, 0, 0);

    //Choosing the best points       
    for(var h = 0; h < poseLength; h++){
            if(pose.keypoints[h].score < pose2.keypoints[h].score){
                pose.keypoints[h] = pose2.keypoints[h];
                pose.keypoints[h].position.y = img.height - pose2.keypoints[h].position.y;
            }
    }

    for(const keypoint of pose.keypoints) {
        console.log(`${keypoint.part}: (${keypoint.position.x},${keypoint.position.y})`);
    }
    console.log('end');
    
    var rectSize = 15;
    var poseLength = pose.keypoints.length;
    var i;
    for (i = 0; i < poseLength; i++){
	ctx.fillRect(pose.keypoints[i].position.x, pose.keypoints[i].position.y, rectSize, rectSize);
    }

    /*
    var buf = canvas.toBuffer();
    fs.writeFile('./uploads/'+requestBody.file.originalname, buf, 'base64', function(err) {
       console.log(err);
    });
    */
    return pose;
}

function recordPose(poseId, pose) {
    return ddb.put({
        TableName: 'Pose',
        Item: {
            PoseId: poseId,
            //Pose: pose,
            postTime: new Date().toISOString(),
        },
    }).promise();
}

function toUrlString(buffer) {
    return buffer.toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
}

function errorResponse(errorMessage, awsRequestId, callback) {
  callback(null, {
    statusCode: 500,
    body: JSON.stringify({
      Error: errorMessage,
      Reference: awsRequestId,
    }),
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
}

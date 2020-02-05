const config = require('./config')

const http = require('http')

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = []
        req.on('data', chunk => {
            body = chunk
        }).on('end', () => {
            let value = JSON.parse(body)
            insertData(value['User'], value['Directory'], function(err, data) {
                if (err) {
                    res.end(err.message)
                }
                else {
                    res.end(data)
                }
            })
        })
    }
}).listen(config.server.port)


var mysql = require('mysql')

function insertData(name, directory, callback) {
    var connection = mysql.createConnection(config.database)
    var sql = "INSERT INTO pictures VALUES( '" + name + "' , '" + directory + "' );"
    connection.query(sql, function(err) {
        if (err) {
            connection.end()
            callback(err, null)
        }
        else {
            connection.end()
            callback(null, "Success")
        }
            
    })
}
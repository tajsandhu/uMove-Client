const config = require('./config')

const http = require('http')

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = []
        req.on('data', chunk => {
            body = chunk
        }).on('end', () => {
            let value = JSON.parse(body)
            insertData(value['User'], value['Directory'])
            res.end('Worked')
        })
    }
}).listen(config.server.port)


var mysql = require('mysql')

var connection = mysql.createConnection(config.database)

function insertData(name, directory) {
    connection.connect(function (err) {
        if (err) throw err
        console.log('Connected')
        var sql = "INSERT INTO pictures VALUES( '" + name + "' , '" + directory + "' );"
        connection.query(sql, function (err, result) {
            if (err) throw err
            console.log('1 record inserted')
        })
    })
}
const {DB_HOST, DB_USER, DB_PASSWORD, DB_NAME} = process.env;

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});



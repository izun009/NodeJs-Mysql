var mysql = require('mysql');
var db = mysql.createConnection({
    host : 'localhost',
    user : 'izzen',
    password : '',
    database : 'contoh_nodejs'
});

module.exports = db;
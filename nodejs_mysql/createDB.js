var db = require('./db_config');

db.connect((err) => {
    if(err) throw err;
    
    let sql = 'CREATE DATABASE contoh_nodejs';

    db.query(sql, (err,result) => {
        if(err) throw err;
        console.log('Database Created');
    });
});
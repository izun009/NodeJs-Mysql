var db = require("./db_config");

db.connect(function(err) {
    if (err) throw err;
    
    let sql = "INSERT INTO mahasiswa (id, name, address) VALUES ?";
    var VALUES = [
        ['10117152','Izzun', 'sekeloa 1'],
        ['10117125','Andi', 'ismail 1'],
        ['10117156','Ali', 'ismail 2'],
        ['10117189','Ahmad', 'sekeloa 2'],
        ['10117178','Malik', 'dago 3'],
        ['10117199','Justi', 'dago 2'],
        ['10117122','Budi', 'dago 1']
    ];

    db.query(sql, [VALUES], function (err, result) {
        if (err) throw err;
        console.log("record inserted");
    });
});

var db = require("./db_config");

db.connect(function(err) {
    if (err) throw err;
    
    let sql = `UPDATE mahasiswa
               SET address='pochinki'
               WHERE id=10117199`;

    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Record Updated: " + result.affectedRows);
    });
})
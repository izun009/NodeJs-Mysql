var db = require("./db_config");

db.connect(function(err) {
    if (err) throw err;
    
    // kita akan menghapus Starbucks
    let sql = `DELETE FROM mahasiswa WHERE id=10117199`;

    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Record Deleted: " + result.affectedRows);
    });
});

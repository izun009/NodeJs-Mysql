var db = require("./db_config");

db.connect(function(err) {
    if (err) throw err;
    
    let sql = "SELECT * FROM mahasiswa";
    db.query(sql, function (err, result) {
        if (err) throw err;
        // gunakan perulangan untuk menampilkan data
        console.log(`ID \t\t NAME \t\t ADDRESS`);
        console.log(`----------------------------------------------------------`);
        result.forEach(mahasiswa => {
            console.log(`${mahasiswa.id} \t ${mahasiswa.name} \t\t ${mahasiswa.address}`);
        });
    });
});

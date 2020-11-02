const Database = require('sqlite-async');//inporta banco de dados

function execute(db){
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `)

}//criar tabela 


module.exports = Database.open(__dirname + '/database.sqlite').then(execute)//cria banco de dados se ja existir abre
//depois ecevute a funçao

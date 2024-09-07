import { Database } from 'sqlite-async';
import { join } from 'path'; // Para manipular caminhos

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


export default Database.open(join(process.cwd(), 'src', 'database', 'database.sqlite')).then(execute)//cria banco de dados se ja existir abre
//depois ecevute a funçao

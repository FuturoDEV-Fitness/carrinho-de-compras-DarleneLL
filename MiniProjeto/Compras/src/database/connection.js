const { Pool } = require('pg');

class Database {
    constructor() {
        this.database = new Pool({
            user: 'postgres',     
            host: 'localhost',        
            database: 'carrinho_de_compras',  
            password: 'postgres',     
            port: 5432,                
        });
    }
    async query(text, params) {
        const client = await this.database.connect();
        try {
            const res = await client.query(text, params);
            return res;
        } finally {
            client.release();
        }
    }
}

module.exports = Database;

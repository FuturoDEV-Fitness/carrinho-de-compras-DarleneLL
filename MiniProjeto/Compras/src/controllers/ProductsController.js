const Database = require('../database/connection')

const db = new Database();

class ProductsController extends Database{

// Método para criar um novo produto
static async create(request, response) {
    const dados = request.body;
    console.log(dados)
    try {
        const dados = request.body
        console.log(dados.category)
        if (!dados.name || !dados.category) {
            return response
                .status(400)
                .json({ mensagem: "O nome e a categoria são obrigatórios" })
        }

        await db.query(
            `INSERT INTO products
             (
                 name, 
                 amount,
                 color, 
                 voltage, 
                 description,
                 category_id
            )
            values
            (
                $1,
                $2,
                $3,
                $4,
                $5,
                $6
            )
        `, [dados.name, dados.amount, dados.color, dados.voltage, dados.description, dados.category]);

        console.log(dados)

        response.status(201).json({ mensagem: 'Criado com sucesso' })
    } catch (err) {
        response.status(500).json({ error: err.message });
    }
}

static async getAllProducts(request, response) {
    try {
        const result = await db.query('SELECT * FROM products');
        response.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching products:', error);
        response.status(500).json({ error: 'Failed to fetch products' });
    }
}

}

module.exports = ProductsController
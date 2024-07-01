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

 // Método para listar um produto com detalhes
 static async getProductDetails(request, response) {
    const { id } = request.params;

      const result = await db.query(
      `SELECT 
        p.id as product_id, 
        p.name as product_name,
        p.amount as product_amount, 
        p.color as product_color, 
        p.voltage as product_voltage, 
        p.description as product_description, 
        c.id as category_id, 
        c.name as category_name
      FROM 
        products p
      JOIN 
        categories c
      ON 
        p.category_id = c.id
      WHERE 
        p.id =  $1`, [id]
      )
    
    try {
      if (result.rows.length === 0) {
        return response.status(404).json({ message: 'Produto não encontrado' });
      }

      const product = result.rows[0];
      response.json({
        id: product.product_id,
        name: product.product_name,
        description: product.product_description,
        price: product.product_price,
        category: {
          id: product.category_id,
          name: product.category_name        }
      });
    } catch (error) {
      console.error('Erro ao buscar detalhes do produto:', error);
      response.status(500).json({ message: 'Erro interno do servidor' });
    }
  }
}
module.exports = ProductsController
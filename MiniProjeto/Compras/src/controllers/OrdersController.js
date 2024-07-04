const Database = require("../database/connection")

const db = new Database()

class OrdersController extends Database {

    static async create(request, response){
        const dados = request.body

       // Calcula o total dos itens
        let total = dados.items.reduce((sum, item) => sum + (item.amount * item.price), 0);
        
        try {
            const orderResult = await db.query(
                `INSERT INTO orders
                 (
                     client_id, 
                     total,
                     address, 
                     observations 
                )
                values
                (
                    $1,
                    $2,
                    $3,
                    $4
                ) RETURNING id
            `, [dados.client_id, total, dados.address, dados.observations]);

            const orderId = orderResult.rows[0].id;

            // Criar os itens do pedido usando for...of para operações assíncronas
            for (const item of dados.items) {
                await db.query(
                'INSERT INTO orders_items (order_id, product_id, amount, price) VALUES ($1, $2, $3, $4)',
                [orderId, item.product_id, item.amount, item.price]
                );
            }

            response.status(201).json({ mensagem: 'Criado com sucesso' })

}       catch (error) {
            await db.query('ROLLBACK');
            response.status(500).json({ error: error.message });
        } 
    }
}

module.exports = OrdersController
const Database = require('../database/connection')

const db = new Database();

class ClientsController extends Database{

// Método para criar um novo cliente
static async create(request, response) {
    const dados = request.body;
    console.log(dados)
    try {
        const dados = request.body

        if (!dados.nome || !dados.email || !dados.cpf || !dados.contact) {
            console.log(dados.nome, dados.email, dados.cpf, dados.contact)
            return response
                .status(400)
                .json({ mensagem: "O nome, email, cpf e a contato são obrigatórios" })
        }

        await db.query(
            `INSERT INTO clients
             (
                 name, 
                 email, 
                 cpf, 
                 contact
            )
            values
            (
                $1,
                $2,
                $3,
                $4
            )
        `, [dados.nome, dados.email, dados.cpf, dados.contact]);

        console.log(dados)

        response.status(201).json({ mensagem: 'Criado com sucesso' })
    } catch (err) {
        response.status(500).json({ error: err.message });
    }
}


}

module.exports = ClientsController
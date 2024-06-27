const express = require('express');

const clientsRoutes = require('../src/routes/clients.routes');

const app = express();
const port = 3000;

app.use(express.json()); // Fala para servidor que vai receber json como contéudo

app.use('/clientes', clientsRoutes)

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
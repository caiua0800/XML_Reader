const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors'); // Importe o pacote cors

const app = express();

app.use(cors()); // Use o middleware cors

const port = 3000;

app.get('/ler-arquivo', (req, res) => {
    // Obter os valores dos parâmetros de consulta
    const nomePasta = req.query.DIRETORIO;
    const nomeArq = req.query.ARQUIVO;

    const filePath = path.join(__dirname,'diretorio_do_xml' , nomeArq);
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo:', err);
            return res.status(500).send('Erro ao ler o arquivo.');
        }
        
        res.send(data);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

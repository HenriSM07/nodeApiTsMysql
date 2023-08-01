import express from 'express';
import { config } from 'dotenv';

config();

const app = express();

const port = process.env.PORT || 3333;

app.get('/api', (request, response) => {
    response.send('Rodando na porta 3000')
})

app.listen(port, () => console.log(`Rodando na porta ${port}!`));
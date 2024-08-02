const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('API está rodando...');
});

// Exemplo de rota para enviar dados para o frontend
app.get('/api/dados', (req, res) => {
  const dados = {
    kpi1: 100,
    kpi2: 200,
  };
  res.json(dados);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

import express from 'express';
import { registerInDb } from './functions/dbReg';
import faunadb from 'faunadb';
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

app.post('/cadastro', async (req, res) => {
  const { segmento, produto, descricao, preco, cupom, link, imagem, dataEnvio } = req.body;
  try {
      const data = {
          segmento,
          produto,
          descricao,
          preco,
          cupom,
          link,
          imagem,
          status: false,
          dataEnvio
      };

      const result = await registerInDb(data);
      res.json(result);
  } catch (error: unknown) {
      if (error instanceof faunadb.errors.FaunaError) {
          // Erros específicos do FaunaDB podem ser tratados aqui
          res.status(500).json({ error: 'Database error: ' + error.message });
      } else if (error instanceof SyntaxError) {
          // Erros de sintaxe JSON podem ser tratados aqui
          res.status(400).json({ error: 'Invalid JSON: ' + error.message });
      } else if (error instanceof Error) {
          // Para todos os outros erros desconhecidos
          res.status(500).json({ error: 'An unexpected error occurred: ' + error.message });
      } else {
          // Caso error não seja uma instância de Error
          res.status(500).json({ error: 'An unknown error occurred.' });
      }
  }
});

const port: number = Number(process.env.PORT);
app.listen(port, '0.0.0.0', () => {
    console.log(`Sevidor rodando em 89.116.225.227:${port}`);
  });
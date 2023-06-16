import express from 'express';
import { registerInDb } from './src/functions/dbReg';

const app = express();
app.use(express.json());

app.post('/cadastro', async (req, res) => {
  const data = req.body;

  try {
    const result = await registerInDb(data);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Aconteceu algum erro no cadastro' });
  }
});


const startServer = () => {
  app.listen(4000, () => {
    console.log('Server started at http://localhost:4000');
  });
};
startServer();
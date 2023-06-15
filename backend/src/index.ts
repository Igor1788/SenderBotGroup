import express from 'express';
import venom from 'venom-bot';

const app = express();
app.use(express.json());

// Initialize venom bot
venom
  .create()
  .then((client) => {
    // Start API after venom bot initialized
    startServer(client);
  })
  .catch((erro) => {
    console.log(erro);
  });

const startServer = (client: any) => {
  app.listen(3000, () => {
    console.log('Server started at http://localhost:3000');
  });
};

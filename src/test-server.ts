import express from 'express';

const app = express();
const PORT = 3001;

app.get('/', (_req, res) => {
  res.send('API Música funcionando 🚀');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

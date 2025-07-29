import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

import cancionesRouter from './routes/canciones';
import artistasRouter from './routes/artistas';
import albumesRouter from './routes/albumes';
// import playlistsRouter from './routes/playlists';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// ✅ Servir archivos estáticos
app.use('/audios', express.static(path.join(__dirname, '../uploads/audios')));
app.use('/media', express.static(path.join(__dirname, '../uploads/media')));

// ✅ Rutas API
app.use('/api/canciones', cancionesRouter);
app.use('/api/artistas', artistasRouter);
app.use('/api/albumes', albumesRouter);
// app.use('/api/playlists', playlistsRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

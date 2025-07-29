import { Router } from 'express';
import { getArtistas, getArtistaById, crearArtista } from '../controllers/artistaController';

const router = Router();

router.get('/', getArtistas);
router.get('/:id', getArtistaById);
router.post('/', crearArtista);

export default router;

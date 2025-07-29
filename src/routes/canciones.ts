import { Router } from 'express';
import { getCanciones, getCancionById, crearCancion } from '../controllers/cancionController';

const router = Router();

router.get('/', getCanciones);
router.get('/:id', getCancionById);
router.post('/', crearCancion);

export default router;

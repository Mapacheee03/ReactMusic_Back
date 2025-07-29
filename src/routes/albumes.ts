import { Router } from 'express';
import { getAlbumes, getAlbumById, crearAlbum } from '../controllers/albumController';

const router = Router();

router.get('/', getAlbumes);
router.get('/:id', getAlbumById);
router.post('/', crearAlbum);

export default router;

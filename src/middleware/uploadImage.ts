import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Asegurar que la carpeta exista


const imageStorage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, 'uploads/media'); // ✅ Guarda en uploads/audios
  },
  filename: (_req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

// Filtro solo para imágenes válidas
const imageFilter = (_req: any, file: Express.Multer.File, cb: any) => {
  const ext = path.extname(file.originalname).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext)) {
    return cb(new Error('Formato de imagen no permitido'), false);
  }
  cb(null, true);
};

export const uploadImage = multer({ storage: imageStorage, fileFilter: imageFilter });

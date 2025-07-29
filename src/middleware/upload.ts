// src/middleware/upload.ts
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, 'uploads/audios');
  },
  filename: (_req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const fileFilter = (_req: any, file: Express.Multer.File, cb: any) => {
  const ext = path.extname(file.originalname).toLowerCase();
  if (!['.mp3', '.wav', '.ogg'].includes(ext)) {
    return cb(new Error('Formato de audio no permitido'), false);
  }
  cb(null, true);
};

export const upload = multer({ storage, fileFilter });

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const upload_1 = require("../middleware/upload");
const prisma_1 = __importDefault(require("../prisma"));
const router = express_1.default.Router();
router.post('/subir', upload_1.upload.single('audio'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No se subió ningún archivo' });
    }
    const { titulo, artista, album, duracion } = req.body;
    const rutaArchivo = `/audios/${req.file.filename}`;
    const cancion = await prisma_1.default.cancion.create({
        data: {
            titulo,
            artista,
            album,
            duracion: parseInt(duracion),
            archivo: rutaArchivo,
        },
    });
    res.status(201).json(cancion);
});
exports.default = router;

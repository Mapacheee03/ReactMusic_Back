import { Request, Response } from 'express';
import { prisma } from '../prisma/client';

export const getAlbumes = async (_req: Request, res: Response) => {
  const albumes = await prisma.albumCompleto.findMany({ include: { canciones: true } });
  res.json(albumes);
};

export const getAlbumById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const album = await prisma.albumCompleto.findUnique({
    where: { id: Number(id) },
    include: { canciones: true, artista: true },
  });
  if (!album) return res.status(404).json({ error: 'Álbum no encontrado' });
  res.json(album);
};

export const crearAlbum = async (req: Request, res: Response) => {
  const data = req.body;
  const nuevo = await prisma.albumCompleto.create({ data });
  res.status(201).json(nuevo);
};

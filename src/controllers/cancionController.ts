import { Request, Response } from 'express';
import { prisma } from '../prisma/client';

export const getCanciones = async (_req: Request, res: Response) => {
  const canciones = await prisma.cancion.findMany({ include: { artista: true, album: true } });
  res.json(canciones);
};

export const getCancionById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const cancion = await prisma.cancion.findUnique({
    where: { id: Number(id) },
    include: { artista: true, album: true },
  });
  if (!cancion) return res.status(404).json({ error: 'Canción no encontrada' });
  res.json(cancion);
};

export const crearCancion = async (req: Request, res: Response) => {
  const data = req.body;
  const nueva = await prisma.cancion.create({ data });
  res.status(201).json(nueva);
};

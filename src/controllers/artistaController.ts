import { Request, Response } from 'express';
import { prisma } from '../prisma/client';

export const getArtistas = async (_req: Request, res: Response) => {
  const artistas = await prisma.artistaCompleto.findMany();
  res.json(artistas);
};

export const getArtistaById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const artista = await prisma.artistaCompleto.findUnique({
    where: { id: Number(id) },
    include: { albumCompleto: true, canciones: true },
  });
  if (!artista) return res.status(404).json({ error: 'Artista no encontrado' });
  res.json(artista);
};

export const crearArtista = async (req: Request, res: Response) => {
  const data = req.body;
  const nuevo = await prisma.artistaCompleto.create({ data });
  res.status(201).json(nuevo);
};

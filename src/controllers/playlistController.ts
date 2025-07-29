import { Request, Response } from "express";
import { prisma } from "../prismaClient";

export const getPlaylists = async (req: Request, res: Response) => {
  const playlists = await prisma.playlist.findMany({
    include: { canciones: true },
  });
  res.json(playlists);
};

export const getPlaylistById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const playlist = await prisma.playlist.findUnique({
    where: { id },
    include: { canciones: true },
  });
  if (!playlist) return res.status(404).json({ error: "Playlist no encontrada" });
  res.json(playlist);
};

export const createPlaylist = async (req: Request, res: Response) => {
  const { nombre, cancionesIds } = req.body; // cancionesIds es array de Int

  try {
    const playlist = await prisma.playlist.create({
      data: {
        nombre,
        canciones: {
          connect: cancionesIds?.map((id: number) => ({ id })) || [],
        },
      },
      include: { canciones: true },
    });
    res.status(201).json(playlist);
  } catch {
    res.status(400).json({ error: "Error creando playlist" });
  }
};

export const updatePlaylist = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { nombre, cancionesIds } = req.body;
  try {
    const playlist = await prisma.playlist.update({
      where: { id },
      data: {
        nombre,
        canciones: {
          set: cancionesIds?.map((id: number) => ({ id })) || [],
        },
      },
      include: { canciones: true },
    });
    res.json(playlist);
  } catch {
    res.status(404).json({ error: "Playlist no encontrada" });
  }
};

export const deletePlaylist = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    await prisma.playlist.delete({ where: { id } });
    res.status(204).send();
  } catch {
    res.status(404).json({ error: "Playlist no encontrada" });
  }
};
 
/*
  Warnings:

  - You are about to drop the `Album` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Artista` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Cancion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Playlist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Album" DROP CONSTRAINT "Album_artistaId_fkey";

-- DropForeignKey
ALTER TABLE "Cancion" DROP CONSTRAINT "Cancion_albumId_fkey";

-- DropForeignKey
ALTER TABLE "Cancion" DROP CONSTRAINT "Cancion_artistaId_fkey";

-- DropTable
DROP TABLE "Album";

-- DropTable
DROP TABLE "Artista";

-- DropTable
DROP TABLE "Cancion";

-- DropTable
DROP TABLE "Playlist";

-- CreateTable
CREATE TABLE "artistaCompleto" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "nacionalidad" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "añoFormacion" INTEGER NOT NULL,
    "biografia" TEXT NOT NULL,
    "imagen" TEXT NOT NULL,

    CONSTRAINT "artistaCompleto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "albumCompleto" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "artistaId" INTEGER NOT NULL,
    "añoLanzamiento" INTEGER NOT NULL,
    "genero" TEXT NOT NULL,
    "duracionTotal" TEXT NOT NULL,
    "numeroTracks" INTEGER NOT NULL,
    "portada" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "sello" TEXT NOT NULL,
    "productor" TEXT NOT NULL,

    CONSTRAINT "albumCompleto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cancion" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "albumId" INTEGER NOT NULL,
    "artistaId" INTEGER NOT NULL,
    "duracion" TEXT NOT NULL,
    "pista" INTEGER NOT NULL,
    "letra" TEXT NOT NULL,
    "compositor" TEXT NOT NULL,
    "año" INTEGER NOT NULL,

    CONSTRAINT "cancion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "albumCompleto" ADD CONSTRAINT "albumCompleto_artistaId_fkey" FOREIGN KEY ("artistaId") REFERENCES "artistaCompleto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cancion" ADD CONSTRAINT "cancion_artistaId_fkey" FOREIGN KEY ("artistaId") REFERENCES "artistaCompleto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cancion" ADD CONSTRAINT "cancion_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "albumCompleto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `archivo` on the `Cancion` table. All the data in the column will be lost.
  - Added the required column `añoLanzamiento` to the `Album` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descripcion` to the `Album` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duracionTotal` to the `Album` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genero` to the `Album` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numeroTracks` to the `Album` table without a default value. This is not possible if the table is not empty.
  - Added the required column `portada` to the `Album` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productor` to the `Album` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sello` to the `Album` table without a default value. This is not possible if the table is not empty.
  - Added the required column `añoFormacion` to the `Artista` table without a default value. This is not possible if the table is not empty.
  - Added the required column `biografia` to the `Artista` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genero` to the `Artista` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagen` to the `Artista` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nacionalidad` to the `Artista` table without a default value. This is not possible if the table is not empty.
  - Added the required column `año` to the `Cancion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `compositor` to the `Cancion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `letra` to the `Cancion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pista` to the `Cancion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Album" ADD COLUMN     "añoLanzamiento" INTEGER NOT NULL,
ADD COLUMN     "descripcion" TEXT NOT NULL,
ADD COLUMN     "duracionTotal" TEXT NOT NULL,
ADD COLUMN     "genero" TEXT NOT NULL,
ADD COLUMN     "numeroTracks" INTEGER NOT NULL,
ADD COLUMN     "portada" TEXT NOT NULL,
ADD COLUMN     "productor" TEXT NOT NULL,
ADD COLUMN     "sello" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Artista" ADD COLUMN     "añoFormacion" INTEGER NOT NULL,
ADD COLUMN     "biografia" TEXT NOT NULL,
ADD COLUMN     "genero" TEXT NOT NULL,
ADD COLUMN     "imagen" TEXT NOT NULL,
ADD COLUMN     "nacionalidad" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Cancion" DROP COLUMN "archivo",
ADD COLUMN     "año" INTEGER NOT NULL,
ADD COLUMN     "compositor" TEXT NOT NULL,
ADD COLUMN     "letra" TEXT NOT NULL,
ADD COLUMN     "pista" INTEGER NOT NULL,
ALTER COLUMN "duracion" SET DATA TYPE TEXT;

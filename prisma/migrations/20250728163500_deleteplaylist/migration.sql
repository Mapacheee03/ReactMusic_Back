/*
  Warnings:

  - You are about to drop the `_CancionesEnPlaylist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CancionesEnPlaylist" DROP CONSTRAINT "_CancionesEnPlaylist_A_fkey";

-- DropForeignKey
ALTER TABLE "_CancionesEnPlaylist" DROP CONSTRAINT "_CancionesEnPlaylist_B_fkey";

-- DropTable
DROP TABLE "_CancionesEnPlaylist";

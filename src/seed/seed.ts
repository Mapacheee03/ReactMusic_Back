import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Limpieza de datos previos (opcional)
  await prisma.cancion.deleteMany();
  await prisma.albumCompleto.deleteMany();
  await prisma.artistaCompleto.deleteMany();

  // 🎤 ARTISTAS
  const edMaverick = await prisma.artistaCompleto.create({
    data: {
      id: 1,
      nombre: "Ed Maverick",
      nacionalidad: "México",
      genero: "Folk contemporáneo",
      añoFormacion: 2018,
      biografia: "Ed Maverick es un cantautor mexicano conocido por su estilo introspectivo y letras melancólicas. Saltó a la fama con su canción 'Fuentes de Ortiz', convirtiéndose en un referente del folk alternativo en América Latina.",
      imagen: "media/ed-maverick.jpg"
    }
  });

  const pesoPluma = await prisma.artistaCompleto.create({
    data: {
      id: 2,
      nombre: "Peso Pluma",
      nacionalidad: "México",
      genero: "Corridos tumbados",
      añoFormacion: 2020,
      biografia: "Peso Pluma es un cantante mexicano que ha popularizado los corridos tumbados, combinando regional mexicano con elementos urbanos.",
      imagen: "media/peso-pluma.jpg"
    }
  });

  const natanaelCano = await prisma.artistaCompleto.create({
    data: {
      id: 3,
      nombre: "Natanael Cano",
      nacionalidad: "México",
      genero: "Corridos tumbados",
      añoFormacion: 2019,
      biografia: "Cantante pionero del subgénero corridos tumbados, mezcla de música regional mexicana con trap y hip-hop.",
      imagen: "media/natanael-cano.jpg"
    }
  });

  const bts = await prisma.artistaCompleto.create({
    data: {
      id: 4,
      nombre: "BTS",
      nacionalidad: "Corea del Sur",
      genero: "K-Pop",
      añoFormacion: 2013,
      biografia: "BTS es una boyband surcoreana de gran éxito internacional, conocida por su música pop, hip hop y mensajes sociales.",
      imagen: "media/bts.jpg"
    }
  });

  // 💿 ALBUMES
  const albumes = await prisma.albumCompleto.createMany({
    data: [
      {
        id: 1,
        titulo: "Mix pa’ llorar en tu cuarto",
        artistaId: 1,
        añoLanzamiento: 2018,
        genero: "Folk",
        duracionTotal: "35:20",
        numeroTracks: 10,
        portada: "media/mix-pa-llorar.jpg",
        descripcion: "Álbum debut de Ed Maverick, conocido por su enfoque acústico y letras juveniles.",
        sello: "Universal Music México",
        productor: "Ed Maverick"
      },
      {
        id: 2,
        titulo: "Eduardo",
        artistaId: 1,
        añoLanzamiento: 2021,
        genero: "Folk alternativo",
        duracionTotal: "42:00",
        numeroTracks: 12,
        portada: "media/eduardo.jpg",
        descripcion: "Un álbum más maduro y experimental de Ed Maverick.",
        sello: "Universal Music México",
        productor: "Ed Maverick"
      },
      {
        id: 3,
        titulo: "Génesis",
        artistaId: 2,
        añoLanzamiento: 2023,
        genero: "Corridos tumbados",
        duracionTotal: "45:10",
        numeroTracks: 14,
        portada: "media/genesis.jpg",
        descripcion: "Álbum que consolida a Peso Pluma como una figura central en el nuevo regional mexicano.",
        sello: "Double P Records",
        productor: "Peso Pluma"
      },
      {
        id: 4,
        titulo: "NataKong",
        artistaId: 3,
        añoLanzamiento: 2022,
        genero: "Corridos tumbados",
        duracionTotal: "38:00",
        numeroTracks: 12,
        portada: "media/natakong.jpg",
        descripcion: "Álbum con una vibra urbana y letras explícitas sobre la vida callejera.",
        sello: "Rancho Humilde",
        productor: "Jimmy Humilde"
      },
      {
        id: 5,
        titulo: "Map of the Soul: 7",
        artistaId: 4,
        añoLanzamiento: 2020,
        genero: "K-Pop",
        duracionTotal: "74:52",
        numeroTracks: 20,
        portada: "media/mots7.jpg",
        descripcion: "Uno de los álbumes más icónicos de BTS, que combina introspección con sonidos modernos.",
        sello: "BigHit Entertainment",
        productor: "Pdogg"
      }
    ]
  });

  // 🎵 CANCIONES
  await prisma.cancion.createMany({
    data: [
      { titulo: "Fuentes de Ortiz", albumId: 1, artistaId: 1, duracion: "3:48", pista: 1, letra: "Y me dices que todo acabó, que te vas con él...", compositor: "Ed Maverick", año: 2018 },
      { titulo: "Acurrucar", albumId: 1, artistaId: 1, duracion: "3:55", pista: 3, letra: "Acurrucarme en tu voz, perderme en tu canción...", compositor: "Ed Maverick", año: 2018 },
      { titulo: "Gente", albumId: 2, artistaId: 1, duracion: "3:40", pista: 1, letra: "Hay gente que dice que todo está bien...", compositor: "Ed Maverick", año: 2021 },
      { titulo: "Niño", albumId: 2, artistaId: 1, duracion: "4:15", pista: 2, letra: "Soy un niño atrapado en el cuerpo de un hombre...", compositor: "Ed Maverick", año: 2021 },
      { titulo: "Gracias", albumId: 2, artistaId: 1, duracion: "5:00", pista: 3, letra: "Gracias por venir, por mirar en mí...", compositor: "Ed Maverick", año: 2021 },
      { titulo: "Quiero", albumId: 1, artistaId: 1, duracion: "4:10", pista: 2, letra: "Quiero salir corriendo, gritar lo que siento...", compositor: "Ed Maverick", año: 2018 },

      { titulo: "Lady Gaga", albumId: 3, artistaId: 2, duracion: "3:20", pista: 1, letra: "Me preguntan qué se siente ser famoso...", compositor: "Peso Pluma", año: 2023 },
      { titulo: "Rosa Pastel", albumId: 3, artistaId: 2, duracion: "3:40", pista: 2, letra: "La vida no es rosa pastel, a veces hay que batallar...", compositor: "Peso Pluma", año: 2023 },
      { titulo: "AMG", albumId: 3, artistaId: 2, duracion: "2:55", pista: 3, letra: "En la AMG fumando y escuchando corridos...", compositor: "Peso Pluma", año: 2023 },

      { titulo: "NataKong", albumId: 4, artistaId: 3, duracion: "3:00", pista: 1, letra: "NataKong llegó directo desde el trono...", compositor: "Natanael Cano", año: 2022 },
      { titulo: "Morritas", albumId: 4, artistaId: 3, duracion: "3:25", pista: 2, letra: "Tengo morritas en la troca, no me enfoco en una sola...", compositor: "Natanael Cano", año: 2022 },
      { titulo: "Porte Exuberante", albumId: 4, artistaId: 3, duracion: "3:05", pista: 3, letra: "Con porte exuberante, siempre bien tumbado...", compositor: "Natanael Cano", año: 2022 },

      { titulo: "ON", albumId: 5, artistaId: 4, duracion: "4:06", pista: 1, letra: "Can't hold me down 'cause you know I'm a fighter...", compositor: "RM, Pdogg", año: 2020 },
      { titulo: "Black Swan", albumId: 5, artistaId: 4, duracion: "3:18", pista: 2, letra: "Do your thang with me now...", compositor: "RM, Pdogg", año: 2020 },
      { titulo: "Filter", albumId: 5, artistaId: 4, duracion: "3:00", pista: 3, letra: "Which me do you want?", compositor: "Pdogg, Hiss Noise", año: 2020 }
    ]
  });

  console.log("✅ Seed completado correctamente.");
}

main()
  .catch((e) => {
    console.error("❌ Error ejecutando el seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

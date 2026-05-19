db = db.getSiblingDB('fantrack');

// ==================== GENRES ====================
db.genres.insertMany([
  {
    _id: ObjectId("664a000000000000000000a1"),
    name: "Action",
    description: "Content featuring intense physical activity, fights or fast-paced sequences",
    applies_to: ["anime", "manga", "series", "movie"],
    created_at: new Date("2024-01-01")
  },
  {
    _id: ObjectId("664a000000000000000000a2"),
    name: "Romance",
    description: "Stories focused on romantic relationships between characters",
    applies_to: ["anime", "manga", "series", "movie", "book"],
    created_at: new Date("2024-01-01")
  },
  {
    _id: ObjectId("664a000000000000000000a3"),
    name: "Fantasy",
    description: "Stories set in fictional worlds with magic and supernatural elements",
    applies_to: ["anime", "manga", "series", "movie", "book"],
    created_at: new Date("2024-01-01")
  },
  {
    _id: ObjectId("664a000000000000000000a4"),
    name: "Mystery",
    description: "Stories revolving around solving crimes or uncovering secrets",
    applies_to: ["anime", "manga", "series", "movie", "book"],
    created_at: new Date("2024-01-01")
  },
  {
    _id: ObjectId("664a000000000000000000a5"),
    name: "Slice of Life",
    description: "Realistic portrayal of everyday experiences and characters",
    applies_to: ["anime", "manga", "series"],
    created_at: new Date("2024-01-01")
  }
]);

// ==================== USERS ====================
db.users.insertMany([
  {
    _id: ObjectId("664a000000000000000001b1"),
    username: "otaku_mx",
    email: "otaku_mx@gmail.com",
    password: "$2b$10$Kd7Q9vZwX1mN3pL8rT2uOeYhGjFkIsBnCvAmDlEoHpRqStUwVxWy",
    avatar_url: "https://fantrack.app/avatars/otaku_mx.jpg",
    bio: "Amante del anime y el manga desde 2010",
    role: "user",
    created_at: new Date("2024-01-15"),
    is_active: true
  },
  {
    _id: ObjectId("664a000000000000000001b2"),
    username: "cine_freak",
    email: "cinefreak@hotmail.com",
    password: "$2b$10$Xv2NpQ8mR4kL9sW3uT7yOeZiHjGkJsBmDvAnElFoIqRtSuVwWxYz",
    avatar_url: "https://fantrack.app/avatars/cine_freak.jpg",
    bio: "Películas de terror y ciencia ficción",
    role: "user",
    created_at: new Date("2024-02-01"),
    is_active: true
  },
  {
    _id: ObjectId("664a000000000000000001b3"),
    username: "bookworm99",
    email: "bookworm99@yahoo.com",
    password: "$2b$10$Lm3OpR7nS5jM0tX4vU8zPfAiKkHlItCnEwBoFmGpJrSuTvWxXyZa",
    avatar_url: "https://fantrack.app/avatars/bookworm99.jpg",
    bio: "Lectora empedernida, manga lover",
    role: "user",
    created_at: new Date("2024-02-20"),
    is_active: true
  },
  {
    _id: ObjectId("664a000000000000000001b4"),
    username: "admin_fantrack",
    email: "admin@fantrack.app",
    password: "$2b$10$Qp4RsT8oU6kN1uY5wV9aQgBjLlImJtDoBxCpGnHqKsTvUwXyYzAb",
    avatar_url: "https://fantrack.app/avatars/admin.jpg",
    bio: "Administrador de FanTrack",
    role: "admin",
    created_at: new Date("2024-01-01"),
    is_active: true
  },
  {
    _id: ObjectId("664a000000000000000001b5"),
    username: "mangaka_fan",
    email: "mangakafan@gmail.com",
    password: "$2b$10$Rq5StU9pV7lO2vZ6xW0bRhCkMmJnKuEpCyDqHoIrLtUvWxYzAcBd",
    avatar_url: "https://fantrack.app/avatars/mangaka_fan.jpg",
    bio: "Solo manga y anime, nada más",
    role: "user",
    created_at: new Date("2024-03-05"),
    is_active: true
  }
]);

// ==================== CONTENTS ====================
db.contents.insertMany([
  {
    _id: ObjectId("664a000000000000000002c1"),
    title: "Spirited Away",
    original_title: "千と千尋の神隠し",
    type: "movie",
    synopsis: "A 10-year-old girl enters a spirit world after her parents are transformed into pigs, and must work to free herself and return home.",
    cover_url: "https://fantrack.app/covers/spirited_away.jpg",
    genres: ["Fantasy", "Adventure", "Animation"],
    release_year: 2001,
    status: "completed",
    score: 9.3,
    total_reviews: 1240,
    author: null,
    studio: "Studio Ghibli",
    created_at: new Date("2024-01-10")
  },
  {
    _id: ObjectId("664a000000000000000002c2"),
    title: "One Piece",
    original_title: "ワンピース",
    type: "manga",
    synopsis: "Monkey D. Luffy and his crew sail the Grand Line in search of the legendary treasure known as the One Piece.",
    cover_url: "https://fantrack.app/covers/one_piece.jpg",
    genres: ["Action", "Adventure", "Comedy"],
    release_year: 1997,
    status: "ongoing",
    score: 9.1,
    total_reviews: 3420,
    author: "Eiichiro Oda",
    studio: null,
    created_at: new Date("2024-01-10")
  },
  {
    _id: ObjectId("664a000000000000000002c3"),
    title: "Attack on Titan",
    original_title: "進撃の巨人",
    type: "anime",
    synopsis: "Humanity lives inside cities surrounded by enormous walls due to the Titans, gigantic humanoid creatures who devour humans.",
    cover_url: "https://fantrack.app/covers/aot.jpg",
    genres: ["Action", "Mystery", "Fantasy"],
    release_year: 2013,
    status: "completed",
    score: 9.0,
    total_reviews: 5800,
    author: null,
    studio: "MAPPA",
    created_at: new Date("2024-01-12")
  },
  {
    _id: ObjectId("664a000000000000000002c4"),
    title: "The Hobbit",
    original_title: "The Hobbit",
    type: "book",
    synopsis: "Bilbo Baggins, a homebody hobbit, is swept into an epic quest to reclaim the Lonely Mountain from the dragon Smaug.",
    cover_url: "https://fantrack.app/covers/hobbit.jpg",
    genres: ["Fantasy", "Adventure"],
    release_year: 1937,
    status: "completed",
    score: 8.7,
    total_reviews: 920,
    author: "J.R.R. Tolkien",
    studio: null,
    created_at: new Date("2024-01-15")
  },
  {
    _id: ObjectId("664a000000000000000002c5"),
    title: "Demon Slayer",
    original_title: "鬼滅の刃",
    type: "anime",
    synopsis: "Tanjiro Kamado becomes a demon slayer after his family is slaughtered and his sister Nezuko is turned into a demon.",
    cover_url: "https://fantrack.app/covers/demon_slayer.jpg",
    genres: ["Action", "Fantasy", "Slice of Life"],
    release_year: 2019,
    status: "ongoing",
    score: 8.9,
    total_reviews: 4100,
    author: null,
    studio: "ufotable",
    created_at: new Date("2024-01-18")
  }
]);

// ==================== REVIEWS ====================
db.reviews.insertMany([
  {
    _id: ObjectId("664a000000000000000003d1"),
    user_id: ObjectId("664a000000000000000001b1"),
    content_id: ObjectId("664a000000000000000002c1"),
    rating: 10,
    title: "Una obra maestra atemporal",
    body: "Spirited Away es simplemente perfecta. La animación, la historia y los personajes te atrapan desde el primer minuto. Miyazaki en su mejor momento sin duda.",
    contains_spoilers: false,
    likes: 42,
    is_edited: false,
    created_at: new Date("2024-03-20"),
    updated_at: null
  },
  {
    _id: ObjectId("664a000000000000000003d2"),
    user_id: ObjectId("664a000000000000000001b2"),
    content_id: ObjectId("664a000000000000000002c3"),
    rating: 9,
    title: "El mejor final de la historia reciente",
    body: "AOT tiene uno de los finales más polémicos pero yo lo defiendo. La narrativa desde el inicio hasta el capítulo final es brillante.",
    contains_spoilers: true,
    likes: 87,
    is_edited: true,
    created_at: new Date("2024-03-22"),
    updated_at: new Date("2024-04-01")
  },
  {
    _id: ObjectId("664a000000000000000003d3"),
    user_id: ObjectId("664a000000000000000001b3"),
    content_id: ObjectId("664a000000000000000002c4"),
    rating: 9,
    title: "Clásico imprescindible",
    body: "El Hobbit es la puerta de entrada perfecta al universo de Tolkien. Ligero, aventurero y lleno de magia. Ideal para cualquier edad.",
    contains_spoilers: false,
    likes: 31,
    is_edited: false,
    created_at: new Date("2024-04-05"),
    updated_at: null
  },
  {
    _id: ObjectId("664a000000000000000003d4"),
    user_id: ObjectId("664a000000000000000001b5"),
    content_id: ObjectId("664a000000000000000002c2"),
    rating: 10,
    title: "El manga definitivo",
    body: "One Piece lleva décadas y sigue siendo el mejor. La construcción del mundo, los personajes y las emociones que genera no tienen comparación.",
    contains_spoilers: false,
    likes: 120,
    is_edited: false,
    created_at: new Date("2024-04-10"),
    updated_at: null
  },
  {
    _id: ObjectId("664a000000000000000003d5"),
    user_id: ObjectId("664a000000000000000001b1"),
    content_id: ObjectId("664a000000000000000002c5"),
    rating: 8,
    title: "Visualmente impresionante",
    body: "Demon Slayer tiene la mejor animación de los últimos años. La historia es buena aunque no tan profunda, pero las peleas son espectaculares.",
    contains_spoilers: false,
    likes: 55,
    is_edited: false,
    created_at: new Date("2024-04-15"),
    updated_at: null
  }
]);

// ==================== LISTS ====================
db.lists.insertMany([
  {
    _id: ObjectId("664a000000000000000004e1"),
    user_id: ObjectId("664a000000000000000001b1"),
    name: "Mi Watchlist",
    type: "watchlist",
    is_public: true,
    items: [
      {
        content_id: ObjectId("664a000000000000000002c1"),
        added_at: new Date("2024-03-01"),
        progress: "completed",
        notes: "Una joya absoluta, la recomiendo a todos"
      },
      {
        content_id: ObjectId("664a000000000000000002c5"),
        added_at: new Date("2024-03-10"),
        progress: "watching",
        notes: "Voy en la temporada 3, increíble"
      }
    ],
    created_at: new Date("2024-03-01")
  },
  {
    _id: ObjectId("664a000000000000000004e2"),
    user_id: ObjectId("664a000000000000000001b2"),
    name: "Favoritos de siempre",
    type: "favorites",
    is_public: true,
    items: [
      {
        content_id: ObjectId("664a000000000000000002c3"),
        added_at: new Date("2024-02-15"),
        progress: "completed",
        notes: "Top 1 de todos los tiempos"
      }
    ],
    created_at: new Date("2024-02-15")
  },
  {
    _id: ObjectId("664a000000000000000004e3"),
    user_id: ObjectId("664a000000000000000001b3"),
    name: "Pendientes de leer",
    type: "watchlist",
    is_public: false,
    items: [
      {
        content_id: ObjectId("664a000000000000000002c2"),
        added_at: new Date("2024-04-01"),
        progress: "plan_to_watch",
        notes: "Me lo recomendaron mucho"
      },
      {
        content_id: ObjectId("664a000000000000000002c4"),
        added_at: new Date("2024-04-02"),
        progress: "completed",
        notes: "Hermoso libro, Tolkien es un genio"
      }
    ],
    created_at: new Date("2024-04-01")
  },
  {
    _id: ObjectId("664a000000000000000004e4"),
    user_id: ObjectId("664a000000000000000001b5"),
    name: "Solo los mejores mangas",
    type: "custom",
    is_public: true,
    items: [
      {
        content_id: ObjectId("664a000000000000000002c2"),
        added_at: new Date("2024-03-20"),
        progress: "watching",
        notes: "Voy en el volumen 100, largo pero vale"
      }
    ],
    created_at: new Date("2024-03-20")
  },
  {
    _id: ObjectId("664a000000000000000004e5"),
    user_id: ObjectId("664a000000000000000001b1"),
    name: "Abandonados",
    type: "dropped",
    is_public: false,
    items: [
      {
        content_id: ObjectId("664a000000000000000002c3"),
        added_at: new Date("2024-01-20"),
        progress: "dropped",
        notes: "Lo intenté pero no me enganchó al inicio"
      }
    ],
    created_at: new Date("2024-01-20")
  }
]);

print("FanTrack — DB created");
print("Collections created: genres, users, contents, reviews, lists");

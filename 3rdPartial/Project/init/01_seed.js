db = db.getSiblingDB('fantrack');

// ==================== INDEXES ====================

db.users.createIndex(
  { username: 1 },
  { unique: true }
);

db.users.createIndex(
  { email: 1 },
  { unique: true }
);

db.reviews.createIndex(
  { user_id: 1, content_id: 1 },
  { unique: true }
);

db.contents.createIndex({ type: 1 });
db.contents.createIndex({ genres: 1 });
db.contents.createIndex({ "stats.average_rating": -1 });
db.contents.createIndex({ release_year: -1 });

db.reviews.createIndex({ content_id: 1 });
db.reviews.createIndex({ user_id: 1 });
db.reviews.createIndex({ created_at: -1 });

db.lists.createIndex({ user_id: 1 });
db.lists.createIndex({ is_public: 1 });

db.contents.createIndex({
  title: "text",
  original_title: "text",
  synopsis: "text"
});

// ==================== GENRES ====================

db.genres.insertMany([
  {
    _id: ObjectId("664a000000000000000000a1"),
    name: "Action",
    description: "Content featuring intense physical activity, fights or fast-paced sequences",
    applies_to: ["anime", "manga", "series", "movie"],
    created_at: new Date("2024-01-01"),
    updated_at: new Date("2024-01-01")
  },
  {
    _id: ObjectId("664a000000000000000000a2"),
    name: "Romance",
    description: "Stories focused on romantic relationships between characters",
    applies_to: ["anime", "manga", "series", "movie", "book"],
    created_at: new Date("2024-01-01"),
    updated_at: new Date("2024-01-01")
  },
  {
    _id: ObjectId("664a000000000000000000a3"),
    name: "Fantasy",
    description: "Stories set in fictional worlds with magic and supernatural elements",
    applies_to: ["anime", "manga", "series", "movie", "book"],
    created_at: new Date("2024-01-01"),
    updated_at: new Date("2024-01-01")
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
    is_active: true,
    created_at: new Date("2024-01-15"),
    updated_at: new Date("2024-01-15")
  },

  {
    _id: ObjectId("664a000000000000000001b2"),
    username: "cine_freak",
    email: "cinefreak@hotmail.com",
    password: "$2b$10$Xv2NpQ8mR4kL9sW3uT7yOeZiHjGkJsBmDvAnElFoIqRtSuVwWxYz",
    avatar_url: "https://fantrack.app/avatars/cine_freak.jpg",
    bio: "Películas de terror y ciencia ficción",
    role: "user",
    is_active: true,
    created_at: new Date("2024-02-01"),
    updated_at: new Date("2024-02-01")
  }
]);

// ==================== CONTENTS ====================

db.contents.insertMany([
  {
    _id: ObjectId("664a000000000000000002c1"),

    title: "Spirited Away",
    original_title: "千と千尋の神隠し",

    type: "movie",

    synopsis: "A 10-year-old girl enters a spirit world after her parents are transformed into pigs.",

    cover_url: "https://fantrack.app/covers/spirited_away.jpg",

    genres: ["Fantasy", "Adventure", "Animation"],

    release_year: 2001,

    status: "completed",

    stats: {
      average_rating: 9.3,
      total_reviews: 1240
    },

    external_ids: {
      imdb: "tt0245429"
    },

    author: null,

    studio: "Studio Ghibli",

    created_at: new Date("2024-01-10"),

    updated_at: new Date("2024-01-10")
  },

  {
    _id: ObjectId("664a000000000000000002c2"),

    title: "One Piece",
    original_title: "ワンピース",

    type: "manga",

    synopsis: "Monkey D. Luffy and his crew sail the Grand Line searching for the One Piece treasure.",

    cover_url: "https://fantrack.app/covers/one_piece.jpg",

    genres: ["Action", "Adventure", "Comedy"],

    release_year: 1997,

    status: "ongoing",

    stats: {
      average_rating: 9.1,
      total_reviews: 3420
    },

    external_ids: {
      mal: 13,
      anilist: 30013
    },

    author: "Eiichiro Oda",

    studio: null,

    created_at: new Date("2024-01-10"),

    updated_at: new Date("2024-01-10")
  },

  {
    _id: ObjectId("664a000000000000000002c3"),

    title: "Attack on Titan",
    original_title: "進撃の巨人",

    type: "anime",

    synopsis: "Humanity lives inside walls protecting them from gigantic humanoid Titans.",

    cover_url: "https://fantrack.app/covers/aot.jpg",

    genres: ["Action", "Mystery", "Fantasy"],

    release_year: 2013,

    status: "completed",

    stats: {
      average_rating: 9.0,
      total_reviews: 5800
    },

    external_ids: {
      mal: 16498,
      anilist: 16498
    },

    author: null,

    studio: "MAPPA",

    created_at: new Date("2024-01-12"),

    updated_at: new Date("2024-01-12")
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

    body: "Spirited Away es simplemente perfecta.",

    contains_spoilers: false,

    likes: 42,

    is_edited: false,

    created_at: new Date("2024-03-20"),

    updated_at: new Date("2024-03-20")
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

        notes: "Una joya absoluta"
      }
    ],

    created_at: new Date("2024-03-01"),

    updated_at: new Date("2024-03-01")
  }
]);

print("FanTrack DB initialized successfully");

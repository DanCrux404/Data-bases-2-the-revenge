# FanTrack — NoSQL Database

A multimedia content tracking and review platform (anime, series, movies, manga and books).

This repo contains only the database layer of the project. The mobile app and web system are developed in separate repositories.

---

## Requirements

- [Docker](https://docs.docker.com/get-docker/) installed
- [Docker Compose](https://docs.docker.com/compose/) (included in Docker Desktop; on Linux install separately)
- Port `27017` available on your machine

---

## Running the database

### 1. Start the container

```bash
docker compose up -d
```

This automatically:
- Pulls the MongoDB 7.0 image
- Creates the `fantrack` database
- Creates all 5 collections with 5 sample records each
- Exposes MongoDB on `localhost:27017`

### 2. Verify it's running

```bash
docker ps
```

You should see something like:

```
CONTAINER ID   IMAGE       STATUS         PORTS                      NAMES
xxxxxxxxxxxx   mongo:7.0   Up X seconds   0.0.0.0:27017->27017/tcp   fantrack_db
```

---

### Connecting to the database

### From mongosh (terminal)

```bash
docker exec -it fantrack_db mongosh fantrack
```

### From MongoDB Compass (GUI)

Open Compass and connect with:
```
mongodb://localhost:27017
```

### From your app (connection string)

```
mongodb://localhost:27017/fantrack
```

---

## Available collections

| Collection | Description |
|------------|-------------|
| `users` | Registered users on the platform |
| `contents` | Movies, series, anime, manga and books |
| `reviews` | User reviews and ratings |
| `lists` | Personal lists (watchlist, favorites, etc.) |
| `genres` | Content genre catalog |

---

## Sample queries

Once connected via mongosh:

```js
// Show all collections
show collections

// Count documents per collection
db.users.countDocuments()
db.contents.countDocuments()
db.reviews.countDocuments()
db.lists.countDocuments()
db.genres.countDocuments()

// Get all contents
db.contents.find().pretty()

---

## Useful commands

```bash
# Start the container in the background
docker compose up -d

# View container logs
docker logs fantrack_db

# Stop the container (data is preserved)
docker compose down

# Stop AND delete all data (full reset)
docker compose down -v

# Restart the container
docker compose restart

# Restart container and fake data (reset all DB and container)
docker compose down -v
docker compose up
```

---

## Project structure

```
Project/
├── docker-compose.yml       # Container configuration
├── init/
│   └── 01_seed.js           # Initialization script with sample data
└── README.md                # This file
```

---

## Troubleshooting

**Port 27017 already in use:**
```bash
# Check what's using the port
sudo lsof -i :27017
# Or change the port in docker-compose.yml: "27018:27017"
```

**Permission denied on the init folder:**
```bash
sudo chown -R $USER:$USER ./init
```

**Seed didn't run (empty collections):**
```bash
# You need to delete the volume so the script runs again
docker compose down -v
docker compose up -d
```

**Check if the seed script ran correctly:**
```bash
docker logs fantrack_db | grep -i "fantrack\|error\|seed"
```

---

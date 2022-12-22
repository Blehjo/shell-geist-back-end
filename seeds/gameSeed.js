const { Game } = require('../models');

const gamedata = [
  {
    "profile_id": 1,
    "title": "Overwatch 2",
    "media_location_url": "https://i.imgur.com/v3viNdd.jpg",
  },
  {
    "profile_id": 2,
    "title": "Collisto Protocol",
    "media_location_url": "https://i.imgur.com/v3viNdd.jpg",
  },
  {
    "profile_id": 3,
    "title": "Pokemon Trainers",
    "media_location_url": "https://i.imgur.com/v3viNdd.jpg",
  },
  {
    "profile_id": 4,
    "title": "Elden Ring",
    "media_location_url": "https://i.imgur.com/v3viNdd.jpg",
  },
  {
    "profile_id": 5,
    "title": "Super Mario",
    "media_location_url": "https://i.imgur.com/v3viNdd.jpg",
  },
  {
    "profile_id": 6,
    "title": "Warzone",
    "media_location_url": "https://i.imgur.com/v3viNdd.jpg",
  },
  {
    "profile_id": 7,
    "title": "FIFA 21",
    "media_location_url": "https://i.imgur.com/v3viNdd.jpg",
  },
  {
    "profile_id": 8,
    "title": "Star Wars Battlefront II",
    "media_location_url": "https://i.imgur.com/v3viNdd.jpg",
  },
  {
    "profile_id": 9,
    "title": "Cyberpunk 2077",
    "media_location_url": "https://i.imgur.com/v3viNdd.jpg",
  },
  {
    "profile_id": 10,
    "title": "Assassin's Creed Valhalla",
    "media_location_url": "https://i.imgur.com/v3viNdd.jpg",
  }
]

const seedGames = () => Game.bulkCreate(gamedata);

module.exports = seedGames;
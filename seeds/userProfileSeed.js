const { UserProfile } = require('../models');

const userprofiledata = [
  {
    "username": "Bret",
    "email": "Sincere@april.biz",
    "password": "hello",
    "country": "America",
    "date_of_birth": 1,
    "first_name": "Leanne",
    "last_name": "Graham",
    "about": "Hey there! I am a programmer",
    "media_location_url": "https://i.imgur.com/v3viNdd.jpg"
  },
  {
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "password": "hello",
    "country": "America",
    "date_of_birth": 1,
    "first_name": "Ervin",
    "last_name": "Howell",
    "about": "Hey there! I am a programmer",
    "media_location_url": "https://i.imgur.com/v3viNdd.jpg"
  },
  {
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "password": "hello",
    "country": "America",
    "date_of_birth": 1,
    "first_name": "Clementine",
    "last_name": "Bauch",
    "about": "Hey there! I am a programmer",
    "media_location_url": "https://i.imgur.com/v3viNdd.jpg"
  },
  {
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "password": "hello",
    "country": "America",
    "date_of_birth": 1,
    "first_name": "Patricia",
    "last_name": "Lebsack",
    "about": "Hey there! I am a programmer",
    "media_location_url": "https://i.imgur.com/v3viNdd.jpg"
  },
  {
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "password": "hello",
    "country": "America",
    "date_of_birth": 1,
    "first_name": "Chelsey",
    "last_name": "Dietrich",
    "about": "Hey there! I am a programmer",
    "media_location_url": "https://i.imgur.com/v3viNdd.jpg"
  },
  {
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "password": "hello",
    "country": "America",
    "date_of_birth": 1,
    "first_name": "Dennis",
    "last_name":"Schulist",
    "about": "Hey there! I am a programmer",
    "media_location_url": "https://i.imgur.com/v3viNdd.jpg"
  },
  {
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "password": "hello",
    "country": "America",
    "date_of_birth": 1,
    "first_name": "Kurtis",
    "last_name": "Weissnat",
    "about": "Hey there! I am a programmer",
    "media_location_url": "https://i.imgur.com/v3viNdd.jpg"
  },
  {
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "password": "hello",
    "country": "America",
    "date_of_birth": 1,
    "first_name": "Nicholas",
    "last_name":"Runolfsdottir V",
    "about": "Hey there! I am a programmer",
    "media_location_url": "https://i.imgur.com/v3viNdd.jpg"
  },
  {
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "password": "hello",
    "country": "America",
    "date_of_birth": 1,
    "first_name": "Glenna",
    "last_name": "Reichert",
    "about": "Hey there! I am a programmer",
    "media_location_url": "https://i.imgur.com/v3viNdd.jpg"
  },
  {
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "password": "hello",
    "country": "America",
    "date_of_birth": 1,
    "first_name": "Clementina",
    "last_name": "DuBuque",
    "about": "Hey there! I am a programmer",
    "media_location_url": "https://i.imgur.com/v3viNdd.jpg"
  }
]

const seedProfiles = () => UserProfile.bulkCreate(userprofiledata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedProfiles;
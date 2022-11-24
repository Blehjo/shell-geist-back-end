const { UserProfile } = require('../models')

const userprofiledata = [
  {
    "username": "Bret",
    "email": "Sincere@april.biz",
    "password": "hello",
    "country": "America",
    "date_of_birth": 1,
    "first_name": "Leanne",
    "last_name": "Graham"
  },
  {
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "password": "hello",
    "country": "America",
    "date_of_birth": 1,
    "first_name": "Ervin",
    "last_name": "Howell"
  },
  {
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "password": "hello",
    "country": "America",
    "date_of_birth": 1,
    "first_name": "Clementine",
    "last_name": "Bauch"
  },
  {
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "password": "hello",
    "country": "America",
    "date_of_birth": 1,
    "first_name": "Patricia",
    "last_name": "Lebsack"
  },
  {
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "password": "hello",
    "country": "America",
    "date_of_birth": 1,
    "first_name": "Chelsey",
    "last_name": "Dietrich"
  },
  {
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "password": "hello",
    "country": "America",
    "date_of_birth": 1,
    "first_name": "Dennis",
    "last_name":"Schulist"
  },
  {
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "password": "hello",
    "country": "America",
    "date_of_birth": 1,
    "first_name": "Kurtis",
    "last_name": "Weissnat"
  },
  {
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "password": "hello",
    "country": "America",
    "date_of_birth": 1,
    "first_name": "Nicholas",
    "last_name":"Runolfsdottir V"
  },
  {
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "password": "hello",
    "country": "America",
    "date_of_birth": 1,
    "first_name": "Glenna",
    "last_name": "Reichert"
  },
  {
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "password": "hello",
    "country": "America",
    "date_of_birth": 1,
    "first_name": "Clementina",
    "last_name": "DuBuque"
  }
]

const seedProfiles = () => UserProfile.bulkCreate(userprofiledata);

module.exports = seedProfiles;
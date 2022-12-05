const { UserProfile } = require('../models');

const userprofiledata = [
  {
    // "group_id": 10,
    "username": "Bret",
    "email": "Sincere@april.biz",
    "password": "hello",
    "country": "America",
    "date_of_birth": 1,
    "first_name": "Leanne",
    "last_name": "Graham"
  },
  {
    // "group_id": 9, 
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "password": "hello",
    "country": "America",
    "date_of_birth": 1,
    "first_name": "Ervin",
    "last_name": "Howell"
  },
  {
    // "group_id": 8, 
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "password": "hello",
    "country": "America",
    "date_of_birth": 1,
    "first_name": "Clementine",
    "last_name": "Bauch"
  },
  {
    // "group_id": 7, 
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "password": "hello",
    "country": "America",
    "date_of_birth": 1,
    "first_name": "Patricia",
    "last_name": "Lebsack"
  },
  {
    // "group_id": 6, 
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "password": "hello",
    "country": "America",
    "date_of_birth": 1,
    "first_name": "Chelsey",
    "last_name": "Dietrich"
  },
  {
    // "group_id": 5, 
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "password": "hello",
    "country": "America",
    "date_of_birth": 1,
    "first_name": "Dennis",
    "last_name":"Schulist"
  },
  {
    // "group_id": 4, 
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "password": "hello",
    "country": "America",
    "date_of_birth": 1,
    "first_name": "Kurtis",
    "last_name": "Weissnat"
  },
  {
    // "group_id": 3, 
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "password": "hello",
    "country": "America",
    "date_of_birth": 1,
    "first_name": "Nicholas",
    "last_name":"Runolfsdottir V"
  },
  {
    // "group_id": 2, 
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "password": "hello",
    "country": "America",
    "date_of_birth": 1,
    "first_name": "Glenna",
    "last_name": "Reichert"
  },
  {
    // "group_id": 1, 
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "password": "hello",
    "country": "America",
    "date_of_birth": 1,
    "first_name": "Clementina",
    "last_name": "DuBuque"
  }
]

const seedProfiles = () => UserProfile.bulkCreate(userprofiledata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedProfiles;
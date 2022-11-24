const { Friendship } = require('../models')

const friendshipdata = [
  {
    "username": "Bret",
    "email": "Sincere@april.biz",
    "password": "hello",
    "country": "America",
    "date_of_birth": 1,
    "first_name": "Leanne",
    "last_name": "Graham"
  },
]

const seedFriendships = () => Friendship.bulkCreate(friendshipdata);

module.exports = seedFriendships;
const { Friendship } = require('../models')

const friendshipdata = [
  {
    "profile_request": 1,
    "profile_accept": 2
  },
  {
    "profile_request": 2,
    "profile_accept": 3
  },
  {
    "profile_request": 3,
    "profile_accept": 4
  },
  {
    "profile_request": 4,
    "profile_accept": 5
  },
  {
    "profile_request": 5,
    "profile_accept": 6
  },
  {
    "profile_request": 6,
    "profile_accept": 7
  },
  {
    "profile_request": 7,
    "profile_accept": 8
  },
  {
    "profile_request": 8,
    "profile_accept": 9
  },
  {
    "profile_request": 9,
    "profile_accept": 10
  },
  {
    "profile_request": 10,
    "profile_accept": 1
  },
]

const seedFriendships = () => Friendship.bulkCreate(friendshipdata);

module.exports = seedFriendships;
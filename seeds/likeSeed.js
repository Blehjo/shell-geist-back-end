const { PostLike } = require('../models')

const postlikedata = [
  {
    "post_id": 1,
    "profile_id": 1,
  },
  {
    "post_id": 1,
    "profile_id": 2,
  },
  {
    "post_id": 1,
    "profile_id": 3,
  },
  {
    "post_id": 1,
    "profile_id": 4,
  },
  {
    "post_id": 1,
    "profile_id": 5,
  },
  {
    "post_id": 1,
    "profile_id": 6,
  },
  {
    "post_id": 2,
    "profile_id": 7,
  },
  {
    "post_id": 2,
    "profile_id": 8,
  },
  {
    "post_id": 2,
    "profile_id": 9,
  },
  {
    "post_id": 2,
    "profile_id": 10,
  },
  {
    "post_id": 2,
    "profile_id": 1,
  },
  {
    "post_id": 2,
    "profile_id": 2,
  },
  {
    "post_id": 2,
    "profile_id": 3,
  },
  {
    "post_id": 3,
    "profile_id": 4,
  },
  {
    "post_id": 3,
    "profile_id": 5,
  },
  {
    "post_id": 3,
    "profile_id": 6,
  },
  {
    "post_id": 3,
    "profile_id": 7,
  },
  {
    "post_id": 3,
    "profile_id": 8,
  },
  {
    "post_id": 3,
    "profile_id": 9,
  },
  {
    "post_id": 3,
    "profile_id": 10,
  },
  {
    "post_id": 7,
    "profile_id": 1,
  },
  {
    "post_id": 7,
    "profile_id": 2,
  },
  {
    "post_id": 7,
    "profile_id": 3,
  },
  {
    "post_id": 7,
    "profile_id": 4,
  },
  {
    "post_id": 7,
    "profile_id": 5,
  },
  {
    "post_id": 7,
    "profile_id": 6,
  },
  {
    "post_id": 8,
    "profile_id": 7,
  },
  {
    "post_id": 8,
    "profile_id": 8,
  },
  {
    "post_id": 8,
    "profile_id": 9,
  },
  {
    "post_id": 8,
    "profile_id": 10,
  },
  {
    "post_id": 8,
    "profile_id": 1,
  },
  {
    "post_id": 8,
    "profile_id": 2,
  },
  {
    "post_id": 8,
    "profile_id": 3,
  },
  {
    "post_id": 9,
    "profile_id": 4,
  },
  {
    "post_id": 9,
    "profile_id": 5,
  },
  {
    "post_id": 9,
    "profile_id": 6,
  },
  {
    "post_id": 9,
    "profile_id": 7,
  },
  {
    "post_id": 9,
    "profile_id": 8,
  },
  {
    "post_id": 9,
    "profile_id": 9,
  },
  {
    "post_id": 9,
    "profile_id": 10,
  },
  {
    "post_id": 4,
    "profile_id": 1,
  },
  {
    "post_id": 4,
    "profile_id": 2,
  },
  {
    "post_id": 4,
    "profile_id": 3,
  },
  {
    "post_id": 4,
    "profile_id": 4,
  },
  {
    "post_id": 4,
    "profile_id": 5,
  },
  {
    "post_id": 4,
    "profile_id": 6,
  },
  {
    "post_id": 5,
    "profile_id": 7,
  },
  {
    "post_id": 5,
    "profile_id": 8,
  },
  {
    "post_id": 5,
    "profile_id": 9,
  },
  {
    "post_id": 5,
    "profile_id": 10,
  },
  {
    "post_id": 5,
    "profile_id": 1,
  },
  {
    "post_id": 5,
    "profile_id": 2,
  },
  {
    "post_id": 5,
    "profile_id": 3,
  },
  {
    "post_id": 6,
    "profile_id": 4,
  },
  {
    "post_id": 6,
    "profile_id": 5,
  },
  {
    "post_id": 6,
    "profile_id": 6,
  },
  {
    "post_id": 6,
    "profile_id": 7,
  },
  {
    "post_id": 6,
    "profile_id": 8,
  },
  {
    "post_id": 6,
    "profile_id": 9,
  },
  {
    "post_id": 6,
    "profile_id": 10,
  },
  {
    "post_id": 10,
    "profile_id": 7,
  },
  {
    "post_id": 10,
    "profile_id": 8,
  },
  {
    "post_id": 10,
    "profile_id": 9,
  },
  {
    "post_id": 10,
    "profile_id": 10,
  },
]

const seedLikes = () => PostLike.bulkCreate(postlikedata);

module.exports = seedLikes;
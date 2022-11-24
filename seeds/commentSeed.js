const { PostComment } = require('../models')

const postcommentdata = [
  {
    "post_id": 1,
    "profile_id": 1,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 1,
    "profile_id": 2,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 1,
    "profile_id": 3,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 1,
    "profile_id": 4,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 1,
    "profile_id": 5,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 1,
    "profile_id": 6,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 2,
    "profile_id": 7,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 2,
    "profile_id": 8,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 2,
    "profile_id": 9,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 2,
    "profile_id": 10,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 2,
    "profile_id": 1,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 2,
    "profile_id": 2,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 2,
    "profile_id": 3,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 3,
    "profile_id": 4,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 3,
    "profile_id": 5,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 3,
    "profile_id": 6,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 3,
    "profile_id": 7,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 3,
    "profile_id": 8,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 3,
    "profile_id": 9,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 3,
    "profile_id": 10,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 7,
    "profile_id": 1,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 7,
    "profile_id": 2,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 7,
    "profile_id": 3,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 7,
    "profile_id": 4,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 7,
    "profile_id": 5,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 7,
    "profile_id": 6,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 8,
    "profile_id": 7,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 8,
    "profile_id": 8,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 8,
    "profile_id": 9,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 8,
    "profile_id": 10,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 8,
    "profile_id": 1,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 8,
    "profile_id": 2,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 8,
    "profile_id": 3,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 9,
    "profile_id": 4,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 9,
    "profile_id": 5,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 9,
    "profile_id": 6,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 9,
    "profile_id": 7,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 9,
    "profile_id": 8,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 9,
    "profile_id": 9,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 9,
    "profile_id": 10,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 4,
    "profile_id": 1,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 4,
    "profile_id": 2,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 4,
    "profile_id": 3,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 4,
    "profile_id": 4,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 4,
    "profile_id": 5,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 4,
    "profile_id": 6,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 5,
    "profile_id": 7,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 5,
    "profile_id": 8,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 5,
    "profile_id": 9,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 5,
    "profile_id": 10,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 5,
    "profile_id": 1,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 5,
    "profile_id": 2,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 5,
    "profile_id": 3,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 6,
    "profile_id": 4,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 6,
    "profile_id": 5,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 6,
    "profile_id": 6,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 6,
    "profile_id": 7,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 6,
    "profile_id": 8,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 6,
    "profile_id": 9,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 6,
    "profile_id": 10,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 10,
    "profile_id": 7,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 10,
    "profile_id": 8,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 10,
    "profile_id": 9,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
  {
    "post_id": 10,
    "profile_id": 10,
    "comment_text": "10/10 game trailer. So excited for the return to survival horror from this dev team",
  },
]

const seedComments = () => PostComment.bulkCreate(postcommentdata);

module.exports = seedComments;
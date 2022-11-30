const { ChatMember } = require('../models')

const chatmemberdata = [
  {
    "profile_id": 1,
    "conversation_id": 1
  },
  {
    "profile_id": 2,
    "conversation_id": 1
  },
  {
    "profile_id": 3,
    "conversation_id": 1
  },
  {
    "profile_id": 4,
    "conversation_id": 2
  },
  {
    "profile_id": 5,
    "conversation_id": 2
  },
  {
    "profile_id": 6,
    "conversation_id": 2
  },
  {
    "profile_id": 7,
    "conversation_id": 3
  },
  {
    "profile_id": 8,
    "conversation_id": 3
  },
  {
    "profile_id": 9,
    "conversation_id": 3
  },
  {
    "profile_id": 10,
    "conversation_id": 4
  },
  {
    "profile_id": 8,
    "conversation_id": 4
  },
  {
    "profile_id": 9,
    "conversation_id": 4
  },
  {
    "profile_id": 1,
    "conversation_id": 5
  },
  {
    "profile_id": 2,
    "conversation_id": 5
  },
  {
    "profile_id": 3,
    "conversation_id": 5
  },
  {
    "profile_id": 4,
    "conversation_id": 6
  },
  {
    "profile_id": 5,
    "conversation_id": 6
  },
  {
    "profile_id": 6,
    "conversation_id": 6
  },
  {
    "profile_id": 7,
    "conversation_id": 7
  },
  {
    "profile_id": 8,
    "conversation_id": 7
  },
  {
    "profile_id": 9,
    "conversation_id": 7
  },
  {
    "profile_id": 10,
    "conversation_id": 8
  },
  {
    "profile_id": 1,
    "conversation_id": 8
  },
  {
    "profile_id": 2,
    "conversation_id": 9
  },
  {
    "profile_id": 3,
    "conversation_id": 9
  },
  {
    "profile_id": 4,
    "conversation_id": 9
  },
  {
    "profile_id": 5,
    "conversation_id": 10
  },
  {
    "profile_id": 6,
    "conversation_id": 10
  },
  {
    "profile_id": 7,
    "conversation_id": 10
  },
]

const seedChatMembers = () => ChatMember.bulkCreate(chatmemberdata);

module.exports = seedChatMembers;
const { Message } = require('../models')

const messagedata = [
  {
    "from_profile": 1,
    "message_text": "hello how are you doing, today?",
    "conversation_id": 1
  },
  {
    "from_profile": 2,
    "message_text": "hello how are you doing, today?",
    "conversation_id": 1
  },
  {
    "from_profile": 3,
    "message_text": "hello how are you doing, today?",
    "conversation_id": 1
  },
  {
    "from_profile": 4,
    "message_text": "hello how are you doing, today?",
    "conversation_id": 2
  },
  {
    "from_profile": 5,
    "message_text": "hello how are you doing, today?",
    "conversation_id": 2
  },
  {
    "from_profile": 6,
    "message_text": "hello how are you doing, today?",
    "conversation_id": 2
  },
  {
    "from_profile": 7,
    "message_text": "hello how are you doing, today?",
    "conversation_id": 3
  },
  {
    "from_profile": 8,
    "message_text": "hello how are you doing, today?",
    "conversation_id": 3
  },
  {
    "from_profile": 9,
    "message_text": "hello how are you doing, today?",
    "conversation_id": 3
  },
  {
    "from_profile": 10,
    "message_text": "hello how are you doing, today?",
    "conversation_id": 4
  },
  {
    "from_profile": 8,
    "message_text": "hello how are you doing, today?",
    "conversation_id": 4
  },
  {
    "from_profile": 9,
    "message_text": "hello how are you doing, today?",
    "conversation_id": 4
  },
  {
    "from_profile": 1,
    "message_text": "hello how are you doing, today?",
    "conversation_id": 5
  },
  {
    "from_profile": 2,
    "message_text": "hello how are you doing, today?",
    "conversation_id": 5
  },
  {
    "from_profile": 3,
    "message_text": "hello how are you doing, today?",
    "conversation_id": 5
  },
  {
    "from_profile": 4,
    "message_text": "hello how are you doing, today?",
    "conversation_id": 6
  },
  {
    "from_profile": 5,
    "message_text": "hello how are you doing, today?",
    "conversation_id": 6
  },
  {
    "from_profile": 6,
    "message_text": "hello how are you doing, today?",
    "conversation_id": 6
  },
  {
    "from_profile": 7,
    "message_text": "hello how are you doing, today?",
    "conversation_id": 7
  },
  {
    "from_profile": 8,
    "message_text": "hello how are you doing, today?",
    "conversation_id": 7
  },
  {
    "from_profile": 9,
    "message_text": "hello how are you doing, today?",
    "conversation_id": 7
  },
  {
    "from_profile": 10,
    "message_text": "hello how are you doing, today?",
    "conversation_id": 8
  },
  {
    "from_profile": 1,
    "message_text": "hello how are you doing, today?",
    "conversation_id": 8
  },
  {
    "from_profile": 2,
    "message_text": "hello how are you doing, today?",
    "conversation_id": 9
  },
  {
    "from_profile": 3,
    "message_text": "hello how are you doing, today?",
    "conversation_id": 9
  },
  {
    "from_profile": 4,
    "message_text": "hello how are you doing, today?",
    "conversation_id": 9
  },
  {
    "from_profile": 5,
    "message_text": "hello how are you doing, today?",
    "conversation_id": 10
  },
  {
    "from_profile": 6,
    "message_text": "hello how are you doing, today?",
    "conversation_id": 10
  },
  {
    "from_profile": 7,
    "message_text": "hello how are you doing, today?",
    "conversation_id": 10
  },
]

const seedMessages = () => Message.bulkCreate(messagedata);

module.exports = seedMessages;
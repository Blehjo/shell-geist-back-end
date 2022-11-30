const { Conversation } = require('../models')

const conversationdata = [
  {
    "conversation_name": "convo name"
  },
  {
    "conversation_name": "convo name"
  },
  {
    "conversation_name": "convo name"
  },
  {
    "conversation_name": "convo name"
  },
  {
    "conversation_name": "convo name"
  },
  {
    "conversation_name": "convo name"
  },
  {
    "conversation_name": "convo name"
  },
  {
    "conversation_name": "convo name"
  },
  {
    "conversation_name": "convo name"
  },
  {
    "conversation_name": "convo name"
  },
]

const seedConversations = () => Conversation.bulkCreate(conversationdata);

module.exports = seedConversations;
const { EventMember } = require('../models')

const eventmemberdata = [
  {
    "profile_id": 1,
    "event_id": 1,
  },
  {
    "profile_id": 2,
    "event_id": 1,
  },
  {
    "profile_id": 3,
    "event_id": 1,
  },
  {
    "profile_id": 4,
    "event_id": 2,
  },
  {
    "profile_id": 5,
    "event_id": 2,
  },
  {
    "profile_id": 6,
    "event_id": 2,
  },
  {
    "profile_id": 7,
    "event_id": 3,
  },
  {
    "profile_id": 8,
    "event_id": 3,
  },
  {
    "profile_id": 9,
    "event_id": 3,
  },
  {
    "profile_id": 10,
    "event_id": 4,
  },
  {
    "profile_id": 8,
    "event_id": 4,
  },
  {
    "profile_id": 9,
    "event_id": 4,
  },
  {
    "profile_id": 1,
    "event_id": 5,
  },
  {
    "profile_id": 2,
    "event_id": 5,
  },
  {
    "profile_id": 3,
    "event_id": 5,
  },
  {
    "profile_id": 4,
    "event_id": 6,
  },
  {
    "profile_id": 5,
    "event_id": 6,
  },
  {
    "profile_id": 6,
    "event_id": 6,
  },
  {
    "profile_id": 7,
    "event_id": 7,
  },
  {
    "profile_id": 8,
    "event_id": 7,
  },
  {
    "profile_id": 9,
    "event_id": 7,
  },
  {
    "profile_id": 10,
    "event_id": 8,
  },
  {
    "profile_id": 1,
    "event_id": 8,
  },
  {
    "profile_id": 2,
    "event_id": 9,
  },
  {
    "profile_id": 3,
    "event_id": 9,
  },
  {
    "profile_id": 4,
    "event_id": 9,
  },
  {
    "profile_id": 5,
    "event_id": 10,
  },
  {
    "profile_id": 6,
    "event_id": 10,
  },
  {
    "profile_id": 7,
    "event_id": 10,
  },
]

const seedEventMembers = () => EventMember.bulkCreate(eventmemberdata);

module.exports = seedEventMembers;
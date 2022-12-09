const { GroupMember } = require('../models')

const groupmemberdata = [
  {
    "profile_id": 1,
    "group_id": 1,
    // "event_id": 1,
  },
  {
    "profile_id": 2,
    "group_id": 1,
    // "event_id": 1,
  },
  {
    "profile_id": 3,
    "group_id": 1,
    // "event_id": 1,
  },
  {
    "profile_id": 4,
    "group_id": 2,
    // "event_id": 1,
  },
  {
    "profile_id": 5,
    "group_id": 2,
    // "event_id": 1,
  },
  {
    "profile_id": 6,
    "group_id": 2,
    // "event_id": 1,
  },
  {
    "profile_id": 7,
    "group_id": 3,
    // "event_id": 1,
  },
  {
    "profile_id": 8,
    "group_id": 3,
    // "event_id": 1,
  },
  {
    "profile_id": 9,
    "group_id": 3,
    // "event_id": 1,
  },
  {
    "profile_id": 10,
    "group_id": 4,
    // "event_id": 1,
  },
  {
    "profile_id": 8,
    "group_id": 4,
    // "event_id": 1,
  },
  {
    "profile_id": 9,
    "group_id": 4,
    // "event_id": 1,
  },
  {
    "profile_id": 1,
    "group_id": 5,
    // "event_id": 1,
  },
  {
    "profile_id": 2,
    "group_id": 5,
    // "event_id": 1,
  },
  {
    "profile_id": 3,
    "group_id": 5,
    // "event_id": 1,
  },
  {
    "profile_id": 4,
    "group_id": 6,
    // "event_id": 1,
  },
  {
    "profile_id": 5,
    "group_id": 6,
    // "event_id": 1,
  },
  {
    "profile_id": 6,
    "group_id": 6,
    // "event_id": 1,
  },
  {
    "profile_id": 7,
    "group_id": 7,
    // "event_id": 1,
  },
  {
    "profile_id": 8,
    "group_id": 7,
    // "event_id": 1,
  },
  {
    "profile_id": 9,
    "group_id": 7,
    // "event_id": 1,
  },
  {
    "profile_id": 10,
    "group_id": 8,
    // "event_id": 1,
  },
  {
    "profile_id": 1,
    "group_id": 8,
    // "event_id": 1,
  },
  {
    "profile_id": 2,
    "group_id": 9,
    // "event_id": 1,
  },
  {
    "profile_id": 3,
    "group_id": 9,
    // "event_id": 1,
  },
  {
    "profile_id": 4,
    "group_id": 9,
    // "event_id": 1,
  },
  {
    "profile_id": 5,
    "group_id": 10,
    // "event_id": 1,
  },
  {
    "profile_id": 6,
    "group_id": 10,
    // "event_id": 1,
  },
  {
    "profile_id": 7,
    "group_id": 10,
    // "event_id": 1,
  },
]

const seedGroupMembers = () => GroupMember.bulkCreate(groupmemberdata);

module.exports = seedGroupMembers;
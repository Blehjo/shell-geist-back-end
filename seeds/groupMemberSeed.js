const { GroupMember } = require('../models')

const groupmemberdata = [
  {
    "profile_id": 1,
    "group_id": 1
  },
  {
    "profile_id": 2,
    "group_id": 1
  },
  {
    "profile_id": 3,
    "group_id": 1
  },
  {
    "profile_id": 4,
    "group_id": 2
  },
  {
    "profile_id": 5,
    "group_id": 2
  },
  {
    "profile_id": 6,
    "group_id": 2
  },
  {
    "profile_id": 7,
    "group_id": 3
  },
  {
    "profile_id": 8,
    "group_id": 3
  },
  {
    "profile_id": 9,
    "group_id": 3
  },
  {
    "profile_id": 10,
    "group_id": 4
  },
  {
    "profile_id": 8,
    "group_id": 4
  },
  {
    "profile_id": 9,
    "group_id": 4
  },
  {
    "profile_id": 1,
    "group_id": 5
  },
  {
    "profile_id": 2,
    "group_id": 5
  },
  {
    "profile_id": 3,
    "group_id": 5
  },
  {
    "profile_id": 4,
    "group_id": 6
  },
  {
    "profile_id": 5,
    "group_id": 6
  },
  {
    "profile_id": 6,
    "group_id": 6
  },
  {
    "profile_id": 7,
    "group_id": 7
  },
  {
    "profile_id": 8,
    "group_id": 7
  },
  {
    "profile_id": 9,
    "group_id": 7
  },
  {
    "profile_id": 10,
    "group_id": 8
  },
  {
    "profile_id": 1,
    "group_id": 8
  },
  {
    "profile_id": 2,
    "group_id": 9
  },
  {
    "profile_id": 3,
    "group_id": 9
  },
  {
    "profile_id": 4,
    "group_id": 9
  },
  {
    "profile_id": 5,
    "group_id": 10
  },
  {
    "profile_id": 6,
    "group_id": 10
  },
  {
    "profile_id": 7,
    "group_id": 10
  },
]

const seedGroupMembers = () => GroupMember.bulkCreate(groupmemberdata);

module.exports = seedGroupMembers;
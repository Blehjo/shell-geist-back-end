const { Group } = require('../models');

const groupdata = [
  {
    "profile_id": 1,
    "group_name": "Overwatch 2 League",
    "media_location_url": "",
    "group_descritpion": "hello",
    "country": "America",
    "platform": "Any"
  },
  {
    "profile_id": 2,
    "group_name": "Collisto Protocol",
    "media_location_url": "",
    "group_descritpion": "hello",
    "country": "America",
    "platform": "Any"
  },
  {
    "profile_id": 3,
    "group_name": "Pokemon Trainers",
    "media_location_url": "",
    "group_descritpion": "hello",
    "country": "America",
    "platform": "Any"
  },
  {
    "profile_id": 4,
    "group_name": "Elden Ring Wizards",
    "media_location_url": "",
    "group_descritpion": "hello",
    "country": "America",
    "platform": "Any"
  },
  {
    "profile_id": 5,
    "group_name": "All Things Mario",
    "media_location_url": "",
    "group_descritpion": "hello",
    "country": "America",
    "platform": "Any"
  },
  {
    "profile_id": 6,
    "group_name": "Warzone Meetup",
    "media_location_url": "",
    "group_descritpion": "hello",
    "country": "America",
    "platform": "Any"
  },
  {
    "profile_id": 7,
    "group_name": "FIFA Mecca",
    "media_location_url": "",
    "group_descritpion": "hello",
    "country": "America",
    "platform": "Any"
  },
  {
    "profile_id": 8,
    "group_name": "Star Wars",
    "media_location_url": "",
    "group_descritpion": "hello",
    "country": "America",
    "platform": "Any"
  },
  {
    "profile_id": 9,
    "group_name": "Cyberpunk 2077",
    "media_location_url": "",
    "group_descritpion": "hello",
    "country": "America",
    "platform": "Any"
  },
  {
    "profile_id": 10,
    "group_name": "Assassin's Creed Stealth",
    "media_location_url": "",
    "group_descritpion": "hello",
    "country": "America",
    "platform": "Any"
  }
]

const seedGroups = () => Group.bulkCreate(groupdata);

module.exports = seedGroups;
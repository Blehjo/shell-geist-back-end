const { Group } = require('../models');

const groupdata = [
  {
    "profile_id": [1,2,3,4,5,6],
    "group_name": "Overwatch 2 League",
    "media_location_url": "",
    "group_description": "Seeking a place to share your thoughts & creations? Creative Thoughts is all about collaborating, sharing, conversation, and more! We have a wide variety of topics however we’re always listening to suggestions from the community.",
    "country": "America",
    "platform": "Any"
  },
  {
    "profile_id": [2,2,3,4,5,6],
    "group_name": "Collisto Protocol",
    "media_location_url": "",
    "group_description": "Creative Thoughts is all about collaborating, sharing, conversation, and more! We have a wide variety of topics however we’re always listening to suggestions from the community.",
    "country": "America",
    "platform": "Any"
  },
  {
    "profile_id": [3,2,3,4,5,6],
    "group_name": "Pokemon Trainers",
    "media_location_url": "",
    "group_description": "Are you an adult (21+) who is interested in video games and wanting to make new friends to game with? Do you want to participate in nerdy activities and play classic and contemporary games?",
    "country": "America",
    "platform": "Any"
  },
  {
    "profile_id": [4,2,3,4,5,6],
    "group_name": "Elden Ring Wizards",
    "media_location_url": "",
    "group_description": "Greetings! We're a group of people that believe Elden Ring its applications have a positive impact on our world's future.",
    "country": "America",
    "platform": "Any"
  },
  {
    "profile_id": [5,2,3,4,5,6],
    "group_name": "All Things Mario",
    "media_location_url": "",
    "group_description": "Whatever game you’re interested in getting better at this year, Shell Geist can help. Join the community today and help others by leaving advice or learn from others and ask questions.",
    "country": "America",
    "platform": "Any"
  },
  {
    "profile_id": [6,2,3,4,5,6],
    "group_name": "Warzone Meetup",
    "media_location_url": "",
    "group_description": "Welcome to the official r/Warzone Discord server! Please take a few moments to read through our rules before joining the community.",
    "country": "America",
    "platform": "Any"
  },
  {
    "profile_id": [7,2,3,4,5,6],
    "group_name": "FIFA Mecca",
    "media_location_url": "",
    "group_description": "Welcome to the official r/Fifa Discord server! Please take a few moments to read through our rules before joining the community.",
    "country": "America",
    "platform": "Any"
  },
  {
    "profile_id": [8,2,3,4,5,6],
    "group_name": "Star Wars",
    "media_location_url": "",
    "group_description": "Welcome to the official Star Wars Server community! Please help us keep this server a welcome and friendly place by respecting our rules.",
    "country": "America",
    "platform": "Any"
  },
  {
    "profile_id": [9,2,3,4,5,6],
    "group_name": "Cyberpunk 2077",
    "media_location_url": "",
    "group_description": "Welcome to the Official Cyberpunk Game server! Hope you’ll enjoy your time here and engage in interesting conversations.",
    "country": "America",
    "platform": "Any"
  },
  {
    "profile_id": [10,2,3,4,5,6],
    "group_name": "Assassin's Creed Stealth",
    "media_location_url": "",
    "group_description": "Welcome to the Official Assassin's Creed Game server! Hope you’ll enjoy your time here and engage in interesting conversations.",
    "country": "America",
    "platform": "Any"
  }
]

const seedGroups = () => Group.bulkCreate(groupdata);

module.exports = seedGroups;
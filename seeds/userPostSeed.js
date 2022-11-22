const { UserPost } = require('../models');

const userpostdata = [
    {
        "profile_id": 1,
        "written_text": "Not my favorite game, but definitely worth a play. I'm knew to single player games. Felt that I needed a break from competitive gaming and the toxicity that comes with it",
        "media_location_url": "",
        "created_date_time": 3
    },
    {
        "profile_id": 2,
        "written_text": "Has anyone played Callisto Protocol?",
        "media_location_url": "",
        "created_date_time": 3
    },
    {
        "profile_id": 3,
        "written_text": "Overwatch 2 Lobby. Experienced players only! DM for the code.",
        "media_location_url": "",
        "created_date_time": 3
    },
    {
        "profile_id": 4,
        "written_text": "",
        "media_location_url": "",
        "created_date_time": 3
    },
    {
        "profile_id": 5,
        "written_text": "",
        "media_location_url": "",
        "created_date_time": 3
    },
    {
        "profile_id": 6,
        "written_text": "",
        "media_location_url": "",
        "created_date_time": 3
    },
    {
        "profile_id": 7,
        "written_text": "",
        "media_location_url": "",
        "created_date_time": 3
    },
    {
        "profile_id": 8,
        "written_text": "",
        "media_location_url": "",
        "created_date_time": 3
    },
    {
        "profile_id": 9,
        "written_text": "",
        "media_location_url": "",
        "created_date_time": 3
    },
    {
        "profile_id": 10,
        "written_text": "",
        "media_location_url": "",
        "created_date_time": 3
    }
]

const seedPosts = () => UserPost.bulkCreate(userpostdata);

module.exports = seedPosts;
const { UserPost } = require('../models');

const userpostdata = [
    {
        "profile_id": 1,
        "written_text": "Not my favorite game, but definitely worth a play. I'm knew to single player games. Felt that I needed a break from competitive gaming and the toxicity that comes with it",
        "media_location_url": "",
    },
    {
        "profile_id": 2,
        "written_text": "Has anyone played Callisto Protocol?",
        "media_location_url": "",
    },
    {
        "profile_id": 3,
        "written_text": "Overwatch 2 Lobby. Experienced players only! DM for the code.",
        "media_location_url": "",
    },
    {
        "profile_id": 4,
        "written_text": "This is one of the most well made game trailers I've seen in such a long time. No spoilers, no context, but just enough action, suspense, and explanation to intrigue even those not normally fans of the horror genre. Well done!",
        "media_location_url": "",
    },
    {
        "profile_id": 5,
        "written_text": "Not the dead Space we wanted but the one we deserve",
        "media_location_url": "",
    },
    {
        "profile_id": 6,
        "written_text": "I can see all the dedication and emotion put into this ❤ takes me back when games always had amazing trailers",
        "media_location_url": "",
    },
    {
        "profile_id": 7,
        "written_text": "This game looks sooo good. A breath of fresh air in the industry",
        "media_location_url": "",
    },
    {
        "profile_id": 8,
        "written_text": "I love the guy who created this and Dead Space. You can tell he has a real passion for gaming - especially when most modern games are degrading in quality.",
        "media_location_url": "",
    },
    {
        "profile_id": 9,
        "written_text": "I can't believe this game came out 10 years ago, It's still supreme!",
        "media_location_url": "",
    },
    {
        "profile_id": 10,
        "written_text": "I remember trying to play this when it first came out. I rented it, played the first part, and when I encountered the first monster, I shut it off and returned the game lol.",
        "media_location_url": "",
    }
]

const seedPosts = () => UserPost.bulkCreate(userpostdata);

module.exports = seedPosts;
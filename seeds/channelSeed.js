const { GroupChannel } = require('../models');

const groupchanneldata = [
    {
        "group_id": 1,
        "channel_name": "Introduction",
        "channel_description": "Not my favorite game, but definitely worth a play. I'm knew to single player games. Felt that I needed a break from competitive gaming and the toxicity that comes with it",
    },
    {
        "group_id": 1,
        "channel_name": "Dos and Donts",
        "channel_description": "Has anyone played Callisto Protocol?",
    },
    {
        "group_id": 1,
        "channel_name": "Party Channel",
        "channel_description": "Overwatch 2 Lobby. Experienced players only! DM for the code.",
    },
    {
        "group_id": 1,
        "channel_name": "Questions",
        "channel_description": "This is one of the most well made game trailers I've seen in such a long time. No spoilers, no context, but just enough action, suspense, and explanation to intrigue even those not normally fans of the horror genre. Well done!",
    },
    {
        "group_id": 1,
        "channel_name": "Events",
        "channel_description": "Not the dead Space we wanted but the one we deserve",
    },
    {
        "group_id": 1,
        "channel_name": "Leagues",
        "channel_description": "I can see all the dedication and emotion put into this ❤ takes me back when games always had amazing trailers",
    },
    {
        "group_id": 1,
        "channel_name": "Party Codes",
        "channel_description": "This game looks sooo good. A breath of fresh air in the industry",
    },
    {
        "group_id": 1,
        "channel_name": "Admin",
        "channel_description": "I love the guy who created this and Dead Space. You can tell he has a real passion for gaming - especially when most modern games are degrading in quality.",
    },
    {
        "group_id": 1,
        "channel_name": "Upcoming Events",
        "channel_description": "I can't believe this game came out 10 years ago, It's still supreme!",
    },
    {
        "group_id": 2,
        "channel_name": "Introductions",
        "channel_description": "I remember trying to play this when it first came out. I rented it, played the first part, and when I encountered the first monster, I shut it off and returned the game lol.",
    },
    {
        "group_id": 2,
        "channel_name": "Dos and Donts",
        "channel_description": "Has anyone played Callisto Protocol?",
    },
    {
        "group_id": 2,
        "channel_name": "Party Channel",
        "channel_description": "Overwatch 2 Lobby. Experienced players only! DM for the code.",
    },
    {
        "group_id": 2,
        "channel_name": "Questions",
        "channel_description": "This is one of the most well made game trailers I've seen in such a long time. No spoilers, no context, but just enough action, suspense, and explanation to intrigue even those not normally fans of the horror genre. Well done!",
    },
    {
        "group_id": 2,
        "channel_name": "Events",
        "channel_description": "Not the dead Space we wanted but the one we deserve",
    },
    {
        "group_id": 2,
        "channel_name": "Leagues",
        "channel_description": "I can see all the dedication and emotion put into this ❤ takes me back when games always had amazing trailers",
    },
    {
        "group_id": 2,
        "channel_name": "Party Codes",
        "channel_description": "This game looks sooo good. A breath of fresh air in the industry",
    },
    {
        "group_id": 2,
        "channel_name": "Admin",
        "channel_description": "I love the guy who created this and Dead Space. You can tell he has a real passion for gaming - especially when most modern games are degrading in quality.",
    },
    {
        "group_id": 2,
        "channel_name": "Upcoming Events",
        "channel_description": "I can't believe this game came out 10 years ago, It's still supreme!",
    },
    {
        "group_id": 4,
        "channel_name": "Introductions",
        "channel_description": "I remember trying to play this when it first came out. I rented it, played the first part, and when I encountered the first monster, I shut it off and returned the game lol.",
    },
    {
        "group_id": 3,
        "channel_name": "Dos and Donts",
        "channel_description": "Has anyone played Callisto Protocol?",
    },
    {
        "group_id": 3,
        "channel_name": "Party Channel",
        "channel_description": "Overwatch 3 Lobby. Experienced players only! DM for the code.",
    },
    {
        "group_id": 3,
        "channel_name": "Questions",
        "channel_description": "This is one of the most well made game trailers I've seen in such a long time. No spoilers, no context, but just enough action, suspense, and explanation to intrigue even those not normally fans of the horror genre. Well done!",
    },
    {
        "group_id": 3,
        "channel_name": "Events",
        "channel_description": "Not the dead Space we wanted but the one we deserve",
    },
    {
        "group_id": 3,
        "channel_name": "Leagues",
        "channel_description": "I can see all the dedication and emotion put into this ❤ takes me back when games always had amazing trailers",
    },
    {
        "group_id": 3,
        "channel_name": "Party Codes",
        "channel_description": "This game looks sooo good. A breath of fresh air in the industry",
    },
    {
        "group_id": 3,
        "channel_name": "Admin",
        "channel_description": "I love the guy who created this and Dead Space. You can tell he has a real passion for gaming - especially when most modern games are degrading in quality.",
    },
    {
        "group_id": 3,
        "channel_name": "Upcoming Events",
        "channel_description": "I can't believe this game came out 10 years ago, It's still supreme!",
    },
    {
        "group_id": 3,
        "channel_name": "Introductions",
        "channel_description": "I remember trying to play this when it first came out. I rented it, played the first part, and when I encountered the first monster, I shut it off and returned the game lol.",
    },
    {
        "group_id": 4,
        "channel_name": "Dos and Donts",
        "channel_description": "Has anyone played Callisto Protocol?",
    },
    {
        "group_id": 4,
        "channel_name": "Party Channel",
        "channel_description": "Overwatch 4 Lobby. Experienced players only! DM for the code.",
    },
    {
        "group_id": 4,
        "channel_name": "Questions",
        "channel_description": "This is one of the most well made game trailers I've seen in such a long time. No spoilers, no context, but just enough action, suspense, and explanation to intrigue even those not normally fans of the horror genre. Well done!",
    },
    {
        "group_id": 4,
        "channel_name": "Events",
        "channel_description": "Not the dead Space we wanted but the one we deserve",
    },
    {
        "group_id": 4,
        "channel_name": "Leagues",
        "channel_description": "I can see all the dedication and emotion put into this ❤ takes me back when games always had amazing trailers",
    },
    {
        "group_id": 4,
        "channel_name": "Party Codes",
        "channel_description": "This game looks sooo good. A breath of fresh air in the industry",
    },
    {
        "group_id": 4,
        "channel_name": "Admin",
        "channel_description": "I love the guy who created this and Dead Space. You can tell he has a real passion for gaming - especially when most modern games are degrading in quality.",
    },
    {
        "group_id": 4,
        "channel_name": "Upcoming Events",
        "channel_description": "I can't believe this game came out 10 years ago, It's still supreme!",
    },
    {
        "group_id": 5,
        "channel_name": "Dos and Donts",
        "channel_description": "Has anyone played Callisto Protocol?",
    },
    {
        "group_id": 5,
        "channel_name": "Party Channel",
        "channel_description": "Overwatch 5 Lobby. Experienced players only! DM for the code.",
    },
    {
        "group_id": 5,
        "channel_name": "Questions",
        "channel_description": "This is one of the most well made game trailers I've seen in such a long time. No spoilers, no context, but just enough action, suspense, and explanation to intrigue even those not normally fans of the horror genre. Well done!",
    },
    {
        "group_id": 5,
        "channel_name": "Events",
        "channel_description": "Not the dead Space we wanted but the one we deserve",
    },
    {
        "group_id": 5,
        "channel_name": "Leagues",
        "channel_description": "I can see all the dedication and emotion put into this ❤ takes me back when games always had amazing trailers",
    },
    {
        "group_id": 5,
        "channel_name": "Party Codes",
        "channel_description": "This game looks sooo good. A breath of fresh air in the industry",
    },
    {
        "group_id": 5,
        "channel_name": "Admin",
        "channel_description": "I love the guy who created this and Dead Space. You can tell he has a real passion for gaming - especially when most modern games are degrading in quality.",
    },
    {
        "group_id": 5,
        "channel_name": "Upcoming Events",
        "channel_description": "I can't believe this game came out 10 years ago, It's still supreme!",
    },
    {
        "group_id": 6,
        "channel_name": "Dos and Donts",
        "channel_description": "Has anyone played Callisto Protocol?",
    },
    {
        "group_id": 6,
        "channel_name": "Party Channel",
        "channel_description": "Overwatch 6 Lobby. Experienced players only! DM for the code.",
    },
    {
        "group_id": 6,
        "channel_name": "Questions",
        "channel_description": "This is one of the most well made game trailers I've seen in such a long time. No spoilers, no context, but just enough action, suspense, and explanation to intrigue even those not normally fans of the horror genre. Well done!",
    },
    {
        "group_id": 6,
        "channel_name": "Events",
        "channel_description": "Not the dead Space we wanted but the one we deserve",
    },
    {
        "group_id": 6,
        "channel_name": "Leagues",
        "channel_description": "I can see all the dedication and emotion put into this ❤ takes me back when games always had amazing trailers",
    },
    {
        "group_id": 6,
        "channel_name": "Party Codes",
        "channel_description": "This game looks sooo good. A breath of fresh air in the industry",
    },
    {
        "group_id": 6,
        "channel_name": "Admin",
        "channel_description": "I love the guy who created this and Dead Space. You can tell he has a real passion for gaming - especially when most modern games are degrading in quality.",
    },
    {
        "group_id": 6,
        "channel_name": "Upcoming Events",
        "channel_description": "I can't believe this game came out 10 years ago, It's still supreme!",
    },
    {
        "group_id": 7,
        "channel_name": "Dos and Donts",
        "channel_description": "Has anyone played Callisto Protocol?",
    },
    {
        "group_id": 7,
        "channel_name": "Party Channel",
        "channel_description": "Overwatch 7 Lobby. Experienced players only! DM for the code.",
    },
    {
        "group_id": 7,
        "channel_name": "Questions",
        "channel_description": "This is one of the most well made game trailers I've seen in such a long time. No spoilers, no context, but just enough action, suspense, and explanation to intrigue even those not normally fans of the horror genre. Well done!",
    },
    {
        "group_id": 7,
        "channel_name": "Events",
        "channel_description": "Not the dead Space we wanted but the one we deserve",
    },
    {
        "group_id": 7,
        "channel_name": "Leagues",
        "channel_description": "I can see all the dedication and emotion put into this ❤ takes me back when games always had amazing trailers",
    },
    {
        "group_id": 7,
        "channel_name": "Party Codes",
        "channel_description": "This game looks sooo good. A breath of fresh air in the industry",
    },
    {
        "group_id": 7,
        "channel_name": "Admin",
        "channel_description": "I love the guy who created this and Dead Space. You can tell he has a real passion for gaming - especially when most modern games are degrading in quality.",
    },
    {
        "group_id": 7,
        "channel_name": "Upcoming Events",
        "channel_description": "I can't believe this game came out 10 years ago, It's still supreme!",
    },
    {
        "group_id": 8,
        "channel_name": "Dos and Donts",
        "channel_description": "Has anyone played Callisto Protocol?",
    },
    {
        "group_id": 8,
        "channel_name": "Party Channel",
        "channel_description": "Overwatch 8 Lobby. Experienced players only! DM for the code.",
    },
    {
        "group_id": 8,
        "channel_name": "Questions",
        "channel_description": "This is one of the most well made game trailers I've seen in such a long time. No spoilers, no context, but just enough action, suspense, and explanation to intrigue even those not normally fans of the horror genre. Well done!",
    },
    {
        "group_id": 8,
        "channel_name": "Events",
        "channel_description": "Not the dead Space we wanted but the one we deserve",
    },
    {
        "group_id": 8,
        "channel_name": "Leagues",
        "channel_description": "I can see all the dedication and emotion put into this ❤ takes me back when games always had amazing trailers",
    },
    {
        "group_id": 8,
        "channel_name": "Party Codes",
        "channel_description": "This game looks sooo good. A breath of fresh air in the industry",
    },
    {
        "group_id": 8,
        "channel_name": "Admin",
        "channel_description": "I love the guy who created this and Dead Space. You can tell he has a real passion for gaming - especially when most modern games are degrading in quality.",
    },
    {
        "group_id": 8,
        "channel_name": "Upcoming Events",
        "channel_description": "I can't believe this game came out 10 years ago, It's still supreme!",
    },
    {
        "group_id": 9,
        "channel_name": "Dos and Donts",
        "channel_description": "Has anyone played Callisto Protocol?",
    },
    {
        "group_id": 9,
        "channel_name": "Party Channel",
        "channel_description": "Overwatch 9 Lobby. Experienced players only! DM for the code.",
    },
    {
        "group_id": 9,
        "channel_name": "Questions",
        "channel_description": "This is one of the most well made game trailers I've seen in such a long time. No spoilers, no context, but just enough action, suspense, and explanation to intrigue even those not normally fans of the horror genre. Well done!",
    },
    {
        "group_id": 9,
        "channel_name": "Events",
        "channel_description": "Not the dead Space we wanted but the one we deserve",
    },
    {
        "group_id": 9,
        "channel_name": "Leagues",
        "channel_description": "I can see all the dedication and emotion put into this ❤ takes me back when games always had amazing trailers",
    },
    {
        "group_id": 9,
        "channel_name": "Party Codes",
        "channel_description": "This game looks sooo good. A breath of fresh air in the industry",
    },
    {
        "group_id": 9,
        "channel_name": "Admin",
        "channel_description": "I love the guy who created this and Dead Space. You can tell he has a real passion for gaming - especially when most modern games are degrading in quality.",
    },
    {
        "group_id": 9,
        "channel_name": "Upcoming Events",
        "channel_description": "I can't believe this game came out 10 years ago, It's still supreme!",
    },
    {
        "group_id": 10,
        "channel_name": "Dos and Donts",
        "channel_description": "Has anyone played Callisto Protocol?",
    },
    {
        "group_id": 10,
        "channel_name": "Party Channel",
        "channel_description": "Overwatch 10 Lobby. Experienced players only! DM for the code.",
    },
    {
        "group_id": 10,
        "channel_name": "Questions",
        "channel_description": "This is one of the most well made game trailers I've seen in such a long time. No spoilers, no context, but just enough action, suspense, and explanation to intrigue even those not normally fans of the horror genre. Well done!",
    },
    {
        "group_id": 10,
        "channel_name": "Events",
        "channel_description": "Not the dead Space we wanted but the one we deserve",
    },
    {
        "group_id": 10,
        "channel_name": "Leagues",
        "channel_description": "I can see all the dedication and emotion put into this ❤ takes me back when games always had amazing trailers",
    },
    {
        "group_id": 10,
        "channel_name": "Party Codes",
        "channel_description": "This game looks sooo good. A breath of fresh air in the industry",
    },
    {
        "group_id": 10,
        "channel_name": "Admin",
        "channel_description": "I love the guy who created this and Dead Space. You can tell he has a real passion for gaming - especially when most modern games are degrading in quality.",
    },
    {
        "group_id": 10,
        "channel_name": "Upcoming Events",
        "channel_description": "I can't believe this game came out 10 years ago, It's still supreme!",
    },
]

const seedChannels = () => GroupChannel.bulkCreate(groupchanneldata);

module.exports = seedChannels;
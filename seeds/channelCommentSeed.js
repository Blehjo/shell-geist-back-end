const { ChannelComment } = require('../models');

const channelcommentdata = [
    {
        "channel_id": 1,
        "profile_id": 2,
        "channel_comment_text": "Not my favorite game, but definitely worth a play. I'm knew to single player games. Felt that I needed a break from competitive gaming and the toxicity that comes with it",
    },
    {
        "channel_id": 1,
        "profile_id": 2,
        "channel_comment_text": "Has anyone played Callisto Protocol?",
    },
    {
        "channel_id": 1,
        "profile_id": 4,
        "channel_comment_text": "Overwatch 2 Lobby. Experienced players only! DM for the code.",
    },
    {
        "channel_id": 1,
        "profile_id": 5,
        "channel_comment_text": "This is one of the most well made game trailers I've seen in such a long time. No spoilers, no context, but just enough action, suspense, and explanation to intrigue even those not normally fans of the horror genre. Well done!",
    },
    {
        "channel_id": 1,
        "profile_id": 6,
        "channel_comment_text": "Not the dead Space we wanted but the one we deserve",
    },
    {
        "channel_id": 1,
        "profile_id": 7,
        "channel_comment_text": "I can see all the dedication and emotion put into this ❤ takes me back when games always had amazing trailers",
    },
    {
        "channel_id": 1,
        "profile_id": 9,
        "channel_comment_text": "This game looks sooo good. A breath of fresh air in the industry",
    },
    {
        "channel_id": 1,
        "profile_id": 9,
        "channel_comment_text": "I love the guy who created this and Dead Space. You can tell he has a real passion for gaming - especially when most modern games are degrading in quality.",
    },
    {
        "channel_id": 1,
        "profile_id": 5,
        "channel_comment_text": "I can't believe this game came out 10 years ago, It's still supreme!",
    },
    {
        "channel_id": 2,
        "profile_id": 4,
        "channel_comment_text": "I remember trying to play this when it first came out. I rented it, played the first part, and when I encountered the first monster, I shut it off and returned the game lol.",
    },
    {
        "channel_id": 2,
        "profile_id": 4,
        "channel_comment_text": "Has anyone played Callisto Protocol?",
    },
    {
        "channel_id": 2,
        "profile_id": 6,
        "channel_comment_text": "Overwatch 2 Lobby. Experienced players only! DM for the code.",
    },
    {
        "channel_id": 2,
        "profile_id": 1,
        "channel_comment_text": "This is one of the most well made game trailers I've seen in such a long time. No spoilers, no context, but just enough action, suspense, and explanation to intrigue even those not normally fans of the horror genre. Well done!",
    },
    {
        "channel_id": 2,
        "profile_id": 1,
        "channel_comment_text": "Not the dead Space we wanted but the one we deserve",
    },
    {
        "channel_id": 2,
        "profile_id": 1,
        "channel_comment_text": "I can see all the dedication and emotion put into this ❤ takes me back when games always had amazing trailers",
    },
    {
        "channel_id": 2,
        "profile_id": 2,
        "channel_comment_text": "This game looks sooo good. A breath of fresh air in the industry",
    },
    {
        "channel_id": 2,
        "profile_id": 2,
        "channel_comment_text": "I love the guy who created this and Dead Space. You can tell he has a real passion for gaming - especially when most modern games are degrading in quality.",
    },
    {
        "channel_id": 2,
        "profile_id": 4,
        "channel_comment_text": "I can't believe this game came out 10 years ago, It's still supreme!",
    },
    {
        "channel_id": 3,
        "profile_id": 4,
        "channel_comment_text": "I remember trying to play this when it first came out. I rented it, played the first part, and when I encountered the first monster, I shut it off and returned the game lol.",
    },
    {
        "channel_id": 3,
        "profile_id": 5,
        "channel_comment_text": "Has anyone played Callisto Protocol?",
    },
    {
        "channel_id": 3,
        "profile_id": 6,
        "channel_comment_text": "Overwatch 3 Lobby. Experienced players only! DM for the code.",
    },
    {
        "channel_id": 3,
        "profile_id": 5,
        "channel_comment_text": "This is one of the most well made game trailers I've seen in such a long time. No spoilers, no context, but just enough action, suspense, and explanation to intrigue even those not normally fans of the horror genre. Well done!",
    },
    {
        "channel_id": 3,
        "profile_id": 6,
        "channel_comment_text": "Not the dead Space we wanted but the one we deserve",
    },
    {
        "channel_id": 3,
        "profile_id": 6,
        "channel_comment_text": "I can see all the dedication and emotion put into this ❤ takes me back when games always had amazing trailers",
    },
    {
        "channel_id": 3,
        "profile_id": 7,
        "channel_comment_text": "This game looks sooo good. A breath of fresh air in the industry",
    },
    {
        "channel_id": 3,
        "profile_id": 6,
        "channel_comment_text": "I love the guy who created this and Dead Space. You can tell he has a real passion for gaming - especially when most modern games are degrading in quality.",
    },
    {
        "channel_id": 3,
        "profile_id": 7,
        "channel_comment_text": "I can't believe this game came out 10 years ago, It's still supreme!",
    },
    {
        "channel_id": 3,
        "profile_id": 8,
        "channel_comment_text": "I remember trying to play this when it first came out. I rented it, played the first part, and when I encountered the first monster, I shut it off and returned the game lol.",
    },
    {
        "channel_id": 4,
        "profile_id": 8,
        "channel_comment_text": "Has anyone played Callisto Protocol?",
    },
    {
        "channel_id": 4,
        "profile_id": 5,
        "channel_comment_text": "Overwatch 4 Lobby. Experienced players only! DM for the code.",
    },
    {
        "channel_id": 4,
        "profile_id": 2,
        "channel_comment_text": "This is one of the most well made game trailers I've seen in such a long time. No spoilers, no context, but just enough action, suspense, and explanation to intrigue even those not normally fans of the horror genre. Well done!",
    },
    {
        "channel_id": 4,
        "profile_id": 3,
        "channel_comment_text": "Not the dead Space we wanted but the one we deserve",
    },
    {
        "channel_id": 4,
        "profile_id": 5,
        "channel_comment_text": "I can see all the dedication and emotion put into this ❤ takes me back when games always had amazing trailers",
    },
    {
        "channel_id": 4,
        "profile_id": 1,
        "channel_comment_text": "This game looks sooo good. A breath of fresh air in the industry",
    },
    {
        "channel_id": 4,
        "profile_id": 2,
        "channel_comment_text": "I love the guy who created this and Dead Space. You can tell he has a real passion for gaming - especially when most modern games are degrading in quality.",
    },
    {
        "channel_id": 4,
        "profile_id": 1,
        "channel_comment_text": "I can't believe this game came out 10 years ago, It's still supreme!",
    },
    {
        "channel_id": 5,
        "profile_id": 2,
        "channel_comment_text": "Has anyone played Callisto Protocol?",
    },
    {
        "channel_id": 5,
        "profile_id": 2,
        "channel_comment_text": "Overwatch 5 Lobby. Experienced players only! DM for the code.",
    },
    {
        "channel_id": 5,
        "profile_id": 7,
        "channel_comment_text": "This is one of the most well made game trailers I've seen in such a long time. No spoilers, no context, but just enough action, suspense, and explanation to intrigue even those not normally fans of the horror genre. Well done!",
    },
    {
        "channel_id": 5,
        "profile_id": 7,
        "channel_comment_text": "Not the dead Space we wanted but the one we deserve",
    },
    {
        "channel_id": 5,
        "profile_id": 8,
        "channel_comment_text": "I can see all the dedication and emotion put into this ❤ takes me back when games always had amazing trailers",
    },
    {
        "channel_id": 5,
        "profile_id": 9,
        "channel_comment_text": "This game looks sooo good. A breath of fresh air in the industry",
    },
    {
        "channel_id": 5,
        "profile_id": 10,
        "channel_comment_text": "I love the guy who created this and Dead Space. You can tell he has a real passion for gaming - especially when most modern games are degrading in quality.",
    },
    {
        "channel_id": 5,
        "profile_id": 9,
        "channel_comment_text": "I can't believe this game came out 10 years ago, It's still supreme!",
    },
    {
        "channel_id": 6,
        "profile_id": 4,
        "channel_comment_text": "Has anyone played Callisto Protocol?",
    },
    {
        "channel_id": 6,
        "profile_id": 3,
        "channel_comment_text": "Overwatch 6 Lobby. Experienced players only! DM for the code.",
    },
    {
        "channel_id": 6,
        "profile_id": 2,
        "channel_comment_text": "This is one of the most well made game trailers I've seen in such a long time. No spoilers, no context, but just enough action, suspense, and explanation to intrigue even those not normally fans of the horror genre. Well done!",
    },
    {
        "channel_id": 6,
        "profile_id": 1,
        "channel_comment_text": "Not the dead Space we wanted but the one we deserve",
    },
    {
        "channel_id": 6,
        "profile_id": 2,
        "channel_comment_text": "I can see all the dedication and emotion put into this ❤ takes me back when games always had amazing trailers",
    },
    {
        "channel_id": 6,
        "profile_id": 6,
        "channel_comment_text": "This game looks sooo good. A breath of fresh air in the industry",
    },
    {
        "channel_id": 6,
        "profile_id": 5,
        "channel_comment_text": "I love the guy who created this and Dead Space. You can tell he has a real passion for gaming - especially when most modern games are degrading in quality.",
    },
    {
        "channel_id": 6,
        "profile_id": 8,
        "channel_comment_text": "I can't believe this game came out 10 years ago, It's still supreme!",
    },
    {
        "channel_id": 7,
        "profile_id": 8,
        "channel_comment_text": "Has anyone played Callisto Protocol?",
    },
    {
        "channel_id": 7,
        "profile_id": 9,
        "channel_comment_text": "Overwatch 7 Lobby. Experienced players only! DM for the code.",
    },
    {
        "channel_id": 7,
        "profile_id": 4,
        "channel_comment_text": "This is one of the most well made game trailers I've seen in such a long time. No spoilers, no context, but just enough action, suspense, and explanation to intrigue even those not normally fans of the horror genre. Well done!",
    },
    {
        "channel_id": 7,
        "profile_id": 2,
        "channel_comment_text": "Not the dead Space we wanted but the one we deserve",
    },
    {
        "channel_id": 7,
        "profile_id": 3,
        "channel_comment_text": "I can see all the dedication and emotion put into this ❤ takes me back when games always had amazing trailers",
    },
    {
        "channel_id": 7,
        "profile_id": 3,
        "channel_comment_text": "This game looks sooo good. A breath of fresh air in the industry",
    },
    {
        "channel_id": 7,
        "profile_id": 2,
        "channel_comment_text": "I love the guy who created this and Dead Space. You can tell he has a real passion for gaming - especially when most modern games are degrading in quality.",
    },
    {
        "channel_id": 7,
        "profile_id": 2,
        "channel_comment_text": "I can't believe this game came out 10 years ago, It's still supreme!",
    },
    {
        "channel_id": 8,
        "profile_id": 1,
        "channel_comment_text": "Has anyone played Callisto Protocol?",
    },
    {
        "channel_id": 8,
        "profile_id": 1,
        "channel_comment_text": "Overwatch 8 Lobby. Experienced players only! DM for the code.",
    },
    {
        "channel_id": 8,
        "profile_id": 1,
        "channel_comment_text": "This is one of the most well made game trailers I've seen in such a long time. No spoilers, no context, but just enough action, suspense, and explanation to intrigue even those not normally fans of the horror genre. Well done!",
    },
    {
        "channel_id": 8,
        "profile_id": 7,
        "channel_comment_text": "Not the dead Space we wanted but the one we deserve",
    },
    {
        "channel_id": 8,
        "profile_id": 6,
        "channel_comment_text": "I can see all the dedication and emotion put into this ❤ takes me back when games always had amazing trailers",
    },
    {
        "channel_id": 8,
        "profile_id": 8,
        "channel_comment_text": "This game looks sooo good. A breath of fresh air in the industry",
    },
    {
        "channel_id": 8,
        "profile_id": 3,
        "channel_comment_text": "I love the guy who created this and Dead Space. You can tell he has a real passion for gaming - especially when most modern games are degrading in quality.",
    },
    {
        "channel_id": 8,
        "profile_id": 3,
        "channel_comment_text": "I can't believe this game came out 10 years ago, It's still supreme!",
    },
    {
        "channel_id": 9,
        "profile_id": 3,
        "channel_comment_text": "Has anyone played Callisto Protocol?",
    },
    {
        "channel_id": 9,
        "profile_id": 3,
        "channel_comment_text": "Overwatch 9 Lobby. Experienced players only! DM for the code.",
    },
    {
        "channel_id": 9,
        "profile_id": 1,
        "channel_comment_text": "This is one of the most well made game trailers I've seen in such a long time. No spoilers, no context, but just enough action, suspense, and explanation to intrigue even those not normally fans of the horror genre. Well done!",
    },
    {
        "channel_id": 9,
        "profile_id": 2,
        "channel_comment_text": "Not the dead Space we wanted but the one we deserve",
    },
    {
        "channel_id": 9,
        "profile_id": 3,
        "channel_comment_text": "I can see all the dedication and emotion put into this ❤ takes me back when games always had amazing trailers",
    },
    {
        "channel_id": 9,
        "profile_id": 4,
        "channel_comment_text": "This game looks sooo good. A breath of fresh air in the industry",
    },
    {
        "channel_id": 9,
        "profile_id": 7,
        "channel_comment_text": "I love the guy who created this and Dead Space. You can tell he has a real passion for gaming - especially when most modern games are degrading in quality.",
    },
    {
        "channel_id": 9,
        "profile_id": 8,
        "channel_comment_text": "I can't believe this game came out 10 years ago, It's still supreme!",
    },
    {
        "channel_id": 10,
        "profile_id": 10,
        "channel_comment_text": "Has anyone played Callisto Protocol?",
    },
    {
        "channel_id": 10,
        "profile_id": 10,
        "channel_comment_text": "Overwatch 10 Lobby. Experienced players only! DM for the code.",
    },
    {
        "channel_id": 10,
        "profile_id": 10,
        "channel_comment_text": "This is one of the most well made game trailers I've seen in such a long time. No spoilers, no context, but just enough action, suspense, and explanation to intrigue even those not normally fans of the horror genre. Well done!",
    },
    {
        "channel_id": 10,
        "profile_id": 10,
        "channel_comment_text": "Not the dead Space we wanted but the one we deserve",
    },
    {
        "channel_id": 10,
        "profile_id": 10,
        "channel_comment_text": "I can see all the dedication and emotion put into this ❤ takes me back when games always had amazing trailers",
    },
    {
        "channel_id": 10,
        "profile_id": 10,
        "channel_comment_text": "This game looks sooo good. A breath of fresh air in the industry",
    },
    {
        "channel_id": 10,
        "profile_id": 10,
        "channel_comment_text": "I love the guy who created this and Dead Space. You can tell he has a real passion for gaming - especially when most modern games are degrading in quality.",
    },
    {
        "channel_id": 10,
        "profile_id": 10,
        "channel_comment_text": "I can't believe this game came out 10 years ago, It's still supreme!",
    },
]

const seedChannelComments = () => ChannelComment.bulkCreate(channelcommentdata);

module.exports = seedChannelComments;
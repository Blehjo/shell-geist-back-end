const router = require('express').Router();
const { Conversation, Message, ChatMember, UserProfile } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const conversationData = await Conversation.findAll({
            include: [
                {
                    model: Message,
                },
                {
                    model: ChatMember,
                    where: {
                        profile_id: req.session.user_id
                    }
                }
            ],
            order: [
                ['id', 'DESC'],
            ],
        });

        const posts = conversationData.map((post) => post.get({ plain: true }))
        res.json(
            posts
        )
        console.log(posts)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/:conversation_id', async (req, res) => {
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
        try {
            const conversationdata = await Conversation.findAll({
                where: {
                    id: req.params.conversation_id
                },
                include: [
                    {
                        model: Message,
                    },
                    {
                        model: ChatMember,
                    },
                ],
                // order: [
                //     ['id', 'DESC'],
                // ],
            });
            res.json(conversationdata);
            console.log(conversationdata);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
});

router.post('/', async (req, res) => {
    try {
        const conversationData = await Conversation.create({
            conversation_name: req.session.user_id,
        });
        res.status(200).json(conversationData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
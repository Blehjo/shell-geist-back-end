const router = require('express').Router();
const { Conversation, Message, ChatMember } = require('../../models');

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

router.get('/:id', async (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/login');
    } else {
        try {
            const conversationdata = await Conversation.findAll({
                attributes: ['id'],
                include: [
                    {
                        model: Message,
                    },
                    {
                        model: ChatMember,
                        where: {
                            profile_id: req.sessions.user_id
                        },
                    }
                ],
                order: [
                    ['id', 'DESC'],
                ],
            });
            res.json(conversationdata);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
});

router.post('/:id', async (req, res) => {
    try {
        const conversationData = await Conversation.create({
            conversation_name: req.body.conversation_name,
        });
        res.status(200).json(conversationData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
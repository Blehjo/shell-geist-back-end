const router = require('express').Router();
const { Conversation } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const commentData = await Conversation.findAll({
            order: [
                ['id', 'DESC'],
            ],
        });

        const posts = commentData.map((post) => post.get({ plain: true }))
        res.json(
            posts
        )
        console.log(posts)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post('/:id', async (req, res) => {
    try {
        const commentData = await Conversation.create({
            conversation_name: req.body.conversation_name,
        });
        res.status(200).json(commentData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
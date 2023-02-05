const router = require('express').Router();
const { ChannelComment } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const commentData = await ChannelComment.findAll({
            order: [
                ['created_date_time', 'DESC'],
            ],
        });

        const posts = commentData.map((post) => post.get({ plain: true }))
        res.json(
            posts
        )
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post('/:channel_id', async (req, res) => {
    try {
        const commentData = await ChannelComment.create({
            channel_id: req.params.channel_id,
            profile_id: req.session.user_id,
            channel_comment_text: req.body.channel_comment_text,
        });
        res.status(200).json(commentData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
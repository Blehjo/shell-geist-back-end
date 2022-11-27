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
            const commentData = await ChannelComment.findByPk(req.params.id);
            res.json(commentData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
});

router.post('/', async (req, res) => {
    try {
        const commentData = await ChannelComment.create({
            group_name: req.body.group_name,
            group_description: req.body.group_description,
            country: req.body.country,
            platform: req.body.platform,

        });
        res.status(200).json(commentData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const commentData = await ChannelComment.findByPk(req.params.id);
        commentData.set(req.body);
        await commentData.save();
        res.status(200).json(commentData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const commentData = await ChannelComment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!commentData) {
            res.status(404).json({ message: 'No Group found!' });
            return;
        }
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
const router = require('express').Router();
const { PostComment } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const commentData = await PostComment.findAll({
            order: [
                ['created_date_time', 'DESC'],
            ],
        });

        const comments = commentData.map((post) => post.get({ plain: true }));
        res.json(comments);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
        try {
            const commentData = await PostComment.findByPk(req.params.id);
            res.json(commentData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
});

router.post('/', async (req, res) => {
    try {
        const commentData = await PostComment.create({
            post_id: req.body.post_id,
            profile_id: req.session.user_id,
            comment_text: req.body.comment_text
        });
        res.status(200).json(commentData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const commentData = await PostComment.findByPk(req.params.id);
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
        const commentData = await PostComment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!commentData) {
            res.status(404).json({ message: 'No comment found!' });
            return;
        }
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
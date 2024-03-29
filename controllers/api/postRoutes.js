const router = require('express').Router();
const { UserPost, UserProfile, PostComment } = require('../../models');

router.get('/', async (req, res) => {
    if (!req.session.logged_in) {
      res.redirect("/can't access user posts");
    } else {
        try {
            const postData = await UserPost.findAll({
                where: {
                    profile_id: req.session.user_id,
                },
                include: {
                    model: PostComment
                },
                order: [
                    ['id', 'DESC']
                ]
            });
            res.json(postData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
});

router.get('/:id', async (req, res) => {
    if (!req.session.logged_in) {
      res.redirect("/can't access posts");
    } else {
        try {
            const postData = await UserPost.findAll({
                where: {
                    profile_id: req.params.id
                },
                include: [
                    {
                        model: PostComment
                    }
                ],
                order: [
                    ['id', 'DESC']
                ]
            });
            res.json(postData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
});

router.post('/', async (req, res) => {
    try {
        const postData = await UserPost.create({
            profile_id: req.session.user_id,
            written_text: req.body.written_text,
            media_location_url: req.body.media_location_url,
        });
        res.status(200).json(postData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const postData = await UserPost.findAll({
            where: {
                id: req.params.id,
                profile_id: req.session.user_id,
            }
        });
        postData.set({
            media_location_url: req.body.media_location_url,
            written_text: req.body.written_text
        });
        await postData.save();
        res.status(200).json(postData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const postData = await UserPost.destroy({
            where: {
                id: req.params.id,
                profile_id: req.session.user_id,
            },
        });
        if (!postData) {
            res.status(404).json({ message: 'No Group found!' });
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
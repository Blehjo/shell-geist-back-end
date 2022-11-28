const router = require('express').Router();
const { UserPost, UserProfile } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const postData = await UserPost.findAll({
            order: [
                ['created_date_time', 'DESC'],
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true }))
        res.json(
            posts
        )
        console.log(posts)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/:profile_id/:id', async (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/login');
    } else {
        try {
            const postData = await UserPost.findAll({
                where: {
                    profile_id: req.params.profile_id,
                    id: req.params.id
            }});
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
            group_name: req.body.group_name,
            group_description: req.body.group_description,
            country: req.body.country,
            platform: req.body.platform,

        });
        res.status(200).json(postData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.put('/:profile_id/:id', async (req, res) => {
    try {
        const postData = await UserPost.findAll({
            where: {
                profile_id: req.params.profile_id,
                id: req.params.id
        }});
        postData.set(req.body);
        await postData.save();
        res.status(200).json(postData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete('/:profile_id/:id', async (req, res) => {
    try {
        const postData = await UserPost.destroy({
            where: {
                id: req.params.id,
                profile_id: req.params.profile_id,
                user_id: req.session.user_id,
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
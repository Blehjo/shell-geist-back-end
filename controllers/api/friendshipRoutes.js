const router = require('express').Router();
const { UserPost, UserProfile, Friendship } = require('../../models');

router.get('/', async (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/login');
    } else {
        try {
            const postData = await Friendship.findAll({
                include: [
                    {
                        model: UserProfile,
                        where: {
                            id: req.session.user_id
                        }
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

router.post('/:id', async (req, res) => {
    try {
        const postData = await Friendship.create({
            profile_request: req.session.user_id,
            profile_accept: req.params.id
        });
        res.status(200).json(postData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const postData = await Friendship.destroy({
            where: {
                profile_request: req.session.user_id,
                profile_accept: req.params.id
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
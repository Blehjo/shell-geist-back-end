const router = require('express').Router();
const { UserProfile, Group } = require('../models');

router.get('/', async (req, res) => {
    try {
        const postData = await Group.findAll({
            include: [
                {
                    model: UserProfile,
                    attributes: ['username'],
                },
            ],
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

module.exports = router;
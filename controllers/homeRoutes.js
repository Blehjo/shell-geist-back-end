const router = require('express').Router();
const { UserProfile, UserPost, Friendship, PostLike, PostComment } = require('../models');
const isAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await UserPost.findAll({
            include: [
                {
                    model: UserProfile,
                    attributes: ['username'],
                }
            ],
            order: [
                ['created_date_time', 'DESC'],
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true }))
        // res.render('index', {
        //     posts
        // })
        console.log(posts)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/menu', (req, res) => {
    res.render('menu', {
        logged_in: req.session.user_id

    })
})

module.exports = router;
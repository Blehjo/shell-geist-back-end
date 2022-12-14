const router = require('express').Router();
const { UserProfile, UserPost, Game, Friendship } = require('../models');

router.get('/posts', async (req, res) => {
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

router.get('/users', async (req, res) => {
    try {
        const postData = await UserProfile.findAll({
            attributes: { exclude: ['date_of_birth', 'password', 'email', 'last_name']},
            include: [
              {
                model: UserPost
              },
              {
                model: Game
              },
              {
                model: Friendship
              }
            ],
            order: [
                ['id', 'DESC'],
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

// router.get('/', async (req, res) => {
//     try {
//         const postData = await Group.findAll({
//             include: [
//                 {
//                     model: UserProfile,
//                     attributes: ['username'],
//                 },
//             ],
//             order: [
//                 ['created_date_time', 'DESC'],
//             ],
//         });

//         const posts = postData.map((post) => post.get({ plain: true }))
//         res.json(
//             posts
//         )
//         console.log(posts)
//     } catch (err) {
//         res.status(500).json(err)
//     }
// });

module.exports = router;
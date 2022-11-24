const router = require('express').Router();
const { UserProfile, UserPost, Friendship, PostLike, PostComment } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const postData = await UserPost.findAll({
            include: [
                {
                    model: UserProfile,
                    attributes: ['username'],
                },
                {
                    model: PostComment,
                    attributes: ['comment_text', 'created_date_time']
                }, 
                { 
                    model: PostLike,
                }
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
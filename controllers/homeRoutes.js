const router = require('express').Router();
const { UserProfile, UserPost, Game, Friendship, Group, GroupMember, Event } = require('../models');

router.get('/events/:id', async (req, res) => {
    try {
        const eventData = await Event.findAll({
            include: [
              {
                model: Group
              },
              {
                model: GroupMember,
                where: {
                    profile_id: req.session.user_id
                }
              },
            ],
            order: [
                ['id', 'ASC'],
            ],
        });

        const events = eventData.map((post) => post.get({ plain: true }))
        res.json(
            events
        )
        console.log(events)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/groups/:id', async (req, res) => {
    try {
        const groupData = await Group.findAll({
            include: [
                {
                    model: GroupMember,
                    where: {
                        profile_id: req.params.id
                    }
                },
            ],
            order: [
                ['created_date_time', 'DESC'],
            ],
        });

        const groups = groupData.map((post) => post.get({ plain: true }));
        res.json(groups);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/games/:id', async (req, res) => {
    try {
        const gameData = await Game.findAll({
            where: {
                profile_id: req.params.id
            },
            // order: [
            //     ['created_date_time', 'DESC'],
            // ],
        });

        const groups = gameData.map((post) => post.get({ plain: true }));
        res.json(groups);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/events', async (req, res) => {
    try {
        const eventData = await Event.findAll({
            include: [
              {
                model: Group
              },
              {
                model: GroupMember
              },
            ],
            order: [
                ['id', 'ASC'],
            ],
        });

        const events = eventData.map((post) => post.get({ plain: true }))
        res.json(
            events
        )
        console.log(events)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/posts', async (req, res) => {
    try {
        const postData = await UserPost.findAll({
            include: [
                {
                    model: UserProfile
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

router.get('/interactions', async (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/login');
    } else {
        try {
            const postData = await UserPost.findAll({
                include: [
                    {
                        model: PostLike,
                        where: {
                            profile_id: req.session.user_id
                        }
                    },
                    {
                        model: PostComment,
                        where: {
                            profile_id: req.session.user_id
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

router.get('/posts/:id', async (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/login');
    } else {
        try {
            const postData = await UserPost.findAll({
                where: {
                    profile_id: req.params.id,
            }});
            res.json(postData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
});

router.get('/users', async (req, res) => {
    try {
        const postData = await UserProfile.findAll({
            attributes: ['id', 'username', 'date_of_birth', 'first_name', 'about'],
            include: [
              {
                model: UserPost
              },
              {
                model: Game
              },
              {
                model: Friendship
              },
              {
                model: Group
              },
              {
                model: GroupMember
              }
            ],
            order: [
                ['username', 'DESC'],
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

router.get('/groups', async (req, res) => {
    try {
        const postData = await Group.findAll({
            include: [
                {
                    model: UserProfile,
                },
                {
                    model: GroupMember,
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
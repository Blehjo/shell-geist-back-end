const router = require('express').Router();
const { UserProfile, UserPost, Game, Friendship, Group, GroupMember, Event, EventMember, PostComment } = require('../models');

router.get('/events/:id', async (req, res) => {
    try {
        const eventData = await Event.findAll({
            include: [
              {
                model: Group
              },
              {
                model: EventMember,
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
            }
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
                model: EventMember
              },
            ],
            order: [
                ['id', 'DESC'],
            ],
        });

        const events = eventData.map((post) => post.get({ plain: true }))
        res.json(
            events
        );
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
                },
                {
                    model: PostComment
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
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/posts/:id', async (req, res) => {
    try {
        const postData = await UserPost.findAll({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: UserProfile
                },
                {
                    model: PostComment
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
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/interactions', async (req, res) => {
    if (!req.session.logged_in) {
      res.redirect("/can't access interactions");
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
    if (!req.session.logged_in) {
      res.redirect("/can't access posts");
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
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/groups/:group_name', async (req, res) => {
    try {
        const postData = await Group.findAll({
            where: {
                group_name: req.params.group_name
            },
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
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;
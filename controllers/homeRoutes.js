const router = require('express').Router();
const { UserProfile, UserPost, Game, Friendship, Group, GroupMember, Event } = require('../models');

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
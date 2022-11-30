const router = require('express').Router();
const { Message } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const messageData = await Message.findAll({
            order: [
                ['sent_datetime', 'DESC'],
            ],
        });

        const messages = messageData.map((message) => message.get({ plain: true }))
        res.json(
            messages
        )
        console.log(messages)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/:profile_id/:id', async (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/login');
    } else {
        try {
            const messageData = await Message.findAll({
                where: {
                    from_profile: req.params.profile_id,
                    id: req.params.id
            }});
            res.json(messageData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
});

router.post('/', async (req, res) => {
    try {
        const messageData = await Message.create({
            group_name: req.body.group_name,
            group_description: req.body.group_description,
            country: req.body.country,
            platform: req.body.platform,

        });
        res.status(200).json(messageData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.put('/:profile_id/:id', async (req, res) => {
    try {
        const messageData = await Message.findAll({
            where: {
                from_profile: req.params.profile_id,
                id: req.params.id
        }});
        messageData.set(req.body);
        await messageData.save();
        res.status(200).json(messageData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete('/:profile_id/:id', async (req, res) => {
    try {
        const messageData = await Message.destroy({
            where: {
                id: req.params.id,
                profile_id: req.params.profile_id,
                user_id: req.session.user_id,
            },
        });
        if (!messageData) {
            res.status(404).json({ message: 'No Group found!' });
            return;
        }
        res.status(200).json(messageData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
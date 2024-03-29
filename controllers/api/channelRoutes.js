const router = require('express').Router();
const { GroupChannel, ChannelComment } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const channelData = await GroupChannel.findAll({
            order: [
                ['created_date_time', 'DESC'],
            ],
            include: [
                {
                    model: ChannelComment
                }
            ]
        });

        const posts = channelData.map((post) => post.get({ plain: true }))
        res.json(
            posts
        );
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/:id', async (req, res) => {
    if (!req.session.logged_in) {
      res.redirect("/can't access channel");
    } else {
        try {
            const channelData = await GroupChannel.findAll({
                include: [
                    {
                        model: ChannelComment,
                        where: {
                            channel_id: req.params.id
                        },
                        order: [
                            ['id', 'DESC'],
                        ],
                    }
                ],
            });
            res.json(channelData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
});

router.post('/', async (req, res) => {
    try {
        const channelData = await GroupChannel.create({
            group_name: req.body.group_name,
            group_description: req.body.group_description,
            country: req.body.country,
            platform: req.body.platform,

        });
        res.status(200).json(channelData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const channelData = await GroupChannel.findByPk(req.params.id);
        channelData.set(req.body);
        await channelData.save();
        res.status(200).json(channelData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const channelData = await GroupChannel.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!channelData) {
            res.status(404).json({ message: 'Try again in a bit, please.' });
            return;
        }
        res.status(200).json(channelData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
const router = require('express').Router();
const { Group } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const groupData = await Group.findAll({
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

router.get('/:id', async (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/login');
    } else {
        try {
            const groupData = await Group.findByPk(req.params.id);
            res.json(groupData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
});

router.post('/', async (req, res) => {
    try {
        const groupData = await Group.create({
            group_name: req.body.group_name,
            group_description: req.body.group_description,
            country: req.body.country,
            platform: req.body.platform,

        });
        res.status(200).json(groupData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const groupData = await Group.findByPk(req.params.id);
        groupData.set(req.body);
        await groupData.save();
        res.status(200).json(groupData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const groupData = await Group.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!groupData) {
            res.status(404).json({ message: 'No Group found!' });
            return;
        }
        res.status(200).json(groupData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
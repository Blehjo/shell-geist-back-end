const router = require('express').Router();
const { Game } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const gameData = await Game.findAll({
            order: [
                ['created_date_time', 'DESC'],
            ],
        });

        const groups = gameData.map((post) => post.get({ plain: true }));
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
            const gameData = await Game.findByPk(req.params.id);
            res.json(gameData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
});

router.post('/', async (req, res) => {
    try {
        const gameData = await Game.create(req.body);
        res.status(200).json(gameData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const gameData = await Game.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!gameData) {
            res.status(404).json({ message: 'No Group found!' });
            return;
        }
        res.status(200).json(gameData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
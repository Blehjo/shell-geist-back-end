const router = require('express').Router();
const { Event, Group, EventMember } = require('../../models');

router.get('/', async (req, res) => {
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
        );
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const eventData = await Event.findAll({
        where: {
            group_id: req.params.id
        }
        });
        res.json(eventData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
  try {
    const eventData = await Event.create(req.body);
    await eventData.save();
    res.status(200).json(eventData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
      const eventData = await Event.findByPk(req.params.id);
      eventData.set(req.body);
      await eventData.save();
      res.status(200).json(eventData);
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
      const eventData = await Event.destroy({
          where: {
              id: req.params.id,
              user_id: req.session.user_id,
          },
      });
      if (!eventData) {
          res.status(404).json({ message: 'Unable to delete!' });
          return;
      }
      res.status(200).json(eventData);
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;
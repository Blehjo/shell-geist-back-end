const router = require('express').Router();
const { Event, Group, GroupMember } = require('../../models');

router.get('/', async (req, res) => {
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
                ['id', 'DESC'],
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

router.get('/:id', async (req, res) => {
    try {
        const eventData = await Event.findAll({
        where: {
            username: req.body.username
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
const router = require('express').Router();
const { EventMember, UserProfile } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const postData = await EventMember.findAll({
            attributes: { exclude: ['joined_datetime', 'left_datetime']},
            include: {
                model: UserProfile,
                attributes: ['username']
            },
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

router.get('/:profile_id', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/login');
  } else {
      try {
          const userData = await EventMember.findByPk(req.params.profile_id, {
            include: {
                model: UserProfile,
                attributes: ['username']
            }
          });
          res.json(userData);
      } catch (err) {
          console.log(err);
          res.status(500).json(err);
      }
  }
});

router.post('/', async (req, res) => {
  try {
    const userData = await EventMember.create({
      profile_id: req.session.user_id,
      event_id: req.body.event_id,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
      const userData = await EventMember.destroy({
          where: {
            event_id: req.params.id,
            profile_id: req.session.user_id,
          },
      });
      if (!userData) {
          res.status(404).json({ message: 'Unable to delete!' });
          return;
      }
      res.status(200).json(userData);
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;
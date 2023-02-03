const router = require('express').Router();
const { ChatMember, UserProfile, Conversation } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const postData = await ChatMember.findAll({
            attributes: { exclude: ['joined_datetime', 'left_datetime']},
            include: [
                {
                    model: UserProfile,
                    attributes: ['username']
                },
                {
                    model: Conversation,
                    attributes: ['conversation_name']
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

router.get('/:group_id', async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
    } else {
        try {
            const userData = await ChatMember.findByPk(req.params.group_id, {
                include: [
                    {
                        model: UserProfile,
                        attributes: ['username']
                    },
                    {
                        model: Conversation,
                        attributes: ['conversation_name']
                    }
                ],
            });
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
});

router.post('/:conversation_id', async (req, res) => {
  try {
    const userData = await ChatMember.create({
        profile_id: req.session.user_id,
        conversation_id: req.params.conversation_id,
    });
    res.json(
        userData
    )
    console.log(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:group_id', async (req, res) => {
  try {
      const userData = await ChatMember.destroy({
          where: {
              id: req.params.group_id,
              user_id: req.session.user_id,
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
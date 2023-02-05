const router = require('express').Router();
const { UserProfile, UserPost, Game, Friendship, Group, GroupMember } = require('../../models');

router.get('/', async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
      try {
          const userData = await UserProfile.findAll({
            where: {
              id: req.session.user_id
            },
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

router.get('/:id', async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
      try {
          const userData = await UserProfile.findAll({
            include: [
              {
                model: UserPost
              },
              {
                model: Group
              },
              {
                model: Game
              },
              {
                model: Friendship
              },
              {
                model: GroupMember,
                where: {
                  profile_id: req.params.id
                }
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

router.post('/', async (req, res) => {
  try {
    const userData = await UserProfile.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json({ user: userData, message: 'You are now signed up!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await UserProfile.findOne({ 
      where: { 
        email: req.body.email 
      } 
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again', password: req.body.password });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.status(200).json({ user: userData, message: 'You are now logged in!', req: req.session });
    });
    res.header("Content-Type", "application/json");

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  try {
    if (!req.session.user_id) {
      req.session.destroy(() => {
        res.status(204).end();
      });
  } else {
    res.status(404).end();
  }
  } catch(err) {
      res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  try {
      const userData = await UserProfile.findByPk(req.params.id);
      userData.set(req.body);
      await userData.save();
      res.status(200).json(userData);
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
      const userData = await UserProfile.destroy({
          where: {
              id: req.params.id,
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
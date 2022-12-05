const router = require('express').Router();
const { UserProfile } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const postData = await UserProfile.findAll({
            attributes: { exclude: ['id', 'date_of_birth', 'password', 'email', 'last_name']},
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

router.get('/:id', async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/login');
  } else {
      try {
          const userData = await UserProfile.findAll({
            where: {
              username: req.body.username
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
    const userData = await UserProfile.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
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
      
      res.status(200).json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  try {
    if (req.session.logged_in) {
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
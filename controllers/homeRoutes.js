const router = require('express').Router();
const { homeRoutes, user } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {

    const homeRoutesData = await homeRoutes.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const homeRoutess = homeRoutesData.map((project) => homeRoutes.get({ plain: true }));

    
    res.render('homepage', { 
      homeRoutess, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/project/:id', async (req, res) => {
  try {
    const homeRoutesData = await homeRoutes.findByPk(req.params.id, {
      include: [
        {
          model: user,
          attributes: ['name'],
        },
      ],
    });

    const homeRoutes = homeRoutesData.get({ plain: true });

    res.render('project', {
      ...project,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await user.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: homeRoutes }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;

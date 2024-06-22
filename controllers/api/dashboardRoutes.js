const router = require('express').Router();

const { Dashboard } = require('../../models');

// Route handler for the dashboard page
router.get('/dashboard', async (req, res) => {
  try {
   
    res.render('dashboard'); 
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Read all Dashboard posts
router.get('/', async (req, res) => {
  try {
    const dashboards = await Dashboard.findAll();
    res.status(200).json(dashboards);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Read a specific Dashboard post by ID
router.get('/:id', async (req, res) => {
  try {
    const dashboard = await Dashboard.findByPk(req.params.id);
    if (dashboard) {
      res.status(200).json(dashboard);
    } else {
      res.status(404).json({ error: 'Dashboard not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a new Dashboard post
router.post('/', async (req, res) => {
  try {
    const newDashboard = await Dashboard.create(req.body);
    res.status(201).json(newDashboard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a Dashboard post by ID
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Dashboard.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      res.status(200).json({ message: 'Dashboard updated successfully' });
    } else {
      res.status(404).json({ error: 'Dashboard not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

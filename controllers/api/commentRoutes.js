const router = require('express').Router();
const { Comment } = require('../../models');

// Create a new comment post
router.post('/', async (req, res) => {
  try {
    const newcomment = await comment.create(req.body);
    res.status(201).json(newcomment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all comment posts
router.get('/', async (req, res) => {
  try {
    const comments = await comment.findAll();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Read a specific comment post by ID
router.get('/:id', async (req, res) => {
  try {
    const comment = await comment.findByPk(req.params.id);
    if (comment) {
      res.status(200).json(comment);
    } else {
      res.status(404).json({ error: 'comment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a comment post by ID
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await comment.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      res.status(200).json({ message: 'comment updated successfully' });
    } else {
      res.status(404).json({ error: 'comment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a comment post by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await comment.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'comment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

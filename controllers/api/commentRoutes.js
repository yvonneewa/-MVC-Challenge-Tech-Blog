const express = require('express');
const router = express.Router();
const { Comment } = require('../../models');

// Create a new comment post
router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create(req.body);
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all comment posts
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Read a specific comment post by ID
router.get('/:id', async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id);
    if (comment) {
      res.status(200).json(comment);
    } else {
      res.status(404).json({ error: 'Comment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a comment post by ID
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Comment.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      res.status(200).json({ message: 'Comment updated successfully' });
    } else {
      res.status(404).json({ error: 'Comment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a comment post by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Comment.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Comment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

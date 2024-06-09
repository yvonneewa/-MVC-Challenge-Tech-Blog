const express = require('express');
const router = express.Router();
const { Blog } = require('../../models');

// Create a new blog post
router.post('/', async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all blog posts
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.findAll();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Read a specific blog post by ID
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    if (blog) {
      res.status(200).json(blog);
    } else {
      res.status(404).json({ error: 'Blog not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a blog post by ID
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Blog.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      res.status(200).json({ message: 'Blog updated successfully' });
    } else {
      res.status(404).json({ error: 'Blog not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a blog post by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Blog.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Blog not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

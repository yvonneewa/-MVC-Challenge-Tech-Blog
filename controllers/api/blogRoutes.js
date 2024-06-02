const express = require('express');
const router = express.Router();
const blogController = require('../../controllers/blogController');

router.get('/', blogController.getAllPosts);
router.post('/create', blogController.createPost);
router.get('/:id', blogController.getPostById);
router.post('/:id/comment', blogController.addComment);

module.exports = router;

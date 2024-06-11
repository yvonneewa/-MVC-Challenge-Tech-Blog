const express = require('express');
const router = express.Router();

const dashboardRoutes = require('./dashboardRoutes');
const blogRoutes = require('./blogRoutes');
const commentRoutes = require('./commentRoutes');
const userRoutes = require('./userRoutes');


router.use('/dashboard', dashboardRoutes);
router.use('/blog', blogRoutes);
router.use('/comment', commentRoutes);
router.use('/user', userRoutes);

module.exports = router;

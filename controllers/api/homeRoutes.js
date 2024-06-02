const express = require('express');
const router = express.Router();
const homeRouteController = require('../controllers/homeRouteController');

// Define routes for handling homeRoute-related operations
router.get('/homeRoutes', homeRouteController.getAllhomeRoutes);
router.post('/homeRoutes', homeRouteController.createhomeRoute);
router.get('/homeRoutes/:id', homeRouteController.gethomeRouteById);
router.put('/homeRoutes/:id', homeRouteController.updatehomeRoute);
router.delete('/homeRoutes/:id', homeRouteController.deletehomeRoute);

module.exports = router;

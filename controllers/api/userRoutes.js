const express = require('express');
const router = express.Router();
const userRouteController = require('../controllers/userRouteController');

// Define routes for handling userRoute-related operations
router.get('/userRoutes', userRouteController.getAlluserRoutes);
router.post('/userRoutes', userRouteController.createuserRoute);
router.get('/userRoutes/:id', userRouteController.getuserRouteById);
router.put('/userRoutes/:id', userRouteController.updateuserRoute);
router.delete('/userRoutes/:id', userRouteController.deleteuserRoute);

module.exports = router;

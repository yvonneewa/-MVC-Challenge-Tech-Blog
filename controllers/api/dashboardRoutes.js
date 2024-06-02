const express = require('express');
const router = express.Router();
const dashboardRoutesController = require('../controllers/dashboardRoutes');


router.get('/dashboardRoutess', dashboardRoutesController.getAlldashboardRoutes);
router.post('/dashboardRoutess', dashboardRoutesController.createdashboardRoutes);
router.get('/dashboardRoutess/:id', dashboardRoutesController.getdashboardRoutesById);
router.put('/dashboardRoutess/:id', dashboardRoutesController.updatedashboardRoutes);
router.delete('/dashboardRoutess/:id', dashboardRoutesController.deletedashboardRoutes);

module.exports = router;

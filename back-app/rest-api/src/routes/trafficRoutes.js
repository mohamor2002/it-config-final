const express = require('express');
const router = express.Router();
const controller = require('../controllers/trafficController');

router.get('/clients', controller.getClients);
router.get('/traffic', controller.getTraffic);
router.get('/clients/logs', controller.getClientsWithLogs);

module.exports = router;

const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller')

router.post('/api/queue_name', controller.saveQueueName)
router.get('/api/queue_name', controller.getNextMessage)
router.get('/api/messages', controller.getAllMessages)


module.exports = router;
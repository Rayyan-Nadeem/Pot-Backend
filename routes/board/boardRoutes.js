const express = require('express');
const router = express.Router();
const boardController = require('../../controllers/board/boardController');

// Define your routes
router.post('/hello', boardController.hello);
router.post('/command', boardController.sendCommand);
router.get('/last-five-messages', boardController.getLastMessages);

module.exports = router;

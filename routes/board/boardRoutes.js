const express = require('express');
const router = express.Router();
const boardController = require('../../controllers/board/boardController');

// Define a GET endpoint to get board data
router.get('/', boardController.getBoardData);

// Define a POST endpoint to blink the LED (this will send an MQTT message to the NodeMCU)
router.post('/blink', boardController.blinkLED);

module.exports = router;

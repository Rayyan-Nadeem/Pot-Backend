const mqttClient = require('../../config/mqttClient');

// Controller to fetch a custom message ("hello") in the body
exports.getBoardData = (req, res) => {
    res.status(200).json({ message: 'hello' });
};

// Controller to trigger LED blink via MQTT
exports.blinkLED = (req, res) => {
    const blinkMessage = 'blink';

    // Publish the 'blink' message to the NodeMCU's MQTT topic
    mqttClient.publish('nodeMCU/blink', blinkMessage, (err) => {
        if (err) {
            console.error('Failed to publish blink message:', err);
            return res.status(500).json({ error: 'Failed to trigger LED blink' });
        }
        console.log('Blink message sent to NodeMCU');
        res.status(200).json({ message: 'LED will blink 3 times' });
    });
};

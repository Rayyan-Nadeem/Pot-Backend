// Controller to fetch a custom message ("hello") in the body
exports.getBoardData = (req, res) => {
    res.status(200).json({ message: 'hello' });
};

// Controller to trigger LED blink by handling HTTP POST requests
exports.blinkLED = (req, res) => {
    // Simulate an LED blink action
    console.log('Blink command received from client');
    
    // Simulate the action: Print to console
    console.log('Blinking LED 3 times');

    // Respond to the client
    res.status(200).json({ message: 'LED will blink 3 times' });
};

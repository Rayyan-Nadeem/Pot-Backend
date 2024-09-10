const express = require('express');
const bodyParser = require('body-parser');
const mqtt = require('mqtt');

// Set up Express app
const app = express();
const port = 3000;

// Set up MQTT client to connect to the broker
const mqttClient = mqtt.connect('mqtt://broker.hivemq.com');  // You can change this to your MQTT broker

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// When the MQTT client connects
mqttClient.on('connect', () => {
  console.log('Connected to MQTT broker');
  
  // Subscribe to a topic to receive messages from the Arduino
  mqttClient.subscribe('arduino/data', (err) => {
    if (err) {
      console.error('Failed to subscribe to topic');
    }
  });
});

// Handle incoming messages from the Arduino (via MQTT)
mqttClient.on('message', (topic, message) => {
  console.log(`Received data from topic ${topic}: ${message.toString()}`);
  // Handle the data from the Arduino here
});

// HTTP route to send commands to Arduino via MQTT
app.post('/send-command', (req, res) => {
  const { command } = req.body;

  if (!command) {
    return res.status(400).send('Command is required');
  }

  // Publish command to the MQTT topic that the Arduino listens to
  mqttClient.publish('arduino/commands', command, (err) => {
    if (err) {
      return res.status(500).send('Failed to send command');
    }
    res.status(200).send('Command sent successfully');
  });
});

// Start the HTTP server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

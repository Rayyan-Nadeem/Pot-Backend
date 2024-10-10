require('dotenv').config(); // Load environment variables from .env
const mqtt = require('mqtt');

// Configure the MQTT client
const client = mqtt.connect({
    host: process.env.MQTT_HOST,
    port: process.env.MQTT_PORT,
});

client.on('connect', () => {
    console.log('Connected to MQTT broker');
});

client.on('error', (err) => {
    console.error('MQTT connection error:', err);
});

module.exports = client;

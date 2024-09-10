# Pot-Backend


### How This Works
- **Frontend**: Sends HTTP POST requests to the backend at `/send-command` to send instructions to the Arduino.
- **Backend**: Receives HTTP requests from the frontend, and then uses MQTT to send commands to the Arduino.
- **Arduino**: Subscribes to an MQTT topic (e.g., `arduino/commands`) to receive instructions and publishes data to another topic (e.g., `arduino/data`), which the backend listens to.

You can now push these files to your GitHub repository, and you're all set to start working on your IoT project! Let me know if you need help setting up the MQTT broker or configuring your Arduino.

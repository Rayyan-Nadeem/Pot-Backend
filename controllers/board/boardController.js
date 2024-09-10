// Example in-memory storage for demonstration purposes
let messages = [
  { id: 1, text: 'Message 1' },
  { id: 2, text: 'Message 2' },
  { id: 3, text: 'Message 3' },
  { id: 4, text: 'Message 4' },
  { id: 5, text: 'Message 5' },
  { id: 6, text: 'Message 6' }
];

exports.hello = (req, res) => {
    res.send('Hello from the board controller');
};

exports.sendCommand = (req, res) => {
    res.send('Command sent');
};

exports.getLastMessages = (req, res) => {
    const lastFiveMessages = messages.slice(-5); // Get the last 5 messages
    res.json(lastFiveMessages);
};

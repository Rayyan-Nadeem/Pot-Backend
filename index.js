const express = require('express');
require('dotenv').config();  // Load .env file
const bodyParser = require('body-parser');
const boardRoutes = require('./routes/board/boardRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Use boardRoutes
app.use('/api/board', boardRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

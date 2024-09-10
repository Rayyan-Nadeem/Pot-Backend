const express = require('express');
const bodyParser = require('body-parser');
const boardRoutes = require('./routes/board/boardRoutes'); // Adjust the path if needed

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/board', boardRoutes); // Ensure this is correctly importing the routes

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

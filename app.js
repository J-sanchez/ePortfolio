const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();  // Load environment variables

const app = express();
const PORT = process.env.PORT || 53087;

// Middlewares
app.use(cors()); // Allow CORS
app.use(express.json()); // Parse incoming JSON requests

// Serve static React files
if (process.env.NODE_ENV === 'production') {


// Define Routes
    
app.use(express.static(path.join(__dirname, '/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist', 'index.html'));
  });
}
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  
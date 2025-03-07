import path from 'path';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config(); // Load environment variables

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 53087;

// Middlewares
app.use(cors()); // Allow CORS
app.use(express.json()); // Parse incoming JSON requests

// Serve static React files
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '/dist', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

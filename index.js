import express from 'express';
import { readFile } from 'fs/promises';
import { join } from 'path';
import configMiddleware from './config/middleware.js';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import db from './config/dbConnection.js';

// Load environment variables from .env file
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

const app = express();

// Connect to database
db.once('open', () => {
    console.log('Connected to database');
});

// Configure middleware
configMiddleware(app);

// Define routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Read HTML file and send as response for base route
app.get('/', async (req, res) => {
    try {
        const data = await readFile(join(__dirname, 'index.html'), 'utf8');
        res.send(data);
    } catch (err) {
        console.error('Error reading HTML file:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const configMiddleware = require('./config/middleware');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const db = require('./config/dbConnection');

// Load environment variables from .env file
require('dotenv').config();

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
app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading HTML file:', err);
            return res.status(500).send('Internal Server Error');
        }
        res.send(data);
    });
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

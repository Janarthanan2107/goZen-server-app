const express = require('express');
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

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

import mongoose from 'mongoose';

// Load environment variables from .env file
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

// MongoDB connection URI
const uri = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('MongoDB connection error:', error));

// Export the connection object
export default mongoose.connection;

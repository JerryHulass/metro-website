const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB

const connectDB = (url) => {
    return mongoose.connect(url)
        .then(() => console.log('MongoDB connected successfully'))
        .catch((error) => {
            console.error('MongoDB connection failed:', error.message);
        });
};

module.exports = connectDB;
// Export the connectDB function to be used in other files


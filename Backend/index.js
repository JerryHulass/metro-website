//import necessary modules
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./connect.');
const router = require('./routes/tasks');

const PORT = process.env.PORT || 5000;

const app = express();

// Middleware
// GET, POST, PUT, DELETE

app.use(express.json());
app.use(cors());
app.use('/api/v1/tasks', router);



const start = async () => {
   try {
       await connectDB(process.env.MONGO_URI);
       app.listen(PORT, () => {
           console.log(`Server is running on port ${PORT}`);
       });
   } catch (error) {
       console.error('Error connecting to MongoDB:', error.message);
   }
};

start();




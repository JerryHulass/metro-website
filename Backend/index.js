//import necessary modules
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./connect.');
const Task = require('./modules/Tasks');

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
// GET, POST, PUT, DELETE

app.use(express.json());

// get all tasks
app.get('/api/v1/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// create a new task
app.post('/api/v1/tasks', async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get single task
app.get('/api/v1/tasks/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findOne({_id: id})
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ task });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// Update a task
app.patch('/api/v1/tasks/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findOneAndUpdate({_id: id}, req.body, {new: true, runValidators: true});
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ task });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a task
app.delete('/api/v1/tasks/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findOneAndDelete({_id: id})
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).send("Task was deleted");
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


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




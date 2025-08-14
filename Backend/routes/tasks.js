const express = require('express');
const Task = require('../modules/Tasks');
const router = express.Router();


// get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// create a new task
router.post('/', async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get single task
router.get('/:id', async (req, res) => {
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
router.patch('/:id', async (req, res) => {
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
router.delete('/api/v1/tasks/:id', async (req, res) => {
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

module.exports = router; // Export the router to be used in other files


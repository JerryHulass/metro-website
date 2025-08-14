const express = require('express');
const Task = require('../modules/Tasks');
const router = express.Router();
const { getTasks,createTasks, getSingleTask, updateTasks, deleteTasks} = require ('../controllers/tasks');


// get all tasks
router.get('/', getTasks);

// create a new task
router.post('/', createTasks);

// Get single task
router.get('/:id', getSingleTask);


// Update a task
router.patch('/:id', updateTasks);

// Delete a task
router.delete('/api/v1/tasks/:id', deleteTasks);

module.exports = router; // Export the router to be used in other files


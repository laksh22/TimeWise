const express = require('express');

const { createTask, getAllTasks, updateTask, deleteTask, getByQuery } = require('../controllers/task');
const { getAllClasses, seedClass } = require('../controllers/class');

const router = express.Router();

router.get('/task', getAllTasks);
router.post('/task', createTask);
router.get('/seed', seedClass);
router.get('/class', getAllClasses);
router.patch('/task/:taskId', updateTask);
router.delete('/task/:taskId', deleteTask);
router.get('/taskquery', getByQuery);

module.exports = router;
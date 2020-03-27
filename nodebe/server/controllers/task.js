// create task,
// get tasks created, update tasks

const mongoose =require('mongoose');

const Task = require('../models/task');

function createTask(req, res) {
  const task = new Task({
    _id: mongoose.Types.ObjectId(),
    course: req.body.course,
    taskName: req.body.taskName,
    date: req.body.date,
    description: req.body.description,
  });
  task.save() // TODO: catch errors
  return res.status(201).json({
    task: task
  });
}  

// Get all Tasks
function getAllTasks(req, res){
  Task.find({})
    // .select('_id title description pubDate link media src author tags')
    .then((allTasks) => {
      res.header("Access-Control-Allow-Origin", "*");
      return res.status(200).json({
            "allTasks": allTasks
      })
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: err.message,
      });
    });
}


function updateTask(req, res) {
  const id = req.params.taskId;
  const updateObject = req.body;
  Task.update({ _id:id }, { $set:updateObject })
    .exec()
    .then(() => {
      res.status(200).json({
        success: true,
        message: 'Task is updated',
        updatePost: updateObject,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.'
      });
    });
}



module.exports={
  createTask,
  getAllTasks,
  updateTask

}
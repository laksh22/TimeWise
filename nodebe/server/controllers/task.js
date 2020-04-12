// create task,
// get tasks created, update tasks

const mongoose =require('mongoose');

const Task = require('../models/task');

function createTask(req, res) {
  // add a new task
  const task = new Task({
    _id: mongoose.Types.ObjectId(),
    type: "task",
    name: req.body.name,
    day: req.body.day,
    location: req.body.location,
    time: req.body.time,
    email: req.body.email
  });
  task.save() 
  return res.status(201).json({
    task: task
  });
}  




// Get all Tasks in the database of all types
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




// Get all Tasks of the given user in the next 7 days
function getByQuery(req, res){
  if ((req.query.email != 'james101@e.ntu.edu.sg') && (req.query.email != 'lekkj0004@e.ntu.edu.sg')) {
    req.query.email = "lekj0004@e.ntu.edu.sg";
  }
  Task.find({email:req.query.email})
    .then((allTasks) => {
      today = new Date();
      res.header("Access-Control-Allow-Origin", "*");
      var only7Days = allTasks.filter(function(event){
        // also filter tasks happening in the next 7 days
        var num = (Math.ceil((Date.parse(event.day.slice(4,))-today)/ (1000 * 60 * 60 * 24)))
        return (num < 8)&& (num>0);
    });
      return res.status(200).json({
            "allTasks": only7Days
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
  // Update task details
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

function deleteTask(req, res) {
  const id = req.params.taskId;
  const updateObject = req.body;
  Task.remove({ _id:id }) // pass entire object
    .exec()
    .then(() => {
      res.status(200).json({
        success: true,
        message: 'Task is removed',
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
  updateTask,
  deleteTask,
  getByQuery

}
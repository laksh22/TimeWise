// create task,
// get tasks created, update tasks

const mongoose =require('mongoose');

const Task = require('../models/task');

function createTask(req, res) {
  const task = new Task({
    _id: mongoose.Types.ObjectId(),
    type: "task",
    name: req.body.name,
    day: req.body.day,
    location: req.body.location,
    time: req.body.time,
    email: req.body.email
  });
  task.save() // TODO: catch errors
  return res.status(201).json({
    task: task
  });
}  




// Get all Tasks
function getAllTasks(req, res){
  // should return all of type task
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




// Get all Tasks
function getByQuery(req, res){
  // should return all of type task

  Task.find({email:req.query.email})
    // .select('_id title description pubDate link media src author tags')
    // also filter to next 7 days
    .then((allTasks) => {
      today = new Date();

      res.header("Access-Control-Allow-Origin", "*");
      var only7Days = allTasks.filter(function(event){
        // console.log((event.day.slice(4,)-today))
        // console.log(Math.ceil((Date.parse("Fri Apr 18 2020".slice(4,))-today)/ (1000 * 60 * 60 * 24)), "ssss","Fri Jan 24 2020".slice(4,))

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
  const id = req.params.taskId;
  const updateObject = req.body;
  Task.update({ _id:id }, { $set:updateObject }) // pass entire object
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
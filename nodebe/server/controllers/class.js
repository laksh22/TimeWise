// retrieve all possible classes from a json/mongo
/// seef

// create task,
// get tasks created


// const Class = require('../models/class');
const Task = require('../models/task');
const mongoose =require('mongoose');
var fs = require('fs');



// create new post
function seedClass(req, res) {

    var classes = JSON.parse(fs.readFileSync('classes_cleaned.json', 'utf8'));

    var i;
    for (i = 0; i < classes.length; i++) {
        const t = new Task({
        _id: mongoose.Types.ObjectId(),
        type: "class",
        name: classes[i].course,
        day: classes[i].date,
        location: classes[i].location,
        time: classes[i].startTime,
    });


    // cla.markModified('object')
    t.save(function (err) {
        console.log(err, "error seeding", t);
    })


    } 
        
      return res.status(201).json({
        message: 'classes seeded'
      });

}  

// Get all Tasks
function getAllClasses(req, res){
  // return all tasks of type class
  Task.find({})
    // .select('_id course courseName date endTime location startTime type') this doesnt work why
    .then((allClass) => {
        console.log(allClass)
      res.header("Access-Control-Allow-Origin", "*");
      return res.status(200).json({
            "allClass": allClass,
      });
    })
    .catch((err) => {
        res.status(500).json({
          success: false,
          message: err
        });
      });
}




module.exports={
  seedClass,
getAllClasses
}
// retrieve all possible classes from a json/mongo
/// seef

// create task,
// get tasks created


const Class = require('../models/class');
const mongoose =require('mongoose');
var fs = require('fs');



// create new post
function seedClass(req, res) {

    var classes = JSON.parse(fs.readFileSync('classes_cleaned.json', 'utf8'));

    var i;
    for (i = 0; i < classes.length; i++) {
        const cla = new Class({
        _id: mongoose.Types.ObjectId(),
        course: classes[i].course,
        courseName: classes[i].courseName,
        date: classes[i].date,
        endTime: classes[i].endTime,
        location: classes[i].location,
        startTime: classes[i].startTime,
        type: classes[i].type

    });
    // cla.markModified('object')
    cla.save(function (err) {
        console.log(err, "errrrr");
    })


    } 
        
      return res.status(201).json({
        message: 'classes seeded'
      });

}  

// Get all Tasks
function getAllClasses(req, res){

  Class.find({})
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
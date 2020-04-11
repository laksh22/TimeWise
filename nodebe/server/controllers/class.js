const Task = require('../models/task');
const mongoose =require('mongoose');
var fs = require('fs');


// seed Mock Task Data into the database from cleaned_classes.json, lekj0004.json
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
          email: "james101@e.ntu.edu.sg"
      });

      t.save(function (err, data) {
        if (err) {
          console.log(err, "error seeding", t);
        }
          
      })
    } 

    var lek = JSON.parse(fs.readFileSync('lekj0004.json', 'utf8'));
    var i;
    for (i = 0; i < lek.length; i++) {
          const t = new Task({
          _id: mongoose.Types.ObjectId(),
          type: "class",
          name: lek[i].course,
          day: lek[i].date,
          location: lek[i].location,
          time: lek[i].startTime,
          email: "lekj0004@e.ntu.edu.sg"
      });


      // cla.markModified('object')
      t.save(function (err, data) {
        if (err) {
          console.log(err, "error seeding", t);
        }
          
      })
    }
      return res.status(201).json({
        message: 'classes seeded'
      });

}  
function filter_type(task) {
  console.log(task)
  return task.type == "class";
}


// Get all Tasks of type "class"
function getAllClasses(req, res){
  // return all tasks of type class
  Task.find({})
    // .select('_id course courseName date endTime location startTime type') this doesnt work why
    .then((allClass) => {
      console.log(allClass);
      
      var onlyClass = allClass.filter(function(event){
        return event.type == 'class';
    });
      res.header("Access-Control-Allow-Origin", "*");
      return res.status(200).json({
            "allClass": onlyClass,
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
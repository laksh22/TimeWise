
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const classSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  course: {
    type: String,
    required: true,
  },
  TaskName: {
    type: String,
    required: false,
  },
  date: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

});

module.exports = mongoose.model('Task', classSchema);

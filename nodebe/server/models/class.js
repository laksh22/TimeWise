const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


// Depreciated,unused un latest version
const classSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  course: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: false,
  },
  date: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Class', classSchema);

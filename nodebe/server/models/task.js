
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const classSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },

});

// "type", "same", "location", "day", "time"


module.exports = mongoose.model('Task', classSchema);

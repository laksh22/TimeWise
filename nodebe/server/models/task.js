
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const classSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  type: { // CUrrent: Type "class" or "task"
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: false,
  },
  email: {
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



module.exports = mongoose.model('Task', classSchema);

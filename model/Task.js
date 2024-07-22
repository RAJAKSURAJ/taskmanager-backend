const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['Pending', 'In Progress', 'Completed'],
    default: 'Pending',
  },
});

module.exports = mongoose.model('Task', TaskSchema);

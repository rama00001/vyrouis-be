const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  id: {
    type: String
  },
  title: {
    type: String,
    required: true,
  },
  description:
  {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("tasks", TaskSchema);
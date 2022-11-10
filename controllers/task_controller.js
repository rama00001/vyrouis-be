const Uuid = require('uuid')
const Tasks = require("../model/task_schema");



const getTaskList = (req, res) => {
  Tasks.find((err, tasks) => {
    if (err) {
      res.send(err);
    }
    res.json(tasks);
  });
};

const createTask = (req, res) => {
  const task = new Tasks({
    id: Uuid.v4(),
    title: req.body.title,
    description: req.body.description,
  });

  task.save((err, taskInfo) => {
    if (err) {
      res.send(err);
    }
    res.json(taskInfo);
  });
};

const getTask = (req, res) => {
  Tasks.findOne( { id: req.params.id },(err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

const updateTask = (req, res) => {
  Tasks.findOneAndUpdate(
    { id: req.params.id },
    {
      $set: {
        title: req.body.title,
        description: req.body.description,
      },
    },
    { new: true },
    (err, Tasks) => {
      if (err) {
        res.send(err);
      } else res.json(Tasks);
    }
  );
};

const deleteTask = (req, res) => {
  Tasks.deleteOne({ id: req.params.id })
    .then(() => res.json({ message: "Tasks Deleted" }))
    .catch((err) => res.send(err));
};

module.exports = {
  getTaskList,
  createTask,
  updateTask,
  deleteTask,
  getTask
};
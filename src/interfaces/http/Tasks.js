'use strict';

const Tasks = require('src/application/Tasks/Tasks');

module.exports = {
  create: async(req, res) => {
    const data = req.body;
    const result = await Tasks.create(data);
    const task = {};

    if (!result) {
      return res.status(500).json({ result: { message: 'create tasks failed' }});
    }

    task.id = result.id;
    task.title = result.title;
    return res.status(200).json({ result:  task });
  },
  update: async(req, res) => {
    const data = req.body;
    const id = req.params.id;
    data.id = id;

    const result = await Tasks.update(data);

    if (result != 1) {
      return res.status(500).json({
        result: {
          message: 'update failed'
        }
      });
    }

    return res.status(200).json({
      result: {
        message: 'update success'
      }
    });
  },
  getById: async(req, res) => {
    const id = req.params.id;
    const result = await Tasks.getById(id);
    const task = {};

    if (!result) {
      return res.status(500).json({
        result: {
          message: 'internal server error'
        }
      });
    }

    task.id = result.id;
    task.title = result.title;
    task.description = result.description;
    task.status = result.status;
    task.priority = result.priority;
    task.due_date = result.due_date;

    return res.status(200).json({
      result: {
        ...task
      }
    });
  }
};
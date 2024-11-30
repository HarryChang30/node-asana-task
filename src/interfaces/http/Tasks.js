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
  },
  getAllTasksByProjectId: async(req, res) => {
    const project_id = req.params.project_id;
    const result = await Tasks.getAllTasksByProjectId(project_id);
    const tasks = [];

    if (!result) {
      return res.status(500).json({
        result: {
          message: 'internal server error'
        }
      }); 
    }

    for (let i = 0; i < result.length; i++) {
      const task = {};
      const item = result[i].dataValues;
      task.id = item.id;
      task.project_id = item.project_id;
      task.due_date = item.due_date;
      task.title = item.title;
      task.description = item.description;
      task.priority = item.priority;
      task.status = item.status;
      task.created_at = item.createdAt;
      task.updated_at = item.updatedAt;

      tasks.push(task);
    }

    return res.status(200).json({ result: { tasks: tasks }});
  }
};
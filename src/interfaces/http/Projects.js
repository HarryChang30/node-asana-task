'use strict';

const Projects = require('src/application/Projects/Projects');

module.exports = {
  get: async(req, res) => {
    const id = req.params.id;
    const result = await Projects.get(id);
    const projects = {};

    if (req.project_id != id) {
      return res.status(403).json({ result: { message: 'project is not allowed to access' }});
    }

    if (!result) {
      return res.status(500).json({ result: { message: 'get project failed' }});
    }

    projects.id = result.id;
    projects.name = result.name;

    return res.status(200).json({ result: projects });
  },
  create: async(req, res) => {
    const data = req.body;
    const result = await Projects.create(data);
    const projects = {};

    if (!result) {
      return res.status(500).json({ result: { message: 'create project failed' }});
    }
        
    projects.id = result.id;
    projects.name = result.name;

    return res.status(200).json({ result: projects });
  },
  update: async(req, res) => {
    const id = req.params.id;
    const data = req.body;
    data.id = id;

    const result = await Projects.update(data);

    // If result response is not 1 means 
    // There are some of the failed update
    if (result != 1) {
      return res.status(500).json({result: {
        message: 'update failed'
      }});
    }

    return res.status(200).json({result: {
      message: 'update success'
    }});
  },
  delete: async(req, res) => {
    const id = req.params.id;

    const result = await Projects.delete(id);
    if (result != 1) {
      return res.status(500).json({result: {
        message: 'delete failed'
      }});
    }

    return res.status(200).json({result: {
      message: 'delete success'
    }});
  }
};
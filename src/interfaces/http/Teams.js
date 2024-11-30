'use strict';

const Teams = require('src/application/Teams/Teams');

module.exports = {
  create: async(req, res) => {
    const data = req.body;
    const result = await Teams.create(data);
    const teams = {};

    if (!result) {
      return res.status(500).json({ result: { message: 'create teams failed'}});
    }
            
    teams.id = result.id;
    teams.name = result.name;
    
    return res.status(200).json({ result: teams });
  },
  assign: async(req, res) => {
    const data = req.body;
    const result = await Teams.assign(data);
    
    if (!result) {
      return res.status(500).json({result: { message: 'assign team to groups failed' }});
    }

    const team_groups = {};
    team_groups.id = result.id;

    return res.status(200).json({ result: {
      id: team_groups.id,
      message: 'success assign team groups',
    }});
  },
  assign_project: async(req, res) => {
    const data = req.body;
    const result = await Teams.assign_project(data);

    if (!result) {
      return res.status(500).json({result: {message: 'assign team to projects failed'}});
    }

    const team_projects = {};
    team_projects.id = result.id;

    return res.status(200).json({
      result: {
        id: team_projects.id,
        message: 'success assign team to the projects'
      }
    });
  }
};
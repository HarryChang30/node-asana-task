'use strict';

const Teams = require('src/application/Teams/Teams');

module.exports = {
  create: async(req, res) => {
    const data = req.body;
    const result = await Teams.create(data);
    const teams = {};
            
    teams.id = result.id;
    teams.name = result.name;
    
    return res.status(200).json({ result: teams });
  },
  assign: async(req, res) => {
    const data = req.body;
    const result = await Teams.assign(data);

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
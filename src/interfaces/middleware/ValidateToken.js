'use strict';

const jwt = require('jsonwebtoken');
const Teams = require('src/application/Teams/Teams');

module.exports = {
  validate: async (req, res, next) => {
    const headerKey = process.env.TOKEN_HEADER_KEY;
    const secretKey = process.env.JWT_SECRET_KEY;

    try {
      const token = req.header(headerKey);
      const verified = jwt.verify(token, secretKey);

      if (!verified) {
        return res.status(401).json({ result: { message: 'Unauthorized' }});
      }

      req.user_id = verified.id;
      
      const teamGroups = await Teams.get_groupTeam_by_user_id(req.user_id);
      if (!teamGroups) {
        next();
      }

      const teamProjects = await Teams.get_projectTeam_by_team_id(teamGroups.dataValues.team_id);
      if (!teamProjects) {
        next();
      } else {
        req.project_id = teamProjects.project_id;
      }
      
      next();
    } catch(error) {
      // 401 Unauthorized
      return res.status(401).json({ result: { message: 'Unauthorized', error }});
    }
  }
};
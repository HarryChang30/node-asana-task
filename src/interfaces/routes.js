const express = require('express');
const router = express.Router();

const UserHandler = require('src/interfaces/http/Users');
const ProjectHandler = require('src/interfaces/http/Projects');
const TeamHandler = require('src/interfaces/http/Teams');
const TaskHandler = require('src/interfaces/http/Tasks');
const CommentHandler = require('src/interfaces/http/Comments');

// List of Asana APIs

// Users
router.post('/v1/users', UserHandler.create);

// Projects
router.post('/v1/projects', ProjectHandler.create);
router.put('/v1/projects/:id', ProjectHandler.update);
router.delete('/v1/projects/:id', ProjectHandler.delete);

// Teams
router.post('/v1/teams', TeamHandler.create);
router.post('/v1/team-groups', TeamHandler.assign);
router.post('/v1/team-projects', TeamHandler.assign_project);

// Tasks
router.post('/v1/tasks', TaskHandler.create);
router.put('/v1/tasks/:id', TaskHandler.update);
router.get('/v1/tasks/:id', TaskHandler.getById);

// Comments
router.post('/v1/comments', CommentHandler.create);

// Health check server
router.get('/', (req, res) => {
  return res.status(200).json({ message: 'Server is healthy' });
});

module.exports = router;
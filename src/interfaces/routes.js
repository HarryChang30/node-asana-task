const express = require('express');
const router = express.Router();

const UserHandler = require('src/interfaces/http/Users');
const ProjectHandler = require('src/interfaces/http/Projects');

// List of Asana APIs

// Users
router.post('/v1/users', UserHandler.create);

// Projects
router.post('/v1/projects', ProjectHandler.create);
router.put('/v1/projects/:id', ProjectHandler.update);
router.delete('/v1/projects/:id', ProjectHandler.delete);

// Health check server
router.get('/', (req, res) => {
  return res.status(200).json({ message: 'Server is healthy' });
});

module.exports = router;
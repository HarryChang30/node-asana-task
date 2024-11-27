const express = require('express');
const router = express.Router();

const UserHandler = require('src/interfaces/http/Users');

// List of Asana APIs

// Users
router.post('/v1/users', UserHandler.create);

// Health check server
router.get('/', (req, res) => {
  return res.status(200).json({ message: 'Server is healthy' });
});

module.exports = router;
const express = require('express');
const router = express.Router();

// List of Asana tasks APIs


// Health check server
router.get('/', (req, res) => {
  return res.status(200).json({ message: 'Server is healthy' });
});

module.exports = router;
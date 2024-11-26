const express = require('express');
const router = express.Router();

// Health check
router.get('/', (req, res) => {
    return res.status(200).json({ message: "Server is healthy" });
})

module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/check', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Server is up and running',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;


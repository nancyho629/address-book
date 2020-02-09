const express = require('express');
const router = express.Router();

// @route POST api/users /sign-up
router.post('/', (req, res) => {
  res.send('REgisters a user')
} );

module.exports = router;

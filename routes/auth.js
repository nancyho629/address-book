const express = require('express');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator')

// GET api/auth
router.get('/', (req, res) => {
  res.send('Get logged in user')
} );

// Post api/auth
router.post('/',
[
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists()
],
async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Find if there's a user that signed up with the email
      let user = await User.findOne({ email });

      // if there isn't a user with that email, send the following response
      if(!user) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      // Otherwise we're going to validate the password next using brypt.compare method
      const isMatch = await bcrypt.compare(password, user.password);
      // If the pw doesn't match you'll get a 400 response
        if (!isMatch) {
          return res.status(400).json({ msg: 'Invalid Credentials' })
        }

      const payload = {
          user: {
            id: user.id
          }
        };

        jwt.sign(payload, config.get('jwtSecret'), {
          expiresIn: 360000
        }, (err, token) => {
          if(err) throw err;
          res.json({ token })
          }
        );

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error')
    }
} );

module.exports = router;

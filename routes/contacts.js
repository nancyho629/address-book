const express = require('express');
const router = express.Router();

// GET api/contacts
router.get('/', (req, res) => {
  res.send('Get all users contacts')
} );

// POST api/contacts
router.get('/', (req, res) => {
  res.send('Add a contact')
} );

// PUT api/contacts
router.put('/:id', (req, res) => {
  res.send('Updates a contact')
} );

// DELETE api/contacts
router.delete('/:id', (req, res) => {
  res.send('Delete contact')
} );


module.exports = router;

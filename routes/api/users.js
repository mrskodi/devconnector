const express = require('express');
const router = express.Router();
const User = require('../../models/User');

// @route     GET /api/users/test
// @desc      tests the post route
// @access    Public
router.get('/test', (req, res) => res.json({msg: 'User works'}));


// @route     POST /api/users/register
// @desc      register a user
// @access    Public
router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email })
      .then( user => {
        if(user) {
          // this means user with the email address already exists
          return res.status(400).json({ email: 'Email already exists!' });
        } else {
          // user does not exist
          // Create a new User
          const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            // password needs to be hashed
            //password: 
          });
        }
      } )
      .catch();
});


module.exports = router;
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var express = require("express");
var router = express.Router();
var User = require('../models/user/User.js');

router.post('/login', function(req, res) {
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) {
            console.log(err);
            return res.status(500).send('Error on the server.');
        }
        if (!user) {
            return res.status(404).send('No user found.');
        }

        //check password
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) {
            return res.status(401).send({ auth: false, token: null });
        }

        //assign new token
        var token = jwt.sign({ id: user._id }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token });
    });
});

// router.post('/register', function(req, res) {
  
//     //hash password
//     var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  
//     var newUser = new User({
//         username : req.body.username,
//         email : req.body.email,
//         password : hashedPassword,
//         admin: req.body.admin
//     });
  
//     //save new user
//     newUser.save(function (err, user) {
//         if (err) {
//             console.error(err);
//             return res.status(500).send("There was a problem registering the user.");
//         } 
//         // create a token
//         var token = jwt.sign({ id: user._id }, process.env.SECRET, {
//             expiresIn: 86400 // expires in 24 hours
//         });
    
//         res.status(200).send({ auth: true, token: token });
//     }); 
// });

router.get('/me', function(req, res) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
        if (err) {
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }

        User.findById(decoded.id, { password: 0 }, function (err, user) {
            if (err) {
                console.error(err); 
                return res.status(500).send("There was a problem finding the user.");
            }
            if (!user) {
                return res.status(404).send("No user found.");
            }

            res.status(200).send(user);
        });
    });
});

module.exports = router;

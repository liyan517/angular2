var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
	//async call
	User.findOne({}, function(err, doc){
		if(err){
			return res.send('Error!');

		}
		res.render('index');
	});
});

router.post('/user/register', function(req, res, next) {
	console.log("register user");
	var email = req.body.Email;
	var firstName = req.body.FirstName;
	var lastName = req.body.LastName;
	var userName = req.body.UserName;
	var password = req.body.Password;
	var user = new User({
		firstName: firstName,
		lastName: lastName,
		password: password,
		userName: userName,
		email: email
	});
	console.log(user);
	user.save();
  res.redirect('/');
});
module.exports = router;

const server = require('./app')
require('dotenv').config()

const port = process.env.PORT || 3000
server.listen(port, function () {
  console.log('app listening on port 3000!')
})



/*
// create a user a new user
var testUser = new User({
  name: 'jmar777',
  firstName:'john',
  email:'a@test.com',
  password: 'Password123'
});

// save user to database
testUser.save(function(err) {
  if (err) throw err;

  // fetch user and test password verification
  User.findOne({ email: 'a@test.com' }, function(err, user) {
      if (err) throw err;

      // test a matching password
      user.comparePassword('Password123', function(err, isMatch) {
          if (err) throw err;
          console.log('Password123:', isMatch); // -> Password123: true
      });

      // test a failing password
      user.comparePassword('123Password', function(err, isMatch) {
          if (err) throw err;
          console.log('123Password:', isMatch); // -> 123Password: false
      });
  });
});*/
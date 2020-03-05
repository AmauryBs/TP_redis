
function createUser(req, res) {
    const User = require('../../models');
    var newUser = new User({
        name: req.body.name,
        firstName:req.body.firstName,
        email:req.body.email,
        password: req.body.password
      });
    newUser.save(function(err) {
        if (err) throw err;
        res.json({info: 'Success'});
    
      }); 
}

function login(req, res) {
    require('dotenv').config()
    const User = require('../../models');

    //find the user
    User.findOne( {email: req.body.email}, function(err, user){
        if (err) throw err;

        // compare password
        user.comparePassword(req.body.password, function(err, isMatch){
            if (err) throw err;
            if (isMatch){
                const jwt = require('jsonwebtoken');
                const token = jwt.sign({ _id: user._id, admin: true }, process.env.JWT_SECRET, { expiresIn: '1 week' });
                res.json({info:'Success',token: token});
                
            }else{
                res.json({info:'Faillure'});
            }
        });
        
    });
}

function hello(req,res){
    require('dotenv').config()
    if(req.header('Authorization')){
        const token = req.header('Authorization').replace('Bearer ', '')
    }
    const jwt = require('jsonwebtoken')
    try{
        const payload = jwt.verify(token, process.env.JWT_SECRET) 
        console.log(payload._id)
        
        res.send('Hello world')
    } catch(error) {
        console.error(error.message)
        res.send('please login first')
    }
    
}


module.exports.createUser = createUser;
module.exports.login = login;
module.exports.hello = hello;




const Users = require('../models/users.model');


checkDuplicateUsernameOrEmail = (req, res, next) => {
    // Username
    Users.findOne({
      username: req.body.username
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
  
      if (user) {
        res.status(400).send({ message: "Failed! Username is already in use!" });
        return;
      }

       // Email
    Users.findOne({
        email: req.body.email
      }).exec((err, user) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
        if (user) {
          res.status(400).send({ message: "Failed! Email is already in use!" });
          return;
        }
  
        next();
      });
    });
  };


checkRolesExisted = (req, res, next) => {
if(req.body.role == 'admin'){
    res.send(' Admin')
}else{
    res.send('User')
}


}
  
  const verifySignUp = {
    checkDuplicateUsernameOrEmail,
    checkRolesExisted
  };
  
  module.exports = verifySignUp;
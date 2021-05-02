


const Users = require('../models/users.model');



const Joi = require('@hapi/joi');
const _ = require('lodash');
const bcrypt = require('bcrypt');

//var  Users = require('../models/users.model');
const mongoose = require('mongoose');














exports.login = function(req,res){



    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    let user =  Users.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Invalid email or password');


    const validPassword =  bcrypt.compare(req.body.password,user.password);
    if (!validPassword) return res.status(400).send('Invalid  password');


 const token = jwt.sign({_id:user._id},'jwtPrivateKey');
   
     res.send(token);

};


function validate(req){
    const schema = {
        email :Joi.string().min(5).max(255).required().email(),
        password:Joi.string().min(5).max(255).required()
    }
return Joi.validate(req,schema);
}




























/*

exports.findAll = function(req,res){
    

    
    Users.find()

.then(users =>
   res.send(users))
   .catch(err => res.send(err));
}

exports.create = function(req,res){
    
   const user = new Users({
    _id:req.body._id,
    username: req.body.username,
   email:req.body.email,
   password: req.body.password,
    role:req.body.role
});


//save note in db
user.save()
.then(data=> res.send(data))
.catch(err => res.send(err));

}



exports.findById = function(req,res){
    
 const _id = req.params._id;

 Employee.findById(_id)
 .then(user => {
     if(!user){
         return res.send({
             message: `not found  ${req.params._id}`
         })

     }else{ 
     return res.status(200).send(user)
     }
})
}


exports.findByIdAndUpdate = function(req,res){
    
  // Validate Request
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
          });
     }
 
  const id= req.params.id;

// Find employee and update it with the request body
Users.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
   
.then(user => {
   if(!user) {
       return res.send({
           message: "employee does not exist " + id
       });
   }else  res.send({ message:"employee data was updated successfully."});
}).catch(err => res.send(err))


 
 
}




exports.findOneAndDelete = function(req,res){
   
    const id = req.params.id;
    Users.findByIdAndRemove(id)
    .then(user=> {
        if(!user) {
             res.status(404).send({
                message: "employee not found with id " + id
            });
        }
        else{ 
        res.send({message: `employee deleted successfully! with id ${id}`});
       }
    }).catch(err =>{ 
        
         res.status(500).send({
            message: "Could not delete note with id " + req.params.id
        })


    });



}
*/
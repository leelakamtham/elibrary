
//const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const _ = require('lodash');
const bcrypt = require('bcrypt');


const { Users ,validate}= require('../models/users.model')
const mongoose = require('mongoose');

var app = express.Router();




app.post('/',async (req,res)=>{



    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    let user = await Users.findOne({ email: req.body.email });
    if (user) return res.status(400).send('User already registered.');
  
    user = new Users(_.pick(req.body, ['name', 'email', 'password','isAdmin']));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();


    res.send(_.pick(user,['_id','name','email','password','isAdmin']))


/*
    const token = jwt.sign({_id:user._id},'jwtPrivateKey');
    res.send(token);

  
*/







})




/*
module.exports =router;
*/

module.exports = app; 
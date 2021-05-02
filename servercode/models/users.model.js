const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

   const Users = mongoose.model('users',
   mongoose.Schema( 
   
   
   {
        
         username:{
         type: String,
         required: true
          },
     
        email:{
         type: String,
         required: true
         },

       password:{
        type:String,
        required:true
      },
      isAdmin: Boolean
     
   
      }   )

    






      
   );

   function validateUser(user) {
      const schema = {
        name: Joi.string().min(5).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),
      };
    
      return Joi.validate(user, schema);
    }
  


   

   module.exports = Users;
   module.exports = validateUser;
  

   
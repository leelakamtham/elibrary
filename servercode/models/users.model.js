const mongoose = require('mongoose');
//const Joi = require('joi');

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
      role: {
        type: String,
        required: true
      },
     
   
      }   )

    






      
   );






   

   module.exports = Users;
  

   
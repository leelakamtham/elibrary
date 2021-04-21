const mongoose = require('mongoose');
//const Joi = require('joi');

   const Books = mongoose.model('books',
   mongoose.Schema( 
   
   
   {
        
         author:{
         type: String,
         required: true
          },
     
      language:{
         type: String,
         required: true
      },

     title:{
        type:String,
        required:true
      },
      pages:{
        type:Number,
        required: true,
        unique:true
        },
        country: {
        type: String,
        required: true
      },
     
   
      }   )

    






      
   );






   

   module.exports = Books;
  

   
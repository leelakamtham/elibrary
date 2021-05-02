const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

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
        required:true,
        unique:true
      },
      pages:{
        type:Number,
        required: true
        
        },
        country: {
        type: String,
        required: true
      },
     
   
      }   )

    






      
   );




   function validateBooks(books) {
      const schema = {
        author: Joi.string().min(3).max(255).required(),
        title: Joi.string().min(3).max(255).required().unique(),
        language: Joi.string().min(3).required(),
        pages: Joi.Number().required(),

      };
    
      return Joi.validate(book, schema);
    }


   

   module.exports = Books;
   exports.validate = validateBooks;
  

   
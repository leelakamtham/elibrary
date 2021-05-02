

const Books = require('../models/books.model.js');

exports.findAll = function(req,res){
    

    
    Books.find()

    .then(books =>
     res.send(books))
     .catch(err => res.send(err));
      }




exports.create = function(req,res){
    
    /*
    const { role } = req.user;

    if (role !== 'admin') {
        return res.sendStatus(403);
    }

  */


   const book = new Books({
    
    author: req.body.author,
   title:req.body.title,
   language: req.body.language,
    pages:req.body.pages,
    country:req.body.country
});


//save note in db
book.save()
.then(data=> res.send(data))
.catch(err => res.send(err));

}



exports.findById = function(req,res){
    
 const _id = req.params._id;

 Books.findById(_id)
 .then(book => {
     if(!book){
         return res.send({
             message: `not found  ${req.params._id}`
         })

     }else{ 
     return res.status(200).send(book)
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
Books.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
   
.then(book => {
   if(!book) {
       return res.send({
           message: "book does not exist " + id
       });
   }else  res.send({ message:"book data was updated successfully."});
}).catch(err => res.send(err))


 
 
}




exports.findOneAndDelete = function(req,res){
   
    const id = req.params.id;
    Books.findByIdAndRemove(id)
    .then(book=> {
        if(!user) {
             res.status(404).send({
                message: "book not found with id " + id
            });
        }
        else{ 
        res.send({message: `book deleted successfully! with id ${id}`});
       }
    }).catch(err =>{ 
        
         res.status(500).send({
            message: "Could not delete note with id " + req.params.id
        })


    });



}


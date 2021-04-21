

const Users = require('../models/users.model.js');

exports.findAll = function(req,res){
    

    
    Users.find()

    .then(users =>
     res.send(users))
     .catch(err => res.send(err));
      }




exports.create = function(req,res){
    




   const user = new Users({
    
    username: req.body.username,
   email:req.body.email,
   password: req.body.password,
    role:req.body.role,
    
});


//save note in db
user.save()
.then(data=> res.send(data))
.catch(err => res.send(err));

}



exports.findOne = function(req,res){
    
 const username = req.params.username;

 Users.findOne(username)
 .then(user => {
     if(!user){
         return res.send({
             message: `not found  ${req.params.username}`
         })

     }else{ 
     return res.status(200).send(user)
     }
})
}
/*

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

*/
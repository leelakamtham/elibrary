
const books = require("../controllers/books.js");
//const users = require('../controllers/users.js')

const express = require('express');

var app = express.Router();










app.post('/login',(req,res)=>{

})





app.post('/login')


app.get('/books',               books.findAll);
app.get('/books/:_id',           books.findById);
app.post('/book',                 books.create);
app.put('/books/:id',            books.findByIdAndUpdate);

app.delete('/books/:id',          books.findOneAndDelete);




//app.get('/users',users.findAll);


module.exports = app;
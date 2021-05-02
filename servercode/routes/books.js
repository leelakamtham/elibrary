
const books = require("../controllers/books.auther.js");




const express = require('express');

const jwt = require('jsonwebtoken');

var app = express.Router();


const accessTokenSecret = 'somerandomaccesstoken';









app.get('/books',books.findAll);
app.get('/books/:_id', books.findById);
app.post('/book', books.create);
app.put('/books/:id',            books.findByIdAndUpdate);

app.delete('/books/:id',          books.findOneAndDelete);






module.exports = app;






/*
    // Filter user from the users array by username and password
    const user = Users.findOne(u => { return u.username === username && u.password === password });

if (user) {
    // Generate an access token
    const accessToken = jwt.sign({ username: user.username,  role: user.role }, accessTokenSecret);

    res.json({
        accessToken
    });
} else {
    res.send('Username or password incorrect');
}
*/
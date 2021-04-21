
const books = require("../controllers/books.auther.js");
const users = require('../controllers/users.auth.js')


const Users = require('../models/users.model');

const express = require('express');

const jwt = require('jsonwebtoken');

var app = express.Router();


const accessTokenSecret = 'somerandomaccesstoken';





const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
}








app.post('/login',(req, res) => {
    // Read username and password from request body
    const { username, password } = req.body;

    // Filter user from the users array by username and password
    const user = Users.find(u => { return u.username === username && u.password === password });

    if (user) {
        // Generate an access token
        const accessToken = jwt.sign({ username: user.username,  role: user.role }, accessTokenSecret);

        res.json({
            accessToken
        });
    } else {
        res.send('Username or password incorrect');
    }
});





app.post('/users',  users.create);
//app.get('/users',users.findAll);


app.get('/books',authenticateJWT,      books.findAll);
app.get('/books/:_id',    books.findById);
app.post('/book', authenticateJWT, books.create);
app.put('/books/:id',            books.findByIdAndUpdate);

app.delete('/books/:id',          books.findOneAndDelete);




//app.get('/users',users.findAll);


module.exports = app;
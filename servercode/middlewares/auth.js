const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const Users = require('../models/users.model');

const app = express();

app.use(bodyParser.json());

const accessTokenString = 'NiWc@In';





app.post('/login', (req, res) => {
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














app.listen(3000,()=>{
    console.log("authentication service running on port 3000");
})
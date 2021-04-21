

require('./configurations/config');

const express = require('express');

const app = express();

const bodyParser = require('body-parser');


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));
require('./configurations/appSettings').init(app);








app.listen(port,()=>{
  console.log('server listening on port ');
});
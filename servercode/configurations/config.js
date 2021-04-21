
port=3000;

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/elibrarydb',{ useUnifiedTopology: true },
{useNewUrlParser:true}
)
.then(()=> console.log("database connected"))
.catch((err)=> console.log("error "));

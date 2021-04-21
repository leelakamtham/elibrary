

module.exports = function(app) {

   // var users = require('./users');
    var books = require('./books');
    
    //app.use('/api',users);
    app.use('/api',books);
    
    
   
    
    }
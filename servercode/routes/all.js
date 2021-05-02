

module.exports = function(app) {

   // var users = require('./users');
    var books = require('./books');
    var auth = require('./auth');
    
    
    //app.use('/api',users);
    app.use('/api',books);
    app.use('/api/auth',auth)
    
    
   
    
    }
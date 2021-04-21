module.exports = {

    init:function(app){
        this.setRoutes(app);
        app.get('*',(req,res)=>{
            res.send('404 error ')
        });
    
    },
    
    setRoutes: function(app){
    
    require( "../routes/all")(app);
    
    
    
    }
    
    
    
    
    
    }
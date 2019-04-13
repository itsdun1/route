var mongoose  = require("mongoose")
var img = new mongoose.Schema({
    username:String,
    avatar:{
        
        type:Buffer
      
            
        
    },
    avatar2:{
        type:Buffer
    }
})

module.exports = mongoose.model("img",img);
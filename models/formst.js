var mongoose  = require("mongoose");

var formdata  = new mongoose.Schema({
    resName:{
    type:String,
    
    },
    
    username:String,
    name:String,
    collage:String,
    passion:String,
    position:String,
    intro:String,
    dob:String,
    number1:String,
    number2:String,
    address1:String,
    address2:String,
    email1:String,
    email2:String,
    skillN:Number,
    expeN:Number,
    experienceN:[{type:String}],
    experience:[{type:String}],
    skillname:[{type:String}],
    skill:[{type:String}],
    startYearss:String,
    endYearss:String,
    schoolN:String,
    startYearhs:String,
    endYearhs:String,
    collagedegree:String,
    schoolhscn:String,
    startYearcol:String,
    endYearcoll:String,
    facebook:String,
    instagram:String,
    linkdin:String,
    template:String,
    
  
})

module.exports = mongoose.model("formd",formdata);

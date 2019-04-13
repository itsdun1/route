
var mongoose = require("mongoose");

var active = new mongoose.Schema({
    username:String,
    activeList:[{type:String}],
    currentActive:String,
    activeWeb:String
})


module.exports = mongoose.model("active",active);



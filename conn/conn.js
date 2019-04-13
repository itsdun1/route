var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var x = "mongodb://itsdun2:Aditya99@ds133256.mlab.com:33256/eresume";
var l ="mongodb://127.0.0.1:27017/test_data";
mongoose.connect( x, { useNewUrlParser: true });


module.exports = {mongoose};    
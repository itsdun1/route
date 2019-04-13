var express = require("express");
var app = express();
var mongoose = require("./conn/conn");

var user = require("./models/user")
var passport = require("passport")
var passportLocal = require("passport-local")
var passportLocalMongoose = require("passport-local-mongoose")
var bodyParser = require("body-parser")
var formd = require("./models/formst")
var active = require("./models/prores")
var img = require("./models/imagepro")
var sgmail = require("@sendgrid/mail")

sgmail.setApiKey(process.env.SENDGRID_API_KEYS);

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
var port = process.env.PORT  || 3000

app.get("/",(req,res)=>{
   
});


    
app.post("/sendmail" ,(req,res)=>{

    var name = req.body.name ;
    var email = req.body.email;
    var phone = req.body.phone;
    var str = `You have been contacted by ${name}  and his email is ${email} and phone no is ${phone}  his message is  ------> `
    var message =   req.body.message ;
    var emails = req.body.emails;
    var route = req.body.route;
   // console.log(email,emails,phone,message,email);
    const msg = {
        to: emails,
        from: email,
        subject: 'You have been contacted Plese check Email',
        text: message,
        html: `<strong> ${message} </strong>`,
      };



  sgmail.send(msg);

    res.redirect("/eresume/"+ route);




})

app.get("/eresume/:name",(req,res)=>{

    var a =req.params.name;
    active.find({username:a}).then((data)=>{

        console.log(data)
        formd.find({username:a,resName:data[0].activeWeb}).then((data2)=>{

                console.log(data2[0].template)
            var t = data2[0].template;
            console.log(t)
              if(t == "blueorange"){
                res.render("resumeall.ejs",{data2:data2[0]

                });
              }  
              else if(t == "classic" ){
                  res.render("resume2all.ejs",{data2:data2[0]})
              }


        })


    })

})




app.get('/api/images2/:name', async (req, res) => {
    try {
        var a = req.params.name;
        const user = await img.findOne({username:a})

        if (!user || !user.avatar2) {
            throw new Error()
        }

        res.set('Content-Type', 'image/jpg')
        res.send(user.avatar2)
    } catch (e) {
        res.status(404).send()
    }
})

app.get('/api/images/:name', async (req, res) => {
    try {
        var a = req.params.name;
        const user = await img.findOne({username:a})

        if (!user || !user.avatar2) {
            throw new Error()
        }

        res.set('Content-Type', 'image/jpg')
        res.send(user.avatar)
    } catch (e) {
        res.status(404).send()
    }
})



app.listen( port,()=>
{
    console.log("server has started");
})
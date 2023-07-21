// var express=require("express"),
// mongoose=require("mongoose"),
// passport=require("passport"),
// bodyparser=require("body-parser"),
// LocalStrategy=require("passport-local"),
// passportLocalMongoose=require("passport-local-mongoose")
// const User=require("./model/User");
// var app=express();

// mongoose.connect("mongodb://localhost/27017");

// app.set("view engine","ejs");
// app.use(bodyparser.urlencoded({extended:true}));
// app.use(require("express-session")({
//     secret:"Rusty is a dog",
//     resave:false,
//     saveUninitialized:false
// }));

// app.use(passport.initialize());
// app.use(passport.session());


// // passport.use(new LocalStrategy(User.authenticate()));
// // passport.serializeUser(User.serializeUser());
// // passport.deserializeUser(User.deserializeUser());


// app.get("/",function(req,res)
// {
//     res.render("home");
// });
// app.get("/secret",isLoggedIn,function(req,res)
// {
//     res.render("secret");
// });
// app.get("/register",async(req,res)=>{
//     const user=await User.create({
//         username: req.body.username,
//         password:req.body.password
//     });
//     return res.status(200).json(user);
// })

// app.get("/login", function (req, res) {
//     res.render("login");
// });

// app.post("/login", async function(req, res){
//     try {
//         // check if the user exists
//         const user = await User.findOne({ username: req.body.username });
//         if (user) {
//           //check if password matches
//           const result = req.body.password === user.password;
//           if (result) {
//             res.render("secret");
//           } else {
//             res.status(400).json({ error: "password doesn't match" });
//           }
//         } else {
//           res.status(400).json({ error: "User doesn't exist" });
//         }
//       } catch (error) {
//         res.status(400).json({ error });
//       }
// });
  
// //Handling user logout 
// app.get("/logout", function (req, res) {
//     req.logout(function(err) {
//         if (err) { return next(err); }
//         res.redirect('/');
//       });
// });
  
  
  
// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) return next();
//     res.redirect("/login");
// }
  
// var port = process.env.PORT || 3000;
// app.listen(port, function () {
//     console.log("Server Has Started!");
// });


const express= require("express");
const path=require("path");
require("./db/conn")
const User=require("./models/signupform");
const app=express();
const port=process.env.PORT || 3000;

//setting the path
const staticpath=path.join(__dirname,"../public");
// console.log(__dirname);

//middleware
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.use(express.urlencoded({extended:false}));
app.use(express.static(staticpath));

app.set("view engine","hbs");

//routing...

app.get("/",(req,res)=>{
  res.render("index");
});

app.post("/signup",async(req,res)=>{

  try{
    res.send(req.body);
  }
  catch(error){
    res.status(500).send(error); 
  }

})

app.get("/search",(req,res)=>{
  res.render("search");
});

app.get("/appointment",(req,res)=>{
  res.render("appointment");
});

app.get("/beds",(req,res)=>{
  res.render("beds");
});

app.get("/bloodbank",(req,res)=>{
  res.render("bloodbank");
});







//server create

app.listen(port,()=>{
  console.log(`server is running at port no ${port}`);
})
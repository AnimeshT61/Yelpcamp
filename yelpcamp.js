var express=require("express");
var mongoose =require("mongoose");
var app=express();
var bodyParser=require("body-parser");
var Campground=require("./models/campground");
var Comment=require("./models/comment");
var passport=require("passport");
var LocalStrategy=require("passport-local");
var User=require("./models/user");
var methodOverride=require("method-override");
var flash=require("connect-flash");
var seedDB=require("./seeds");
//seedDB();

var commentRoutes=require("./routes/comments");
var campgroundRoutes=require("./routes/campgrounds");
var indexRoutes=require("./routes/index");

mongoose.connect("mongodb://localhost:27017/yelp_camp", { useNewUrlParser: true,useUnifiedTopology: true });

// Campground.create({name: "Spiti Valley", image:"https://toib.b-cdn.net/wp-content/uploads/2017/08/spiti-valley-himachal-pradesh.jpg",description:"this is trash to be honest"
//  },function(err,campground){
//  	if(err){
//  		console.log(err);
//  	}else{
//  		console.log("Newly created campground:");
//  		console.log(campground);
//  	}
//  });

app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine","ejs");
app.use(methodOverride("_method"));
app.use(flash());

//passport comfig

app.use(require("express-session")({
	secret:"Dont know what to write here",
	resave:false,
	saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//
app.use(function(req,res,next){
	res.locals.currentUser=req.user;
	res.locals.error=req.flash("error");
	res.locals.success=req.flash("success");
	next();
});

app.use("/campgrounds/:id/comments",commentRoutes);
app.use("/campgrounds",campgroundRoutes);
app.use("/",indexRoutes);

app.listen(3000);
var mongoose=require("mongoose");
var Campground= require("./models/campground");
var Comment=require("./models/comment");
var data=[{
	name: "Spiti Valley", image:"https://toib.b-cdn.net/wp-content/uploads/2017/08/spiti-valley-himachal-pradesh.jpg",description:"First on our list is, Spiti Valley nestled in the Keylong district of Himachal Pradesh. It is one of the best camping sites in India. Adventure enthusiasts and trekkers from all over the world come here to explore this untouched region in the Himalayas. There are barren hills, beautiful lakes, monasteries, lush valleys and stark beauty of nature. May to July are the perfect months for the adventure."
},
		  {name: "Chandratal Lake", image:"https://toib.b-cdn.net/wp-content/uploads/2017/08/chandratal-lake-himachal-pradesh.jpg",description:"The high-altitude Chandratal Lake is one of the best places to visit in Himachal Pradesh for natural bliss. Situated about 4,300 meters above sea level, you can get to the lake shores after a trek. Popularly known as ‘Lake of Moon’ it’s a beauty which enchants you. Camping here provides a thrilling experience of natural bliss. The view of the lake reflecting the moonlight is definitely ethereal."},
		{ name: "Nameri Eco Camp", image:"https://toib.b-cdn.net/wp-content/uploads/2017/08/nameri-eco-camp-assam.jpg",description:"this is trash to be honest"}
		 ];
function seedDB(){
   //Remove all campgrounds
   Campground.remove({},function(err){
		// if(err){
		// console.log(err);
		// }else{
		// console.log("removed campgrounds!");
		// //add a few campgrounds
		// data.forEach(function(seed){
		// Campground.create(seed, function(err, campground){
		// if(err){
		// console.log(err)
		// } else {
		// console.log("added a campground");
		// //create a comment
		// Comment.create(
		// {
		// text: "This place is great, but I wish there was internet",
		// author: "Homer"
		// }, function(err, comment){
		// if(err){
		// console.log(err);
		// } else {
		// campground.comments.push(comment);
		// campground.save();
		// console.log("Created new comment");
		// }
		// });
		// }
		// });
		// });
		// }
    }); 
    //add a few comments
}
module.exports=seedDB;
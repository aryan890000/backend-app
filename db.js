const mongoose = require("mongoose");
console.log("connnected to db");
mongoose.connect('mongodb+srv://aryanmane890000:aryanmane7@cluster0.84pct.mongodb.net/course-era');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;


const userSchema = new Schema({
	email : { type : String , unique : true},
	password : String,
	firstName : String,
	lastName : String
});


const adminSchema = new Schema({
	email : { type : String , unique : true},
	password : String,
	firstName : String,
	lastName : String
});


const courseSchema = new Schema({
	title : String,
	creatorId : ObjectId,
	description : String,
	price : Number,
	ImageUrl : String
});


const purchaseSchema = new Schema({
	userId : ObjectId,
	courseId : ObjectId
});



const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", userSchema);
const courseModel = mongoose.model("course", userSchema);
const purchaseModel = mongoose.model("purchase", userSchema);
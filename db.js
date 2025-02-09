const mongoose = require("mongoose");

console.log("connnected to db");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;


const userSchema = new Schema({
	email : { type : String , unique : true},
	password : String,
	firstName : String,
	lastName : String
});


const adminsSchema = new Schema({
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
const adminsModel = mongoose.model("admins", adminsSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);


module.exports = {
	userModel,
	adminsModel,
	courseModel,
	purchaseModel
}
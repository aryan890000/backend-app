const Router = require("express");
const jwt = require("jsonwebtoken");

const {JWT_ADMIN_PASSWORD}  = require("../config");
const { adminsModel, courseModel } = require("../db");
const { adminMiddleware } = require("../middleware/admin");
const adminRouter = Router();




adminRouter.post("/signup", async function(req, res){
	const { email, lastName, firstName, password } =  req.body

	await adminsModel.create({
		email : email,
		lastName : lastName,
		firstName : firstName,
		password : password
		
		
	})
	res.send({
		message : "done"
	})
	
})

adminRouter.post("/signin", async function(req, res){
	const { email, 	password} = req.body;

	const admin = await adminsModel.findOne({
		email : email,
		password : password
	});
	if(admin){
		const token = jwt.sign({
			id : admin._id
		}, JWT_ADMIN_PASSWORD);
	

	res.json({
		token : token
	})
} else {
	res.status(403).json({
		message : "failed"
	})
}
})

adminRouter.post("/course",adminMiddleware, async function(req, res){
	const adminId =  req.userId;

	const { title, description, imageUrl, price } =  req.body;

	await courseModel.create({
		title, description, imageUrl, price , creatorId	: adminId
	})
	json.send({
		message: "course created",
		courseId : course._id
	})
})



adminRouter.put("/course", adminMiddleware, async function(req, res){

	const adminId = req.userId;
	const { title, description, imageUrl, price, courseId } = req.body;

	const course = await courseModel.updateOne({
		_id : courseId,
		creatorId : adminId
	}, {
		title : title,
		description : description,
		imageUrl : imageUrl,
		price : price
	})






	json.json({
		message: "course updated",
		courseId : course._id
		 			
	})
})


adminRouter.get("/course/bulk",adminMiddleware,  async function(req, res){
	const adminId = req.userId;
	const { title, description, imageUrl, price, courseId } = req.body;

	const courses = await courseModel.find({
		creatorId : adminId
	})
	res.json({
		message : "courses	",
		courses
	})


})



module.exports = {
	adminRouter : adminRouter
}
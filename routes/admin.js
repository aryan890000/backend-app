const Router = require("express");
const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = "manemane"

const { adminsModel } = require("../db");
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

adminRouter.post("/course", function(req, res){
	json.send({
		message: "signup endpoint"
	})
})



adminRouter.put("/course", function(req, res){
	json.send({
		message: "signup endpoint"
	})
})


adminRouter.get("/course/bulk", function(req, res){
	json.send({
		message: "signup endpoint"
	})
})



module.exports = {
	adminRouter : adminRouter
}
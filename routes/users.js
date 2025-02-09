
const { Router } = require("express");
const { userModel } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "aryanmane7623";

const userRouter = Router();


	userRouter.post("/signup", async 	function(req, res){

		const { email, lastName, firstName, password } =  req.body

		await userModel.create({
			email : email,
			lastName : lastName,
			firstName : firstName,
			password : password
			
			
		})
		res.send({
			message : "done"
		})

})

userRouter.post("/signin", async function(req, res){
	const { email, 	password} = req.body;

	const user = await userModel.findOne({
		email : email,
		password : password
	});
	if(user){
		const token = jwt.sign({
			id : user._id
		}, JWT_USER_PASSWORD);
	

	res.json({
		token : token
	})
} else{
	res.status(403).json({
		message : "incorrect creds"
	})
}
})


userRouter.post("/purchases", function(req, res){

})



module.exports = {
	userRouter : userRouter
}
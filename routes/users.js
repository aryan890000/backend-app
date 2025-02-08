
const { Router } = require("express");

const userRouter = Router();

function createUserRoute(app){

	userRouter.post("/signup", function(req, res){
	json.send({
		message: "signup endpoint"
	})
})

userRouter.post("/signin	", function(req, res){

})


userRouter.post("/purchases", function(req, res){

})
}


module.exports = {
	userRouter : userRouter
}
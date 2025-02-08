const Router = require("express");

const { adminModel } = require("../db");
const adminRouter = Router();



adminRouter.post("/signup", function(req, res){
	json.send({
		message: "signup endpoint"
	})
})

adminRouter.post("/signin	", function(req, res){

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
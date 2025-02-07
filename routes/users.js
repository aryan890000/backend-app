
const { Router } = require("express");

const userRouter = Router();

function createUserRoute(app){

app.post("/signup", function(req, res){
	json.send({
		message: "signup endpoint"
	})
})

app.post("/signin	", function(req, res){

})


app.post("/purchases", function(req, res){

})
}


module.exports = {
	userRouter : userRouter
}
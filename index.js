const express = require("express");
const mongoose = require("mongoose");
const { userRouter } = require("./routes/users");
const { adminRouter } = require("./routes/admin");
const { courseRouter } = require("./routes/course")





const app = express();
app.use(express.json());


app.use("/api/v1/users", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);



async function main(){
	await mongoose.connect('mongodb+srv://aryanmane890000:aryanmane@cluster0.84pct.mongodb.net/course-era');
	app.listen(3000);
	console.log("listening on port 3000");
}

main()



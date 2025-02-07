const express = require("express");
const { createCourseRoute } = require("./course");
const { createUserRoute } = require("./user");
const app = express();


app.use("/user", userRouter);
app.use("/course", courseRouter);

createCourseRoute(app);
createUserRoute(app);


app.listen(3000);
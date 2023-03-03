const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const blogsRouter = require("./routes/blogs");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());

app.use("/blogs", blogsRouter);

app.listen(4000, () => {
    console.log("Listening to port: 4000");
});

module.exports = app;

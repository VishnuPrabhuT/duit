var express = require("express");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
var path = require("path");
var logger = require("morgan");

var indexRouter = require("./routes/index");

var app = express();

const oneHour = 1000 * 60 * 60;
app.use(
    sessions({
        secret: "everylittlethingwillbealright",
        saveUninitialized: true,
        cookie: { maxAge: oneHour },
        resave: false,
    })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

module.exports = app;

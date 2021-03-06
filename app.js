var express = require("express");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
var path = require("path");
var logger = require("morgan");
var bodyParser = require("body-parser");

require("./models/application.model.js");
require("./models/user.model.js");
var indexRouter = require("./routes/index");
var applicationRouter = require("./routes/application.router.js");
var userRouter = require("./routes/user.router.js");

var app = express();

const mongoose = require("mongoose");

// app.use(cors());

require("dotenv").config();

mongoose.connect(
    "mongodb+srv://vishnu:qwerty220@cluster0.zlkpu.mongodb.net/duit?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

mongoose.connection
    .on("open", () => {
        console.log("Mongoose connection open");
    })
    .on("error", (err) => {
        console.log("Connection error:" + err.message);
    });

app.set("view engine", "pug");

const oneHour = 1000 * 60 * 60;
app.use(
    sessions({
        secret: "everylittlethingwillbealright",
        name: "duit-sess-id",
        saveUninitialized: false,
        cookie: { maxAge: oneHour },
        resave: true,
    })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use(applicationRouter);
app.use(userRouter);

module.exports = app;

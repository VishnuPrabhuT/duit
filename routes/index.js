var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    console.log("/  herer!@@@@");

    res.sendFile("/public/index.html");
});

router.get("*", function (req, res, next) {
    console.log("dfdfdf!!!!!!");
    res.redirect("index", { title: "Duit" });
});

module.exports = router;

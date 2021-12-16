var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Duit" });
});

router.get("/loggedIn", function (req, res, next) {
    console.log(req.session.loggedIn + "-> LoggedIn Status");
    res.status(200).send({ status: req.session.loggedIn ? true : false });
});

router.get("*", function (req, res, next) {
    res.redirect("/");
});

module.exports = router;

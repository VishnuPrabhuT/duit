var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Duit" });
});

router.get("/applications", function (req, res, next) {
    res.render("index", { title: "Duit" });
});

router.get("/profile", function (req, res, next) {
    res.render("index", { title: "Duit" });
});

router.get("/signup", function (req, res, next) {
    res.render("index", { title: "Duit" });
});

router.get("/login", function (req, res, next) {
    res.render("index", { title: "Duit" });
});

router.get("/loggedIn", function (req, res, next) {
    // console.log("\n");
    // console.log(JSON.stringify(req.session) + "-> LoggedIn Status");
    // console.log("\n");

    res.status(200).send({ status: req.session.loggedIn ? true : false });
});

router.get("/logout", function (req, res, next) {
    req.session.destroy();

    res.status(200).send({ status: true });
});

module.exports = router;

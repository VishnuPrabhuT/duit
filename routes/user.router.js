var express = require("express");
var router = express.Router();
var { json } = require("body-parser");

var users = require("../controllers/user.controller.js");

router.post("/api/signup", json(), users.signup);
router.post("/api/login", json(), users.login);
router.get("/api/user/:id", json(), users.getUser);
router.get("/api/users", json(), users.users);
router.put("/api/user", json(), users.updateUser);
router.delete("/api/user/:id", json(), users.deleteUser);

module.exports = router;

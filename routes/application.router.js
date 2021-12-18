var express = require("express");
var router = express.Router();
var { json } = require("body-parser");

var applications = require("../controllers/application.controller.js");

router.post("/api/application", json(), applications.createApplication);
router.get("/api/application/:id", json(), applications.getApplication);
router.get("/api/applications", json(), applications.applications);
router.put("/api/application", json(), applications.updateApplication);
router.delete("/api/application", json(), applications.deleteApplication);

module.exports = router;

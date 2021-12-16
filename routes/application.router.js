var express = require("express");
var router = express.Router();
var { json } = require("body-parser");

var applications = require("../controllers/application.controller.js");

router.post("/api/application", applications.createApplication);
router.get("/api/application/:id", applications.getApplication);
router.get("/api/applications", applications.applications);
router.put("/api/Application", applications.updateApplication);
router.delete("/api/application/:id", applications.deleteApplication);

module.exports = router;

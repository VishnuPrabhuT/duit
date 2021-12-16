const cors = require("cors");

module.exports = function (app) {
    var applications = require("../controllers/application.controller.js");

    app.post("/api/application", applications.createApplication);
    app.get("/api/application/:id", applications.getApplication);
    app.get("/api/applications", applications.applications);
    app.put("/api/Application", applications.updateApplication);
    app.delete("/api/application/:id", applications.deleteApplication);
};

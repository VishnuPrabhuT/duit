var { json } = require("body-parser");

module.exports = function (app) {
    var applications = require("../controllers/user.controller.js");

    app.post("/api/user", json(), applications.createUser);
    app.get("/api/user/:id", json(), applications.getUser);
    app.get("/api/users", json(), applications.users);
    app.put("/api/user", json(), applications.updateUser);
    app.delete("/api/user/:id", json(), applications.deleteUser);
};

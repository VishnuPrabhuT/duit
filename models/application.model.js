const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema(
    {
        email: String,
        url: String,
        status: String,
    },
    { collection: "applications" }
);

module.exports = mongoose.model("Application", ApplicationSchema);

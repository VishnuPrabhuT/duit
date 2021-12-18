const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema(
    {
        email: String,
        company: String,
        title: String,
        url: String,
        status: Boolean,
    },
    { collection: "applications" }
);

module.exports = mongoose.model("Application", ApplicationSchema);

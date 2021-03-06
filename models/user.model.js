const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        email: String,
        password: String,
    },
    { collection: "users" }
);

module.exports = mongoose.model("User", UserSchema);

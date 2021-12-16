const mongoose = require("mongoose");

const User = mongoose.model("User");

exports.createUser = (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password,
    });

    User.findOne({ email: req.body.email }).then((userObj) => {
        if (userObj) {
            let resObj = Object.assign({}, userObj._doc);
            resObj.msg = "User Exists!";

            res.status(200).json(resObj);
        } else if (user.email != "" && user.password != "") {
            console.log(user);

            user.save()
                .then((data) => {
                    let resObj = Object.assign({}, data._doc);
                    resObj.msg = "Signed Up!";

                    res.status(200).json(resObj);
                })
                .catch((err) => {
                    res.status(500).json({
                        message: "Fail!",
                        error: eer.message,
                    });
                });
        }
    });
};

exports.getUser = (req, res) => {
    User.findById(req.params.id)
        .select("-__v-_id")
        .then((user) => {
            res.status(200).json(user);
        })
        .catch((err) => {
            if (err.kind == "ObjectId") {
                return res.status(404).send({
                    message: "User not found with id " + req.params.id,
                    error: err,
                });
            }

            return res.status(500).send({
                message: "Error retrieving User with id " + req.params.id,
                error: err,
            });
        });
};

exports.users = (req, res) => {
    User.find()
        .select("-__v")
        .then((userInfos) => {
            res.status(200).json(userInfos);
        })
        .catch((error) => {
            console.log(error);

            res.status(500).json({
                message: "Error!",
                error: error,
            });
        });
};

exports.deleteUser = (req, res) => {
    console.log(req.params);
    User.findByIdAndRemove(req.params.id)
        .select("-__v-_id")
        .then((user) => {
            if (!user) {
                res.status(404).json({
                    message: "No user found with id = " + req.params.id,
                    error: "404",
                });
            }
            res.status(200).json({});
        })
        .catch((err) => {
            return res.status(500).send({
                message: "Error -> Can't delete User with id " + req.params.id,
                error: err.message,
            });
        });
};

exports.updateUser = (req, res) => {
    User.findByIdAndUpdate(
        req.body.email,
        {
            email: req.body.email,
            password: req.body.password,
        },
        { new: true }
    )
        .select("-__v-_id")
        .then((user) => {
            if (!user) {
                res.status(404).json({
                    message:
                        "Error -> Can't update User with id " + req.params.id,
                    error: "Not Found!",
                });
            }
            res.status(200).json(user);
        })
        .catch((err) => {
            return res.status(500).send({
                message:
                    "Error -> Can't update a User with id " + req.params.id,
                error: err.message,
            });
        });
};

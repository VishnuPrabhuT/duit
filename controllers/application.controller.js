const mongoose = require("mongoose");

const Application = mongoose.model("Application");

exports.createApplication = (req, res) => {
    const application = new Application({
        email: req.session.email,
        company: req.body.company,
        title: req.body.title,
        url: req.body.url,
        status: req.body.status,
    });

    console.log(application);

    application
        .save()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({
                message: "Fail!",
                error: eer.message,
            });
        });
};

exports.getApplication = (req, res) => {
    console.log(req.params.id, Application.findById(req.params.id));

    Application.findById(req.params.id)
        .select("-__v-_id")
        .then((application) => {
            console.log(application);
            res.status(200).json(application);
        })
        .catch((err) => {
            if (err.kind == "ObjectId") {
                return res.status(404).send({
                    message: "Application not found with id " + req.params.id,
                    error: err,
                });
            }

            return res.status(500).send({
                message:
                    "Error retrieving Application with id " + req.params.id,
                error: err,
            });
        });
};

exports.applications = (req, res) => {
    console.log(req.session.email);
    Application.find({ email: req.session.email })
        .then((applicationInfos) => {
            res.status(200).json(applicationInfos);
        })
        .catch((error) => {
            console.log(error);

            res.status(500).json({
                message: "Error!",
                error: error,
            });
        });
};

exports.deleteApplication = (req, res) => {
    console.log(req.params);
    Application.findByIdAndRemove(req.body._id)
        .select("-__v-_id")
        .then((application) => {
            if (!application) {
                res.status(404).json({
                    message: "No application found with id = " + req.params.id,
                    error: "404",
                });
            }
            res.status(200).json({});
        })
        .catch((err) => {
            return res.status(500).send({
                message:
                    "Error -> Can't delete Application with id " +
                    req.params.id,
                error: err.message,
            });
        });
};

exports.updateApplication = (req, res) => {
    Application.findByIdAndUpdate(
        req.body._id,
        {
            email: req.body.email,
            company: req.body.company,
            title: req.body.title,
            url: req.body.url,
            status: req.body.status,
        },
        { new: false }
    )
        .select("-__v-_id")
        .then((application) => {
            if (!application) {
                res.status(404).json({
                    message:
                        "Error -> Can't update Application with id " +
                        req.params.id,
                    error: "Not Found!",
                });
            }
            res.status(200).json(application);
        })
        .catch((err) => {
            return res.status(500).send({
                message:
                    "Error -> Can't update a Application with id " +
                    req.params.id,
                error: err.message,
            });
        });
};

import { useEffect, useState } from "react";
import FormField from "../components/formfield";
import FormButton from "../components/formbutton";

import "../sass/applications.sass";

function Applications() {
    const [applications, setApplications] = useState([]);

    const [url, setUrl] = useState("");
    const [company, setCompany] = useState("");
    const [title, setTitle] = useState("");

    async function getApplications() {
        let data = await fetch("/api/applications");
        data = await data.json();
        console.log(data);
        setApplications(data);
    }

    async function createApplication() {
        let apps = applications;
        let application = { company, title, url, status: false };

        if (company && title && url) {
            let data = await fetch("/api/application", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(application),
            });

            data = await data.json();

            apps.push(data);
            setApplications([...apps]);
        }
        setUrl("");
        setCompany("");
        setTitle("");
    }

    async function updateApplication(_id, status) {
        let apps = applications;
        let application = {};

        apps.forEach((app) => {
            if (app._id == _id) {
                app.status = status;
                application = app;
            }
        });

        let data = await fetch("/api/application", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(application),
        });

        data = await data.json();
        console.log(applications);
        setApplications([...apps]);
    }

    async function deleteApplication(_id) {
        let apps = [];
        let application = {};

        applications.forEach((app) => {
            if (app._id == _id) {
                application = app;
            } else {
                apps.push(app);
            }
        });

        let data = await fetch("/api/application", {
            method: "DELETE",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(application),
        });

        data = await data.json();
        console.log(applications);
        setApplications([...apps]);
    }

    // useEffect(() => {}, [applications]);

    useEffect(() => {
        getApplications();
    }, []);

    return (
        <div className="application-wrapper">
            <div className="add-application">
                <FormField
                    name="company"
                    label="Company"
                    type="text"
                    size="small"
                    onValueChange={(val) => {
                        setCompany(val);
                    }}
                />
                <FormField
                    name="title"
                    label="Title"
                    type="text"
                    size="medium"
                    onValueChange={(val) => {
                        setTitle(val);
                    }}
                />
                <FormField
                    name="url"
                    label="Job Posting URL"
                    type="text"
                    size="large"
                    onValueChange={(val) => {
                        setUrl(val);
                    }}
                />
                <div className="add-button-wrapper">
                    <FormButton
                        iconButton="add-icon"
                        name="+"
                        onClickHandler={createApplication}
                    />
                </div>
            </div>
            <div className="application-list">
                {applications.map((application) => {
                    return (
                        <details
                            className="application-card"
                            key={application._id}
                        >
                            <summary>
                                <span
                                    className={
                                        application.status
                                            ? "summary-status applied"
                                            : "summary-status not-applied"
                                    }
                                    onClick={(e) => {
                                        e.preventDefault();
                                        updateApplication(
                                            application._id,
                                            !application.status
                                        );
                                    }}
                                ></span>
                                <span className="summary-company">
                                    <b>Company: </b>
                                    {application.company}
                                </span>
                                <span className="summary-title">
                                    <b>Title: </b> {application.title}
                                </span>

                                <FormButton
                                    iconButton="trash-icon"
                                    name=" "
                                    onClickHandler={() => {
                                        deleteApplication(application._id);
                                    }}
                                />
                            </summary>
                            <div className="application-details">
                                <h3>Company: {application.company}</h3>
                                <h3>Title: {application.title}</h3>
                                <h3>URL: {application.url}</h3>
                            </div>
                        </details>
                    );
                })}
            </div>
        </div>
    );
}

export default Applications;

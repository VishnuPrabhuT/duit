import { useEffect } from "react";

import Card from "../components/card";
import FormField from "../components/formfield";
import FormButton from "../components/formbutton";

import "../sass/signup.sass";
import { useState } from "react";

function SignUp() {
    const [showMsg, setShowMsg] = useState(false);
    const [msg, setMsg] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        //createUser();
    });

    async function createUser() {
        let data = await fetch("/api/signup", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email: email, password: password }),
        });
        data = await data.json();

        console.log(data);

        setShowMsg(data._id ? true : false);
        setMsg(data.msg ? data.msg : "");
        setInterval(() => {
            setShowMsg(false);
            setMsg("");
        }, 5000);
    }

    return (
        <Card className="signup-container">
            <h1>Sign Up</h1>
            {!showMsg ? (
                <>
                    <FormField
                        name="email"
                        label="Email"
                        type="email"
                        onValueChange={(val) => {
                            setEmail(val);
                        }}
                    />
                    <FormField
                        name="password"
                        label="Password"
                        type="password"
                        onValueChange={(val) => {
                            setPassword(val);
                        }}
                    />
                    <FormButton name="Sign Up" onClickHandler={createUser} />
                </>
            ) : (
                <h3>{msg}</h3>
            )}
        </Card>
    );
}

export default SignUp;

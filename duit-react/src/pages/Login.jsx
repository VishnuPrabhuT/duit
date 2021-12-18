import { useEffect } from "react";

import Card from "../components/card";
import FormField from "../components/formfield";
import FormButton from "../components/formbutton";

import "../sass/login.sass";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
    const [showMsg, setShowMsg] = useState(false);
    const [msg, setMsg] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        //createUser();
    });

    async function createUser() {
        let data = await fetch("/api/login", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email: email, password: password }),
        });
        data = await data.json();

        console.log(data);

        setShowMsg(!data.status ? true : false);
        setMsg(data.msg ? data.msg : "");
        setTimeout(() => {
            props.setLogin(true);
            setShowMsg(false);
            setMsg("");
            navigate("/");
        }, 1500);
    }

    return (
        <Card className="signup-container">
            <h1>Login</h1>
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
                    <FormButton name="Login" onClickHandler={createUser} />
                </>
            ) : (
                <h3>{msg}</h3>
            )}
        </Card>
    );
}

export default Login;

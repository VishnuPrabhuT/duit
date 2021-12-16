import { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams,
    Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Applications from "./pages/Applications";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import "./sass/app.sass";

import Header from "/@components/header";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        isLoggedIn().then((status) => {
            console.log(status);
            setLoggedIn(status);
        });
    }, []);

    return (
        <>
            <Router>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/applications"
                        element={loggedIn ? <Applications /> : <Login />}
                    ></Route>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </Router>
            <main>
                <Outlet />
            </main>
        </>
    );
}

async function isLoggedIn() {
    let res = await fetch("/loggedIn");
    let data = await res.json();
    console.log(data);
    return Promise.resolve(data.status);
}

export default App;

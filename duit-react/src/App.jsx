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
import Header from "/@components/header";

import "./sass/app.sass";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    async function isLoggedIn() {
        let res = await fetch("/loggedIn");
        let data = await res.json();
        setIsLoading(false);
        return Promise.resolve(data.status);
    }

    async function logout() {
        let res = await fetch("/logout");
        let data = await res.json();
        console.log(data.status);
        window.location.reload();
    }

    useEffect(() => {
        isLoggedIn().then((status) => {
            setLoggedIn(status);
        });
    }, []);

    return (
        <>
            <Router>
                <Header loggedIn={loggedIn} logout={logout} />
                {!isLoading ? (
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/applications"
                                element={
                                    loggedIn ? (
                                        <Applications />
                                    ) : (
                                        <Login
                                            setLogin={(val) => setLoggedIn(val)}
                                        />
                                    )
                                }
                            ></Route>
                            <Route path="/profile" element={<Profile />} />
                            <Route
                                path="/login"
                                element={
                                    <Login
                                        setLogin={(val) => setLoggedIn(val)}
                                    />
                                }
                            />
                            <Route path="/signup" element={<SignUp />} />
                        </Routes>
                    </main>
                ) : (
                    <main></main>
                )}
            </Router>
        </>
    );
}

export default App;

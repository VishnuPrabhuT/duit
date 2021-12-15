import { useState } from "react";
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
    const [count, setCount] = useState(0);

    return (
        <>
            <Router>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/applications" element={<Applications />} />
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

export default App;

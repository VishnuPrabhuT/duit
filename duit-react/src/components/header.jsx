import "../sass/header.sass";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="left">Duit</div>
            <nav className="right">
                <Link to="/">
                    <span>Home</span>
                </Link>
                <Link to="/applications">
                    <span>Applications</span>
                </Link>
                <Link to="/profile">
                    <span>Profile</span>
                </Link>
                <Link to="/signup">
                    <span>Sign Up</span>
                </Link>
                <Link to="/login">
                    <span>Login</span>
                </Link>
            </nav>
        </div>
    );
}

export default Header;

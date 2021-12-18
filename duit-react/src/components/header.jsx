import "../sass/header.sass";
import { Link } from "react-router-dom";

function Header(props) {
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
                {/* <Link to="/profile">
                    <span>Profile</span>
                </Link> */}
                <Link to="/signup">
                    <span>Sign Up</span>
                </Link>
                {!props.loggedIn ? (
                    <Link to="/login">
                        <span>Login</span>
                    </Link>
                ) : (
                    <Link to="">
                        <span onClick={props.logout}>Logout</span>
                    </Link>
                )}
            </nav>
        </div>
    );
}

export default Header;

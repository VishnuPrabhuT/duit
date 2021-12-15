import Card from "../components/card";

import "../sass/signup.sass";

function SignUp() {
    return (
        <Card className="signup-container">
            <h1>Sign Up</h1>
            <label htmlFor="email">Email</label>
            <input type="email" />
            <label htmlFor="password">Password</label>
            <input type="password" />
        </Card>
    );
}

export default SignUp;

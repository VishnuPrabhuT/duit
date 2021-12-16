import Card from "../components/card";
import FormField from "../components/formfield";
import FormButton from "../components/formbutton";

import "../sass/login.sass";

function SignUp() {
    return (
        <Card className="login-container">
            <h1>Login</h1>
            <FormField name="email" label="Email" type="email" />
            <FormField name="password" label="Password" type="password" />
            <FormButton name="Login" />
        </Card>
    );
}

export default SignUp;

import React, { useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const handelSignIn = (event) => {
        event.preventDefault();

        // const form = event.target;
        /*
        we can take event.target as form and
        use it for getting email, password and resetting the fields.
        */
        const email = event.target.email.value;
        const password = event.target.password.value;

        signIn(email, password)
            .then((result) => {
                const signedInUser = result.user;
                console.log(signedInUser);
                // form.reset();  alternative way to reset form
                event.target.reset();
            })
            .catch((error) => console.log(error.message));
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Login</h2>
            <form onSubmit={handelSignIn}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <input type="submit" className="btn-submit" value="Login" />
                <p>
                    <small>New to Ema John?</small>
                    <Link to="/signup">Create new account</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;

import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const SignUp = () => {
    const [error, setError] = useState("");
    const { createUser } = useContext(AuthContext);

    // Handle submit
    const handleSignUp = (event) => {
        // prevent reloading
        event.preventDefault(); // use for stopping the reload or refresh the value after submit.
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirm = event.target.confirm.value;
        console.log(email, password, confirm);

        // check password follows rules
        setError('')
        if (password !== confirm) {
            setError("Password didn't match");
            return;
        } else if (password.length < 6) {
            setError("Password must be 6 character long");
            return;
        }

        // create user after checking password rules
        createUser(email, password)
            .then((result) => {
                // console.log(result);
                const loggedInUser = result.user;
                // console.log(loggedInUser);
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
            });
    };


    return (
        <div className="form-container">
            <h2 className="form-title">Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm password</label>
                    <input type="password" name="confirm" id="" required />
                </div>
                <input type="submit" className="btn-submit" value="Sign Up" />
            </form>
            <p>
                <small>Already have an account?</small>
                <Link to="/login">Login</Link>
            </p>
            <p className="text-error">{error}</p>
        </div>
    );
};

export default SignUp;

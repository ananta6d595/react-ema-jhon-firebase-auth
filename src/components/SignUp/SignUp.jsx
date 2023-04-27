import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {

    const handleSignUp = event => {

        event.preventDefault();             // use for stopping the reload or refresh the value after submit.
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirm = event.target.confirm.value;
        console.log(email, password, confirm);
    }

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
                <p>
                    <small>Already have an account?</small>
                    <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    );
};

export default SignUp;

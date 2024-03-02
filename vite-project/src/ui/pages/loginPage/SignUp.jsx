import React from "react";
import "./Signup.css"


export default function SignUp() {
    return (
        <form action="/signup" method=""  className="sign-up">
            <div className="main-content">
                <h2>Login</h2>
                <div className="customer-login">
                    <input type="text" name="" id=""  placeholder="Email" /><br />
                    <input type="password" placeholder="Password" /><br />
                   <label> <a href="#">Forgot Your Password?</a></label>
                    <div className="btn-sign">
                        <button>Sign In</button>
                    </div>
                </div>
            </div>
            <div className="main-content1">
                <h2>Register</h2>
                <div className="register">
                    <input type="text" name="" id="" placeholder="First Name"/><br />
                    <input type="text" name="" id="" placeholder="Last Name"/><br />
                    <input type="email" name="" id="" placeholder="Email"/><br />
                    <input type="password" name="" id="" placeholder="Password"/><br />
                    <input type="password" name="" id="" placeholder="Confirm Password"/>

               
                </div>
            </div>

        </form>



    )
}
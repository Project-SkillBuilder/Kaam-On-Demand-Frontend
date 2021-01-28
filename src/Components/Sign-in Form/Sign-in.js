import React from "react";
import $ from "jquery";
import kod from "./kod.png";
import "./Sign-in.css";
import "./kod.png";
import {
    Link
} from "react-router-dom";



function SignInUp() {
    return (
        <div>
            <div className="navbar">
                <nav className="navbar navbar-light bg-light">
                    <ul>
                        <li>
                            <button type="button" className="btn btn btn1 btn-primary m-3 rounded grow" data-toggle="modal" data-target="#signinup">
                            Sign-In/Sign-Up
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="modal fade" id="signinup" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="signinupLabel" aria-hidden="true">
                <div className="modal-dialog sign-in-box shadow-lg p-3 mb-5 rounded">
                    <div className="modal-content">

                        <table className="sgtable">
                            <tbody>
                                <div className="nav nav nav-tabs" id="nav-tabs" role="tablist">
                                    <a className="sign-in sgin nav-link active btn-lg" type="button" name="button"
                                       id="nav-signin-tabs" data-toggle="tab" href="#nav-signin"
                                       role="tab" aria-controls="nav-signin" aria-selected="true">
                                        Sign In
                                    </a>

                                    <a className="sign-up nav-link btn-lg" type="button" name="button"
                                       id="nav-signup-tabs" data-toggle="tab" href="#nav-signup"
                                       role="tab" aria-controls="nav-signup" aria-selected="false">
                                        Sign Up
                                    </a>
                                    <button type="button" className="close d-flex justify-end" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </tbody>
                        </table>

                        <div className="logo-block">
                            <img className="logo-img" src={kod} alt="logo"/>
                        </div>

                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-signin" role="tabpanel" aria-labelledby="nav-signin-tab">
                                <form className="sign-in-form">
                                    <div className="form-box">
                                        <input className="email shadow rounded ba b--light-gray" type="email"
                                               placeholder="Email or Phone Number" name="email"/><br/>
                                            <input className="password shadow rounded ba b--light-gray" type="password"
                                                   placeholder="Password" name="password" defaultValue=""/>
                                    </div>
                                </form>
                                <div className="forgot-pass">
                                    <em className="pointer em">Forgot Password?</em>
                                </div>
                                <div className="login-box">
                                    <Link to="/Home">
                                        <button onClick={$('#signinup').modal('hide')} className="login-btn shadow-lg  mb-5 rounded grow" type="submit"
                                                name="login">
                                                Login
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-signup" role="tabpanel" aria-labelledby="nav-signup-tab">
                                <div className="choice-box">
                                    <Link to="/RegistrationForm">
                                        <button onClick={$('#signinup').modal('hide')} className="create-btn btn shadow-lg  mb-5 rounded grow" type="submit"
                                                name="signup">Create an Account
                                        </button>
                                    </Link>
                                    <br/>
                                    <div className="hol">
                                        <span className="hol-innertext">or</span>
                                    </div>
                                    <Link to="/RegistrationForm">
                                        <button onClick={$('#signinup').modal('hide')} className="google btn grow">
                                            <i className="i fa fa-google fa-fw"/> Login with Google+
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default SignInUp;
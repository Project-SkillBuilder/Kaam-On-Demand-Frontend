import React from "react";
import "./Sign-in.css";
import "./kod.png";

function SignInUp() {
    return (
        <div>

            
            <button type="button" className="Sign_In_Form_btn btn btn1 btn-primary m-3 rounded grow" data-toggle="modal" data-target="#signinup">
                Sign-In/Sign-Up
            </button>
            
            <div className="Sign_In_Form_modal fade" id="Sign_In_Form_signinup" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="signinupLabel" aria-hidden="true">
                <div className="Sign_In_Form_modal-dialog sign-in-box shadow-lg p-3 mb-5 rounded">
                    <div className="Sign_In_Form_modal-content">

                        <table className="Sign_In_Form_sgtable">
                            <tbody>
                                <div className="Sign_In_Form_nav nav nav-tabs" id="nav-tabs" role="tablist">
                                    <a className="sign-in Sign_In_Form_sgin nav-link active btn-lg" type="button" name="button"
                                       id="Sign_In_Form_nav-signin-tabs" data-toggle="tab" href="#nav-signin"
                                       role="tab" aria-controls="nav-signin" aria-selected="true">
                                        Sign In
                                    </a>

                                    <a className="Sign_In_Form_sign-up nav-link btn-lg" type="button" name="button"
                                       id="Sign_In_Form_nav-signup-tabs" data-toggle="tab" href="#nav-signup"
                                       role="tab" aria-controls="nav-signup" aria-selected="false">
                                        Sign Up
                                    </a>
                                    <button type="button" className="Sign_In_Form_close d-flex justify-end" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </tbody>
                        </table>
                        <div className="Sign_In_Form_logo-block">
                            <img className="Sign_In_Form_logo-img" src={require('./kod.png')} alt="logo"/>
                        </div>

                        <div className="Sign_In_Form_tab-content" id="nav-tabContent">
                            <div className="Sign_In_Form_tab-pane fade show active" id="nav-signin" role="tabpanel" aria-labelledby="nav-signin-tab">
                                <form className="Sign_In_Form_sign-in-form">
                                    <div className="Sign_In_Form_form-box">
                                        <input className="Sign_In_Form_email shadow rounded ba b--light-gray" type="email"
                                               placeholder="Email or Phone Number" name="email"/><br/>
                                            <input className="Sign_In_Form_password shadow rounded ba b--light-gray" type="password"
                                                   placeholder="Password" name="password" defaultValue=""/>
                                    </div>
                                </form>
                                <div className="Sign_In_Form_forgot-pass">
                                    <em className="pointer Sign_In_Form_em">Forgot Password?</em>
                                </div>
                                <div className="Sign_In_Form_login-box">
                                    <button className="Sign_In_Form_login-btn shadow-lg  mb-5 rounded grow" type="submit"
                                            name="login">Login
                                    </button>
                                </div>
                            </div>
                            <div className="Sign_In_Form_tab-pane fade" id="Sign_In_Form_nav-signup" role="tabpanel" aria-labelledby="nav-signup-tab">
                                <div className="Sign_In_Form_choice-box">
                                    <button className="Sign_In_Form_create-btn btn shadow-lg  mb-5 rounded grow" type="submit"
                                            name="signup">Create an Account
                                    </button>
                                    <br/>
                                        <div className="Sign_In_Form_hol">
                                            <span className="Sign_In_Form_hol-innertext">or</span>
                                        </div>
                                        <button className="Sign_In_Form_googlebtn grow" type="submit" name="googlebtn">
                                            <a href="#" className="Sign_In_Form_google btn">
                                                <i className="Sign_In_Form_i fa fa-google fa-fw"/> Login with Google+</a>
                                        </button>
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
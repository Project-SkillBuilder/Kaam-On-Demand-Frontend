import React from "react";
import './Sign-Up selection.css';

const SignUp = () => {
    return (
        <div className="Sign_Up_Selection_sign-up-box shadow-lg p-3 mb-5 rounded">
            <table className="Sign_Up_Selection_sgtable">
                <tbody>
                    <tr>
                        <td className="Sign_Up_Selection_sgin">
                            <button className="Sign_Up_Selection_sign-in" type="button" name="button">Sign In</button>
                        </td>
                        <td className="Sign_Up_Selection_sgup">
                            <button className="Sign_Up_Selection_sign-up" type="button" name="button">Sign Up</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="Sign_Up_Selection_logo-block">
                <img className="Sign_Up_Selection_logo-img" src={require('./kod.png')} alt="logo"/>
            </div>
            <div className="Sign_Up_Selection_choice-box">
                <button className="Sign_Up_Selection_create-btn btn shadow-lg  mb-5 rounded" type="submit" name="signup">Create and Account
                    with Email.
                </button>
                <br/>
                    <button className="Sign_Up_Selection_google-btn btn shadow-lg  mb-5 rounded" type="submit" name="google-btn">Sign up with
                        Google
                    </button>
            </div>
        </div>
    );
}

export default SignUp;
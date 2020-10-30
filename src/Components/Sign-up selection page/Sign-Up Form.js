import React from "react";
import './Sign-Up selection.css';

const SignUp = () => {
    return (
        <div className="sign-up-box shadow-lg p-3 mb-5 rounded">
            <table className="sgtable">
                <tbody>
                    <tr>
                        <td className="sgin">
                            <button className="sign-in" type="button" name="button">Sign In</button>
                        </td>
                        <td className="sgup">
                            <button className="sign-up" type="button" name="button">Sign Up</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="logo-block">
                <img className="logo-img" src={require('./kod.png')} alt="logo"/>
            </div>
            <div className="choice-box">
                <button className="create-btn shadow-lg  mb-5 rounded" type="submit" name="signup">Create and Account
                    with Email.
                </button>
                <br/>
                    <button className="google-btn shadow-lg  mb-5 rounded" type="submit" name="google-btn">Sign up with
                        Google
                    </button>
            </div>
        </div>
    );
}

export default SignUp;
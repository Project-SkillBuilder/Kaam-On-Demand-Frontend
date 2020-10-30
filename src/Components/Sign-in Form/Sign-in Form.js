import React from "react";
import './Sign-in Form.css';

const SignIn = () => {
    return(

        <div className="sign-in-box shadow-lg p-3 mb-5 rounded">
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
            <form className="sign-in-form">
                <div className="form-box">
                    <input className="email shadow rounded ba b--light-gray" type="email"
                           placeholder="Email or Phone Number" name="email"/><br/>
                    <input className="password shadow rounded ba b--light-gray" type="password"
                           placeholder="Password" name="password"/>
                </div>
            </form>
            <div className="forgot-pass">
                <em className="pointer">Forgot Password?</em>
            </div>
            <div className="login-box">
                <button className="login-btn shadow-lg  mb-5 rounded" type="submit" name="login">Login</button>
            </div>
        </div>

    );
}
export default SignIn;
import React from "react";
import './Registration Form.css';
import kod from "./kod.png";
import {Link} from "react-router-dom";

class RegForm extends React.Component {
    render() {
        return (

            <div>
                <img className="Registration_Form_img" src={kod} alt="logo"/>
                <div className="Registration_Form_vertical-line"/>
                <div className="Registration_Form_form-box shadow-lg p-5 mb-5 rounded">
                    <h1 className="Registration_Form_sign-up">Sign-Up</h1>
                    <form>
                        <div className="Registration_Form_label-names">
                            <table className="Registration_Form ">
                                <tr>
                                    <td>
                                        <label htmlFor="fname">First name</label>
                                    </td>
                                    :
                                    <td>
                                        <input className=" fname shadow rounded ba b--light-gray" type="text"
                                               id="fname" name="fname"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="lname">Last name</label>
                                    </td>
                                    :
                                    <td>
                                        <input className=" lname shadow rounded ba b--light-gray" type="text"
                                               id="lname" name="lname"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="gender">Gender</label>
                                    </td>
                                    :
                                    <td>
                                        <select className="Registration_Form_select" name="Gender" id="gender"
                                                className="gender-select shadow rounded ba b--light-gray">
                                            <option value="none">--None--</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="others">Others</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="phone">Phone</label>
                                    </td>
                                    :
                                    <td>
                                        <input
                                        className=" phone shadow rounded ba b--light-gray"
                                        type="text" name="phone" id="phone"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="email">Email</label>
                                    </td>
                                    :
                                    <td>
                                        <input
                                        className=" email shadow rounded ba b--light-gray"
                                        type="email" name="email" id="email"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="city">City</label>
                                    </td>
                                    :
                                    <td>
                                        <input
                                        className=" cityname shadow rounded ba b--light-gray"
                                        type="text" name="city" id="city"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="state">State</label>
                                    </td>
                                    :
                                    <td>
                                        <input
                                        className=" Registration_Form_statename shadow rounded ba b--light-gray"
                                        type="text" name="state" id="state"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="password">Password</label>
                                    </td>
                                    :
                                    <td>
                                        <input
                                            className=" password shadow rounded ba b--light-gray"
                                            type="password" name="password" id="password"/>
                                        <p className="Registration_Form_pass-msg">Password should contain a
                                            lowercase and uppercase alphabet, a number and a special character.<br/>
                                            (For Example: @,#,!,*,etc.)
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="retype-password">Retype Password</label>
                                    </td>
                                    :
                                    <td>
                                        <input
                                        className=" retype-password shadow rounded ba b--light-gray"
                                        type="password" name="retype-password" id="retype-password"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="/Home">
                                            <button
                                                className="Registration_Form_signup-btn btn shadow-lg mb-20 bg-white grow"
                                                type="button" name="button">Sign Up
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </form>
                </div>
            </div>

        );

    }
}

export default RegForm;
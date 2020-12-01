import React from "react";
import './Registration Form.css';

class RegForm extends React.Component {
    render() {
        return (

            <div>
                <img className="Registration_Form_img" src={require('./kod.png')} alt="logo"/>
                <div className="Registration_Form_vertical-line">

                </div>
                <div className="Registration_Form_form-box shadow-lg p-5 mb-5 rounded">
                    <h1 className="Registration_Form_sign-up">Sign-Up</h1>
                    <form>
                        <label htmlFor="fname">First name:</label>
                        <input className="Registration_Form_input fname shadow rounded ba b--light-gray" type="text"
                               id="fname" name="fname"/>
                        <label htmlFor="lname">Last name:</label>
                        <input className="Registration_Form_input lname shadow rounded ba b--light-gray" type="text"
                               id="lname" name="lname"/><br/>
                        <div className="Registration_Form_label-names">
                            <table className="Registration_Form_input-items">
                                <tr>
                                    <td><label htmlFor="gender">Gender:</label></td>
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
                                    <td><label htmlFor="phone">Phone:</label></td>
                                    <td><input
                                        className="Registration_Form_input phone shadow rounded ba b--light-gray"
                                        type="text" name="phone" id="phone"/></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="email">Email:</label></td>
                                    <td><input
                                        className="Registration_Form_input email shadow rounded ba b--light-gray"
                                        type="email" name="email" id="email"/></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="city">City:</label></td>
                                    <td><input
                                        className="Registration_Form_input cityname shadow rounded ba b--light-gray"
                                        type="text" name="city" id="city"/></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="state">State:</label></td>
                                    <td><input
                                        className="Registration_Form_input Registration_Form_statename shadow rounded ba b--light-gray"
                                        type="text" name="state" id="state"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="password">Password:</label></td>
                                    <td>
                                        <input
                                            className="Registration_Form_input password shadow rounded ba b--light-gray"
                                            type="password" name="password" id="password"/>
                                        <div className="Registration_Form_pass-msg">Password should contain a
                                            lowercase and uppercase alphabet, a number and a special character.<br/>
                                            (For Example: @,#,!,*,etc.)
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="retype-password">Retype Password:</label></td>
                                    <td><input
                                        className="Registration_Form_input retype-password shadow rounded ba b--light-gray"
                                        type="password" name="retype-password" id="retype-password"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button
                                            className="Registration_Form_input signup-btn btn shadow-lg mb-20 bg-white grow"
                                            type="button" name="button">Sign Up
                                        </button>
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
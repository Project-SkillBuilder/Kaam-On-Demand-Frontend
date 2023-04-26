import React from "react";
import $ from "jquery";
import kod from "./kod.png";
import "./Sign-in.css";
import "./kod.png";
import { Link } from "react-router-dom";

class SignInUp extends React.Component {
  verifyUser = () =>
    fetch("http://localhost:8081/customer/customer-login", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        number: Number($("#number").val()),
        password: $("#password").val(),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("response body : ", res);
        return res;
      })
      .catch((err) => {
        console.log("error occured", err);
      });

  loginType = () => {
    const lType = document.getElementById("LoginType");
    let path = "/";
    if (lType) {
      console.log(lType.selectedOptions[0].value);
      path = lType.selectedOptions[0].value;
    }
    return path;
  };

  selectPath = () => {
    this.verifyUser().then((res) => {
      console.log("response : ", res);
      if (res) {
        $("#signinup").modal("hide");
        document.getElementById(this.loginType()).click();
      } else {
        alert("Wrong Credentials");
      }
    });
  };

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn btn1 btn-primary m-3 rounded grow"
          data-toggle="modal"
          data-target="#signinup"
        >
          Sign-In/Sign-Up
        </button>
        <div
          className="modal fade"
          id="signinup"
          data-backdrop="static"
          data-keyboard="false"
          tabIndex="-1"
          aria-labelledby="signinupLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog sign-in-box shadow-lg p-3 mb-5 rounded">
            <div className="modal-content">
              <table className="sgtable">
                <tbody>
                  <tr>
                    <td
                      className="nav nav nav-tabs"
                      id="nav-tabs"
                      role="tablist"
                    >
                      <a
                        className="sign-in sgin nav-link active btn-lg"
                        type="button"
                        name="button"
                        id="nav-signin-tabs"
                        data-toggle="tab"
                        href="#nav-signin"
                        role="tab"
                        aria-controls="nav-signin"
                        aria-selected="true"
                      >
                        Sign In
                      </a>

                      <a
                        className="sign-up nav-link btn-lg"
                        type="button"
                        name="button"
                        id="nav-signup-tabs"
                        data-toggle="tab"
                        href="#nav-signup"
                        role="tab"
                        aria-controls="nav-signup"
                        aria-selected="false"
                      >
                        Sign Up
                      </a>
                      <button
                        type="button"
                        className="close d-flex justify-end"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="logo-block">
                <img className="logo-img" src={kod} alt="logo" />
              </div>

              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-signin"
                  role="tabpanel"
                  aria-labelledby="nav-signin-tab"
                >
                  <div className="sign-in-form">
                    <div className="form-box">
                      <div className="loginType shadow flex flex-col justify-center items-center gap-2 rounded ba b--light-gray">
                        <div className="mr-2">Login as :</div>
                        <div>
                          <select id="LoginType">
                            <option id="Customer" value="/Home">
                              Customer
                            </option>
                            <option id="Worker" value="/WorkerHome">
                              Worker
                            </option>
                            <option id="Admin" value="/AdminHome">
                              Admin
                            </option>
                          </select>
                        </div>
                      </div>
                      <input
                        className="email shadow rounded ba b--light-gray mt-2"
                        type="text"
                        placeholder="Email or Phone Number"
                        name="number"
                        id="number"
                      />
                      <br />
                      <input
                        className="password shadow rounded ba b--light-gray"
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div className="forgot-pass">
                    <em className="pointer em">Forgot Password?</em>
                  </div>
                  <div className="login-box">
                    <Link id="/Home" to="/Home" />
                    <Link id="/WorkerHome" to="/WorkerHome" />
                    <button
                      onClick={this.selectPath}
                      className="login-btn shadow-lg  mb-5 rounded grow"
                      type="submit"
                      name="login"
                    >
                      Login
                    </button>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-signup"
                  role="tabpanel"
                  aria-labelledby="nav-signup-tab"
                >
                  <div className="choice-box">
                    <Link to="/RegistrationForm">
                      <button
                        onClick={$("#signinup").modal("hide")}
                        className="create-btn btn shadow-lg  mb-5 rounded grow"
                        type="submit"
                        name="signup"
                      >
                        Create an Account
                      </button>
                    </Link>
                    <br />
                    <Link to="/RegistrationForm">
                      <button
                        onClick={$("#signinup").modal("hide")}
                        className="google btn grow"
                      >
                        <i className="i fa fa-google fa-fw" /> Login with
                        Google+
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
}

export default SignInUp;

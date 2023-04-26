import React from "react";
import "./AdminNav.css";
import kod from "./kod.png";
import AdminPage from "../../Views/Admin Page/Admin Page";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const AdminNav = (props) => {
    return (
            <div className="Navigation_Bar_body Navigation_Bar_*">
                <nav className="navbar navbar-expand-sm navbar-light position-sticky z-9999 top-0">
                    <a className="Navigation_Bar_a navbar-brand" href="#"><img className="logo" src={kod} alt="logo"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-end" id="navbarNavDropdown">
                        <ul className="navbar-nav nav_links">
                            <li className="nav-item active">
                                <Link to="/Home">
                                    <a className="Navigation_Bar_a nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/">
                                    <a className="Navigation_Bar_a nav-link" href="#">Sign-Out</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div>
                    <Switch>
                        <Route path="/Home">
                          <AdminPage />
                        </Route>
                    </Switch>
                </div>
            </div>
    );
}

export default AdminNav;
import React from "react";
import "./Navigation Bar.css";
import kod from "./kod.png";
import CustomerProfile from "../../Views/Customer Profile/Customer Profile";
import CatPage from "../../Views/Category Page/Category Page";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import LandingPage from "../../Views/Landing Page/Landing Page";
import Workerlist from "../../Views/Worker List/main";
import Workerinfo from "../../Views/Worker Info/Worker Info";


const NavBar = () => {
    return (
            <div className="Navigation_Bar_body Navigation_Bar_*">
                <nav className="navbar navbar-expand-sm navbar-light">
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
                                <Link to="/Home/CustomerProfile">
                                    <a className="Navigation_Bar_a nav-link" href="#">My Profile</a>
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
                <Switch>
                    <Route path="/Home/WorkerList/WorkerInfo">
                        <Workerinfo/>
                    </Route>
                    <Route path="/Home/WorkerList">
                        <Workerlist/>
                    </Route>
                    <Route path="/Home/CustomerProfile">
                        <CustomerProfile/>
                    </Route>
                    <Route path="/Home">
                        <CatPage/>
                    </Route>
                </Switch>
            </div>
    );
}

export default NavBar;
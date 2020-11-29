import React from "react";
import "./Navigation Bar.css";
import kod from "./kod.png";

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
                            <a className="Navigation_Bar_a nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="Navigation_Bar_a nav-link" href="#">My Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="Navigation_Bar_a nav-link" href="#">Sign-Out</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
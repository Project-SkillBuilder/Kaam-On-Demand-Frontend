import React from "react";
import "./Search Bar.css";

const SearchBar = () => {
    return (
        <div id="tfheader">
            <input type="search" className="tftextinput" size="21" maxLength="120" placeholder="Search workers..."/>
            <button className="tfbutton">Search</button>
        </div>
    );
}

export default SearchBar;
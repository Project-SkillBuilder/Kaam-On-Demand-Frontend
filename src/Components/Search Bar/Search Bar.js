import React from "react";
import "./Search Bar.css";

const SearchBar = () => {
    return (
        <div id="Search_Bar_tfheader">
            <input type="search" className="Search_Bar_tftextinput" size="40" maxLength="120" placeholder="Search workers..."/>
            <button className="Search_Bar_tfbutton">Search</button>
        </div>
    );
}

export default SearchBar;
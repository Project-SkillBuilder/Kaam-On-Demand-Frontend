import React from "react";
import "./Search Bar.css";

const SearchBar = () => {
    return (
        <div className="Search_Bar">
            <input type="search" className="Search_Bar_textinput" size="20" maxLength="120" placeholder="Search workers..."/>
            <button className="Search_Bar_button">Search</button>
        </div>
    );
}

export default SearchBar;
import React from "react";
import './Category Page.css';
import CCard from "../Category Card/Category Card";
import kod from './kod.png';
import NavBar from "../Navigation Bar/Navigation Bar";
import SearchBar from "../Search Bar/Search Bar";

const CatPage = () => {
    return (
                <div className="Category_Page_main">
                    <NavBar/>
                    <SearchBar/>

                    <div className="Category_Page_container">
                        <CCard/>
                        <CCard/>
                        <CCard/>
                        <CCard/>
                        <CCard/>
                        <CCard/>
                        <CCard/>
                        <CCard/>
                        <CCard/>
                        <CCard/>
                        <CCard/>
                        <CCard/>
                        <CCard/>
                        <CCard/>
                        <CCard/>
                    </div>
                </div>
    );
}
export default CatPage;

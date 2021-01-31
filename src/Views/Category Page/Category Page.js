import React from "react";
import './Category Page.css';
import CCard from "../../Components/Category Card/Category Card";
import SearchBar from "../../Components/Search Bar/Search Bar";
import kod from "./logo.jpg";

const CatPage = () => {
    return (
                <div className="main-body">
                    <img id="bg" src={kod} alt="background" />
                    <div className="Category_Page_main container">
                        <div className="Category_Page_Sbar text-center">
                            <SearchBar/>
                        </div>
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
                </div>

    );
}
export default CatPage;

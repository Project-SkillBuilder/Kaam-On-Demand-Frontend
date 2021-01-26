import React from "react";
import './Category Page.css';
import CCard from "../../Components/Category Card/Category Card";
import SearchBar from "../../Components/Search Bar/Search Bar";

const CatPage = () => {
    return (
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
    );
}
export default CatPage;

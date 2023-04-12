import React, { useState } from "react";
import "./Category Page.css";
import CCard from "../../Components/Category Card/Category Card";
import SearchBar from "../../Components/Search Bar/Search Bar";
import kod from "./logo.jpg";
import { baseURL, getCategories } from "../../util/api";

let CategoryCard = [];

const CatPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const getCategoriesApi = async () => {
    const res = await fetch(baseURL + getCategories);
    const body = await res.json();
    CategoryCard = body.data;
    setIsLoaded(true);
  };
  getCategoriesApi();
  return (
    <div className="main-body">
      <img id="bg" src={kod} alt="background" />
      <div className="Category_Page_main container">
        <div className="Category_Page_Sbar text-center">
          <SearchBar />
        </div>
        <div className="Category_Page_container">
          {isLoaded ? (
            <div>
              {CategoryCard.map((item) => {
                return (
                  <CCard
                    title={item.category}
                    image={item.image}
                    key={item.id}
                  />
                );
              })}
            </div>
          ) : (
            <div>
              <h2>No data Found</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default CatPage;

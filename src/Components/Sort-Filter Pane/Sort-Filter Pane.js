import React from "react";
import "./Sort-Filter Pane.css";

const SFpane = () => {
    return(
            <div className="Sort_pane shadow-3">
                <div className="Sort_div">
                    <t>Sort By :</t>
                    <br/>
                        <input type="radio" id="location" name="sort" value="location"/>
                            <label htmlFor="location">Location</label><br/>
                            <input type="radio" id="ratings" name="sort" value="ratings"/>
                                <label htmlFor="ratings">Ratings</label><br/>
                </div>
                <div className="Sort_div">
                    <t>stbsbgf</t>
                    <br/>
                        <input type="checkbox" id="location" name="filter1" value="location"/>
                            <label htmlFor="location">Location</label><br/>
                            <input type="checkbox" id="ratings" name="filter1" value="ratings"/>
                                <label htmlFor="ratings">Ratings</label><br/>
                </div>
                <div className="Sort_div">
                    <t>stbsbgf</t>
                    <br/>
                        <input type="checkbox" id="location" name="filter2" value="location"/>
                            <label htmlFor="location">Location</label><br/>
                            <input type="checkbox" id="ratings" name="filter2" value="ratings"/>
                                <label htmlFor="ratings">Ratings</label><br/>
                </div>
                <div className="Sort_div">
                    <t>stbsbgf</t>
                    <br/>
                        <input type="checkbox" id="location" name="filter3" value="location"/>
                            <label htmlFor="location">Location</label><br/>
                            <input type="checkbox" id="ratings" name="filter3" value="ratings"/>
                                <label htmlFor="ratings">Ratings</label><br/>
                </div>
            </div>
    );
}
export default SFpane;
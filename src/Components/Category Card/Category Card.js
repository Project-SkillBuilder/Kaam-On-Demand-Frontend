import React from "react";
import "./Category Card.css";

const CCard = () => {
    return (
        <div className='card Category_Card_card tc dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img className="br3 dib Category_Card_img" src="https://robohash.org/123" alt='robot'/>
            <div>
                <h2 className="Category_Card_h2">Lorem Ipsum</h2>
            </div>
        </div>
    );
}

export default CCard;
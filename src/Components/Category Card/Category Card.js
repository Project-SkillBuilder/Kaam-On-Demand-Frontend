import React from "react";
import "./Category Card.css";
import { Link, useParams } from "react-router-dom";

const CCard = (props) => {
  return (
    <Link
      to={`/Home/WorkerList/${props.title}`}
      className="card Category_Card_card tc dib br3 pa3 ma2 grow bw2 shadow-5"
    >
      <img
        className="br3 dib Category_Card_img"
        src={props?.image ? props?.image : "https://robohash.org/123"}
        alt="robot"
      />
      <div>
        <h5 className="Category_Card_h2">{props.title}</h5>
      </div>
    </Link>
  );
};

export default CCard;

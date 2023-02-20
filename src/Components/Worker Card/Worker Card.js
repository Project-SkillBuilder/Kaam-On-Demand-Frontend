import React from "react";
import {Link} from "react-router-dom";
import "./Worker Card.css";


const WorkerCard = () => {
    return (
        <Link to="/Home/WorkerList/WorkerInfo" className="row WCard_cards border ma3 grow shadow-4">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <div className="col-3 Winfo">
                <img className="WCard_img" src="https://robohash.org/123" alt='robot'/>
            </div>
            <div className="col-5 Winfo">
                <p>Name : Lorem Ipsum</p>
                <br/>
                <p>Ratings :
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                </p>
                <br/>
                <p>Successful Visits: 47</p>

            </div>
            <div className="col-4 Winfo">
                <p>Services :
                    <ul>
                        <li className="WCard_li">1</li>
                        <li className="WCard_li">2</li>
                        <li className="WCard_li">3</li>
                        <li className="WCard_li">4</li>
                    </ul>
                </p>
                
            </div>
        </Link>
    );
}

export default WorkerCard;
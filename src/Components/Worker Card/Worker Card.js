import React from "react";


const WorkerCard = () => {
    return (
        <div className="row col-9 WCard_cards border ma3 grow shadow-4">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <div className="col-3">
                <img className="WCard_img" src="https://robohash.org/123" alt='robot'/>
            </div>
            <div className="col-5">
                <p>Name : Lorem Ipsum</p>

                <p>Ratings :
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                </p>

                <p>Successful Visits: 47</p>

            </div>
            <div className="col-4">
                <p>Services :
                    <ul>
                        <li className="WCard_li">1</li>
                        <li className="WCard_li">2</li>
                        <li className="WCard_li">3</li>
                        <li className="WCard_li">4</li>
                    </ul>
                </p>
                <button className="btn-info ma3">Request Service</button>
            </div>
        </div>
    );
}

export default WorkerCard;
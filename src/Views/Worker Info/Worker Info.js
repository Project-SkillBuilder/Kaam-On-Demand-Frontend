import React, { useEffect, useState } from "react";
import "./Worker Info.css";
import NavBar from "../../Components/Navigation Bar/Navigation Bar";
import { baseURL, getWorkerProfile } from "../../util/api";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

let WorkerInfo = [];

const Workerinfo = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { number } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    review: "",
    rating: "",
  });

  const onInputChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };

  const onReviewChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, review: e.target.value };
    });
  };

  const onRadioChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, rating: e.target.id };
    });
  };

  const addReview = async () => {
    const response = await fetch(
      "http://localhost:8080/worker/addReview/" + WorkerInfo.number,
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
  };

  const getWorkerInfo = async () => {
    const res = await fetch(baseURL + getWorkerProfile + number);
    const body = await res.json();
    WorkerInfo = body.data;
    setIsLoaded(true);
  };

  useEffect(() => {
    getWorkerInfo();
  }, []);

  return (
    <div className="bg-white Winfo_main">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      {isLoaded ? (
        <div className="pa3 container-fluid">
          <div className="row">
            <div className="col-4 image">
              <img src="https://robohash.org/12" alt="" />
            </div>
            <div className="col-7 description">
              <div className="d-flex justify-content-between">
                <h1 className="">
                  {WorkerInfo.fname + " " + WorkerInfo.lname}
                </h1>
              </div>
              <p>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
              </p>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h4>Services</h4>
                    </td>
                    <td className="d">
                      <h4>-&nbsp;{WorkerInfo.services}</h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Working Hours</h4>
                    </td>
                    <td className="d">
                      <h4>-&nbsp;9:00 a.m. to 7:00 p.m.</h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Working Days</h4>
                    </td>
                    <td className="d">
                      <h4>-&nbsp; {WorkerInfo.workingDays}</h4>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h4>Description of service - </h4>
              <h4>{WorkerInfo.about}</h4>
              <div className="d-flex justify-end">
                <button className="btn btnreq btn-primary text-lg-center">
                  Request service
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div className="row pa3">
            <h2 className="col-12 rating">Ratings And Reviews</h2>
            <div className="col-12 comment">
              {WorkerInfo.reviews.map((item) => {
                return (
                  <div className="row comment-box">
                    <h4 className="">{item.title}</h4>
                    <p>
                      <span
                        className={`fa fa-star ${
                          item.rating >= 1 ? "checked" : ""
                        }`}
                      ></span>
                      <span
                        className={`fa fa-star ${
                          item.rating >= 2 ? "checked" : ""
                        }`}
                      ></span>
                      <span
                        className={`fa fa-star ${
                          item.rating >= 3 ? "checked" : ""
                        }`}
                      ></span>
                      <span
                        className={`fa fa-star ${
                          item.rating >= 4 ? "checked" : ""
                        }`}
                      ></span>
                      <span
                        className={`fa fa-star ${
                          item.rating >= 5 ? "checked" : ""
                        }`}
                      ></span>
                    </p>
                    <p>{item.review}</p>
                  </div>
                );
              })}
            </div>
            <div className="col-8 add-review">
              <table>
                <thead>
                  <h3 className="row">Add a Review</h3>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <label htmlFor="title">Title :&emsp;&nbsp;</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        id="title"
                        size="20"
                        placeholder="Title"
                        onChange={onInputChange}
                      />
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="review">Review :</label>
                    </td>
                    <td>
                      <textarea
                        className="review"
                        id="review"
                        rows="6"
                        cols="10"
                        placeholder="Write a review"
                        onChange={onReviewChange}
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="ratings">Service</label>
                    </td>
                    <td>
                      <p className="row">
                        <input
                          type="radio"
                          id="1"
                          name="ratings"
                          onClick={(e) => onRadioChange(e)}
                        />
                        <label htmlFor="1">very bad</label>&nbsp;
                        <input
                          type="radio"
                          id="2"
                          name="ratings"
                          onClick={(e) => onRadioChange(e)}
                        />
                        <label htmlFor="2">bad</label>&nbsp;
                        <input
                          type="radio"
                          id="3"
                          name="ratings"
                          onClick={(e) => onRadioChange(e)}
                        />
                        <label htmlFor="3">good</label>&nbsp;
                        <input
                          type="radio"
                          id="4"
                          name="ratings"
                          onClick={(e) => onRadioChange(e)}
                        />
                        <label htmlFor="4">very good</label>&nbsp;
                        <input
                          type="radio"
                          id="5"
                          name="ratings"
                          onClick={(e) => onRadioChange(e)}
                        />
                        <label htmlFor="5">excellent</label>
                      </p>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <button className="btn btn-info row" onClick={addReview}>
                    Add review
                  </button>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Workerinfo;

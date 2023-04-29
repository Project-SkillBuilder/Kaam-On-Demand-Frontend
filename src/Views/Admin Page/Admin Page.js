import React from "react";
import kod from "./logo.jpg";
import logo from "./kod.png";
import "./Admin Page.css";
import { workersList, customerList } from "../../util/constants";
import WorkerCard from "../../Components/Worker Card/Worker Card.js";
import AdminNav from "./AdminNav";
import { baseURL, getCustomerProfile } from "../../util/api";
import { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";

let CustomerInfo = [];

const AdminPage = () => {
    const { number } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  
  const getCustomerInfo = async () => {
    const res = await fetch(baseURL + getCustomerProfile + number);
    const body = await res.json();
    CustomerInfo = body.data;
    setIsLoaded(true);
  };

  return (
    <div>
      <div className="main-body">
        <img id="logo" src={kod} alt="logo" />

      </div>
      <div style={{ padding: 0 }}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div className="row Cprofile_height">
          <div className="col-3 Cprofile_Pane bg-light">
            <div
              className="nav flex-column nav-tabs"
              id="v-tabs-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                className="Cprofile_a nav-link active"
                id="v-tabs-profile-tab"
                data-toggle="tab"
                href="#v-tabs-profile"
                role="tab"
                aria-controls="v-tabs-profile"
                aria-selected="true"
              >
                Customers
              </a>
              <a
                className="Cprofile_a nav-link"
                id="v-tabs-active-tab"
                data-toggle="tab"
                href="#v-tabs-active"
                role="tab"
                aria-controls="v-tabs-messages"
                aria-selected="false"
              >
                Workers
              </a>
            </div>
          </div>
          <div className="col-9">
            <div className="tab-content" id="v-tabs-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-tabs-profile"
                role="tabpanel"
                aria-labelledby="v-tabs-profile-tab"
              >
                <div className="row col-9">
                  <h1 className="Cprofile_h1">List Of Customers</h1>&nbsp;
                  <button className="Cprofile_button">edit</button>
                </div>
                {customerList.map((customer) => {
                        return (
                <div style={{marginBottom:"25px"}}>
                    
                            <table>
                    <tbody className="Cprofile">
                      <tr>
                        <td>
                          <label htmlFor="fname">Customer Info</label>
                        </td>
                        <td>
                          <p className="Cprofile_fname " id="fname">
                            :&nbsp;{customer.fname}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="lname">Last name</label>
                        </td>
                        <td>
                          <p className="Cprofile_lname" id="lname">
                            :&nbsp;{customer.lname}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="gender">Gender</label>
                        </td>
                        <td>
                          <p id="gender" className="Cprofile_gender">
                            :&nbsp;{customer.gender}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="phone">Phone</label>
                        </td>
                        <td>
                          <p className="Cprofile_phone" id="phone">
                            :&nbsp;{customer.number}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="email">Email</label>
                        </td>
                        <td>
                          <p className="Cprofile_email" id="email">
                            :&nbsp;{customer.email}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="city">City</label>
                        </td>
                        <td>
                          <p className="Cprofile_cityname" id="city">
                            :&nbsp;{customer.city}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="state">State</label>
                        </td>
                        <td>
                          <p className="Cprofile_statename" id="state">
                            :&nbsp;{customer.state}
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                        <hr/>
                  
                </div>
                )
                    })}
              </div>
              <div
                className="tab-pane fade"
                id="v-tabs-active"
                role="tabpanel"
                aria-labelledby="v-tabs-active-tab"
              >
                <h1 className="Cprofile_h1">List Of Workers</h1>
                <hr />
                {workersList.map((worker) => {
                    return (
                <div className="row col-9 Cprofile_cards border ma3 grow shadow-4">
                  <div className="col-3">
                    <img src="https://robohash.org/123" alt="robot" />
                  </div>
                  <div className="col-5">
                    <p>Name : {worker.fname + " " + worker.lname}</p>

                    <p>
                      Ratings :<span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                    </p>

                    <p>Successful Visits: 47</p>
                  </div>
                  <div className="col-4">
                    <p>
                      Services :
                      <ul>
                        <li>{worker.category}</li>
                      </ul>
                    </p>
                  </div>
                </div>
                )})}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default AdminPage;
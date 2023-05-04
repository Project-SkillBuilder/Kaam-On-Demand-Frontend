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
import { Button, Space } from "antd";

let CustomerInfo = [];

const AdminPage = () => {
  const { number } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [customers, setCustomers] = useState(customerList);
  const [workers, setWorkers] = useState(workersList);
  const getCustomerInfo = async () => {
    const res = await fetch(baseURL + getCustomerProfile + number);
    const body = await res.json();
    CustomerInfo = body.data;
    setIsLoaded(true);
  };
  const onDelete = (id) => {
    const newCustomers = customers.filter((customer) => customer.id !== id);
    setCustomers(newCustomers);
  };
  const onWorkersDelete = (id) => {
    const newWorkers = workers.filter((worker) => worker.id !== id);
    setWorkers(newWorkers);
  };
  console.log(customers);
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
                </div>
                {customers.map((customer) => {
                  return (
                    <div style={{ marginBottom: "25px" }} key={customer.id}>
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
                            <td>
                              <Button
                                type="primary"
                                danger
                                onClick={() => onDelete(customer.id)}
                              >
                                Delete
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <hr />
                    </div>
                  );
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
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    // gap: "30px",
                  }}
                >
                  {workers.map((worker) => {
                    return (
                      <div
                        className="row col-9 border ma3 grow shadow-4"
                        style={{
                          padding: "20px",
                          borderRadius: "4px",
                          width: "500px",
                          height: "fitContent",
                        }}
                        key={worker.id}
                      >
                        <div className="col-3">
                          <img src="https://robohash.org/123" alt="robot" style={{height:"150px"}}/>
                        </div>
                        <div className="col-5">
                          <p><b>Name : </b><br/> {worker.fname + " " + worker.lname}</p>

                          <p>
                            <b>Ratings : </b><br/>{" "}
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                          </p>

                          <p><b>Successful Visits : </b>47</p>
                        </div>
                        <div className="col-4">
                          <p>
                            <b>Services : </b>
                            <ul>
                              <li>{worker.category}</li>
                            </ul>
                          </p>
                          <Button
                            type="primary"
                            danger
                            onClick={() => onWorkersDelete(worker.id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

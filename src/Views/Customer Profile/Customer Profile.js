import React from "react";
import fontawesome from "@fortawesome/fontawesome-free";
import "./Customer Profile.css";
import NavBar from "../../Components/Navigation Bar/Navigation Bar";

class CustomerProfile extends React.Component {
    render() {
        return (
            <div style={{padding: 0}}>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <div className="row Cprofile_height">
                    <div className="col-3 Cprofile_Pane bg-light">
                        <div className="nav flex-column nav-tabs" id="v-tabs-tab" role="tablist"
                             aria-orientation="vertical">
                            <a className="Cprofile_a nav-link active" id="v-tabs-profile-tab" data-toggle="tab"
                               href="#v-tabs-profile" role="tab" aria-controls="v-tabs-profile"
                               aria-selected="true">Profile</a>
                            <a className="Cprofile_a nav-link" id="v-tabs-active-tab" data-toggle="tab" href="#v-tabs-active"
                               role="tab" aria-controls="v-tabs-messages" aria-selected="false">Active</a>
                            <a className="Cprofile_a nav-link" id="v-tabs-history-tab" data-toggle="tab" href="#v-tabs-history"
                               role="tab" aria-controls="v-tabs-settings" aria-selected="false">Histroy</a>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="tab-content" id="v-tabs-tabContent">
                            <div className="tab-pane fade show active" id="v-tabs-profile" role="tabpanel"
                                 aria-labelledby="v-tabs-profile-tab">
                                <div className="row col-9">
                                    <h1 className="Cprofile_h1">Personal Information</h1>&nbsp;
                                    <button className="Cprofile_button">edit</button>
                                </div>
                                <div>
                                    <table>
                                        <tbody className="Cprofile">
                                            <tr>
                                                <td>
                                                    <label htmlFor="fname">First name</label>
                                                </td>
                                                <td>
                                                    <p className="Cprofile_fname " id="fname">
                                                        :&nbsp;Lorem
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label htmlFor="lname">Last name</label>
                                                </td>
                                                <td>
                                                    <p className="Cprofile_lname" id="lname">
                                                        :&nbsp;Ipsum
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><label htmlFor="gender">Gender</label></td>
                                                <td>
                                                    <p id="gender" className="Cprofile_gender">
                                                        :&nbsp;Male
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><label htmlFor="phone">Phone</label></td>
                                                <td>
                                                    <p className="Cprofile_phone" id="phone">
                                                        :&nbsp;9845762458
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><label htmlFor="email">Email</label></td>
                                                <td>
                                                    <p className="Cprofile_email" id="email">
                                                        :&nbsp;aserg@gmail.com
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><label htmlFor="city">City</label></td>
                                                <td>
                                                    <p className="Cprofile_cityname" id="city">
                                                        :&nbsp;Lucknow
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><label htmlFor="state">State</label></td>
                                                <td>
                                                    <p className="Cprofile_statename" id="state">
                                                        :&nbsp;Uttar Pradesh
                                                    </p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                                <div>
                                    <h1 className="Cprofile_h1">Security</h1>
                                    <table>
                                        <tbody className="Cprofile">
                                            <tr>
                                                <td><label htmlFor="password">Password</label></td>
                                                <td>
                                                    <p className="Cprofile_password" id="password">
                                                        :&nbsp;**********
                                                    </p>
                                                </td>
                                                <td>
                                                    <button className="Cprofile_button">change</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            <div className="tab-pane fade" id="v-tabs-active" role="tabpanel"
                                 aria-labelledby="v-tabs-active-tab">
                                <h1 className="Cprofile_h1">Currently Employed Workers</h1>
                                <hr/>
                                12/03/2020
                                <hr/>
                                <div className="row col-9 Cprofile_cards border ma3 grow shadow-4">
                                    <div className="col-3">
                                        <img src="https://robohash.org/123" alt='robot'/>
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
                                                <li>1</li>
                                                <li>2</li>
                                                <li>3</li>
                                                <li>4</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                                <div className="row col-9 Cprofile_cards border ma3 grow shadow-4">
                                    <div className="col-3">
                                        <img src="https://robohash.org/123" alt='robot'/>
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
                                                <li>1</li>
                                                <li>2</li>
                                                <li>3</li>
                                                <li>4</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                                <hr/>
                                23/02/2020
                                <hr/>
                                <div className="row col-9 Cprofile_cards border ma3 grow shadow-4">
                                    <div className="col-3">
                                        <img src="https://robohash.org/123" alt='robot'/>
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
                                                <li>1</li>
                                                <li>2</li>
                                                <li>3</li>
                                                <li>4</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                                <div className="row col-9 Cprofile_cards border ma3 grow shadow-4">
                                    <div className="col-3">
                                        <img src="https://robohash.org/123" alt='robot'/>
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
                                                <li>1</li>
                                                <li>2</li>
                                                <li>3</li>
                                                <li>4</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-tabs-history" role="tabpanel"
                                 aria-labelledby="v-tabs-history-tab">
                                <h1 className="Cprofile_h1">Previously Employed Workers</h1>
                                <hr/>
                                12/03/2020
                                <hr/>
                                <div className="row col-9 Cprofile_cards border ma3 grow shadow-4">
                                    <div className="col-3">
                                        <img src="https://robohash.org/123" alt='robot'/>
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
                                                <li>1</li>
                                                <li>2</li>
                                                <li>3</li>
                                                <li>4</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                                <div className="row col-9 Cprofile_cards border ma3 grow shadow-4">
                                    <div className="col-3">
                                        <img src="https://robohash.org/123" alt='robot'/>
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
                                                <li>1</li>
                                                <li>2</li>
                                                <li>3</li>
                                                <li>4</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                                <hr/>
                                23/02/2020
                                <hr/>
                                <div className="row col-9 Cprofile_cards border ma3 grow shadow-4">
                                    <div className="col-3">
                                        <img src="https://robohash.org/123" alt='robot'/>
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
                                                <li>1</li>
                                                <li>2</li>
                                                <li>3</li>
                                                <li>4</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                                <div className="row col-9 Cprofile_cards border ma3 grow shadow-4">
                                    <div className="col-3">
                                        <img src="https://robohash.org/123" alt='robot'/>
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
                                                <li>1</li>
                                                <li>2</li>
                                                <li>3</li>
                                                <li>4</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomerProfile;
import React from "react";
import './style.css';
import logo from "./logo.jpg";
function WProfile() {
    return(
        <div className="container">
            <div className="profile-header">
                <div className="profile-img">
                    <img src={logo} width="200" alt=""/>
                </div>
                <div className="profile-nav-info">
                    <h3 className="user-name">KOD</h3>
                    <div className="address">
                        <p className="state">Uttar Pradesh, </p>
                        <span className="country">India.</span>
                    </div>
                </div>
                <div className="profile-option">
                    <div className="notification">
                        <i className="fa fa-bell"></i>
                        <span className="alert-message">1</span>
                    </div>
                </div>
            </div>
            <div className="main-bd">
                <div className="left-side">
                    <div className="profile-side">
                        <p className="mobile-no"><i className="fa fa-phone"></i>+91xxxxxxxxxx</p>
                        <p className="user-mail"><i className="fa fa-envelope"></i>xxx@gmail.com</p>
                        <div className="user-bio">
                            <h3>Bio</h3>
                            <p className="bio">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                                atque dolor quidem, ullam, voluptate molestias! Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="profile-btn">
                            <button className="mkcbtn">
                                <i className="fa fa-comment"></i> mkc
                            </button>
                            <button className="editbtn">
                                <i className="fa fa-plus"></i>Edit
                            </button>
                        </div>
                        <div className="user-rating">
                            <h3 className="rating">4.5</h3>
                            <div className="rate">
                                <div className="stars">

                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <span className="no-user"><span>123</span>&nbsp;&nbsp; reviews</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="right-side">
                    <div className="nav">
                        <ul>
                            <li onClick="tabs(0)" className="user-post active">Posts</li>
                            <li onClick="tabs(1)" className="user-review">Reviews</li>
                            <li onClick="tabs(2)" className="user-setting">Settings</li>
                        </ul>
                    </div>
                    <div className="profile-body">
                        <div className="profile-posts tab">
                            <h1>Posts</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores iure quae sint magni
                                cupiditate non, quod velit similique ducimus! Impedit dicta, sit officiis rerum.
                                Adipisci ut facere atque nostrum odit dolorum ea cumque modi. Asperiores dolorum, iure
                                odit ad, tempore magnam beatae deleniti soluta quisquam assumenda pariatur incidunt
                                sapiente eaque modi earum. Ab ducimus accusamus recusandae, odio iusto commodi fuga,
                                repellat inventore iure aut libero consequatur sequi nesciunt dolorem ipsam.</p>
                        </div>
                        <div className="profile-reviews tab">
                            <h1>User Reviews</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus id cupiditate libero
                                eius dolore, in rem nulla reiciendis. Qui, vero voluptatum! Quia iusto accusamus
                                corporis, illo, ullam quibusdam maiores assumenda explicabo illum eligendi odit fugiat
                                a, laborum rerum architecto eum ut distinctio. Error quos temporibus at expedita? Optio
                                amet aliquam provident voluptatum minima quidem nemo harum doloremque. Est nihil
                                quisquam quis deserunt repellat, natus, saepe laborum. Ipsum officiis, nisi optio.</p>

                        </div>
                        <div className="profile-settings tab">
                            <h1>Account Setting</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, eligendi magnam. Fuga
                                ducimus assumenda, nemo sit, quod eveniet quidem dolorum modi voluptas dignissimos
                                tempore omnis saepe officiis aliquam. Tempore sed voluptatum, illo sit vitae ullam
                                consequatur, architecto enim iusto asperiores cupiditate debitis blanditiis harum quas
                                ad dolor dolores veritatis molestiae! Aperiam, laboriosam! Temporibus modi vero ab quis,
                                qui fuga reiciendis, hic, molestias vel ut recusandae eius nesciunt harum praesentium?
                                Libero.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
    export default WProfile;

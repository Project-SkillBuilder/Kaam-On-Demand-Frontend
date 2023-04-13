import React from "react";
import "./style.css";
import logo from "./logo.jpg";

function WProfile() {
  return (
    <div className="container">
      <div className="profile-header">
        <div className="profile-img">
          <img src={logo} width="200" alt="" />
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
            <p className="mobile-no">
              <i className="fa fa-phone"></i>+91{}
            </p>
            <p className="user-mail">
              <i className="fa fa-envelope"></i>xxx@gmail.com
            </p>
            <div className="user-bio">
              <h3>Bio</h3>
              <p className="bio">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit atque dolor quidem, ullam, voluptate molestias!
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="profile-btn">
              {/*<button className="mkcbtn">*/}
              {/*    <i className="fa fa-comment"></i> mkc*/}
              {/*</button>*/}
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
                <span className="no-user">
                  <span>123</span>&nbsp;&nbsp; reviews
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side">
          <ul className="nav mb-3" id="tabs-tab" role="tablist">
            <li className="nav-item user-post" role="presentation">
              <a
                className="nav-link active"
                id="tabs-home-tab"
                data-toggle="tab"
                href="#tabs-home"
                role="tab"
                aria-controls="tabs-home"
                aria-selected="true"
              >
                Home
              </a>
            </li>
            <li className="nav-item user-review" role="presentation">
              <a
                className="nav-link"
                id="tabs-profile-tab"
                data-toggle="tab"
                href="#tabs-profile"
                role="tab"
                aria-controls="tabs-profile"
                aria-selected="false"
              >
                Profile
              </a>
            </li>
            <li className="nav-item user-setting" role="presentation">
              <a
                className="nav-link"
                id="tabs-contact-tab"
                data-toggle="tab"
                href="#tabs-contact"
                role="tab"
                aria-controls="tabs-contact"
                aria-selected="false"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="tab-content profile-body" id="tabs-tabContent">
            <div
              className="profile-posts tab-pane fade show active"
              id="tabs-home"
              role="tabpanel"
              aria-labelledby="tabs-home-tab"
            >
              <h1>Posts</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores iure quae sint magni cupiditate non, quod velit
                similique ducimus! Impedit dicta, sit officiis rerum. Adipisci
                ut facere atque nostrum odit dolorum ea cumque modi. Asperiores
                dolorum, iure odit ad, tempore magnam beatae deleniti soluta
                quisquam assumenda pariatur incidunt sapiente eaque modi earum.
                Ab ducimus accusamus recusandae, odio iusto commodi fuga,
                repellat inventore iure aut libero consequatur sequi nesciunt
                dolorem ipsam.
              </p>
            </div>
            <div
              className="profile-reviews tab-pane fade"
              id="tabs-profile"
              role="tabpanel"
              aria-labelledby="tabs-profile-tab"
            >
              <h1>Reviews</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores iure quae sint magni cupiditate non, quod velit
                similique ducimus! Impedit dicta, sit officiis rerum. Adipisci
                ut facere atque nostrum odit dolorum ea cumque modi. Asperiores
                dolorum, iure odit ad, tempore magnam beatae deleniti soluta
                quisquam assumenda pariatur incidunt sapiente eaque modi earum.
                Ab ducimus accusamus recusandae, odio iusto commodi fuga,
                repellat inventore iure aut libero consequatur sequi nesciunt
                dolorem ipsam.
              </p>
            </div>
            <div
              className="profile-settings tab-pane fade"
              id="tabs-contact"
              role="tabpanel"
              aria-labelledby="tabs-contact-tab"
            >
              <h1>Settings</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores iure quae sint magni cupiditate non, quod velit
                similique ducimus! Impedit dicta, sit officiis rerum. Adipisci
                ut facere atque nostrum odit dolorum ea cumque modi. Asperiores
                dolorum, iure odit ad, tempore magnam beatae deleniti soluta
                quisquam assumenda pariatur incidunt sapiente eaque modi earum.
                Ab ducimus accusamus recusandae, odio iusto commodi fuga,
                repellat inventore iure aut libero consequatur sequi nesciunt
                dolorem ipsam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WProfile;

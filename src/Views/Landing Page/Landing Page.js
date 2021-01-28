import React from "react";
import mainkod from "./logo.jpg";
import kod from "./kod.png";
import "./stylesheet.css";
import SignInUp from "../../Components/Sign-in Form/Sign-in";

class LandingPage extends React.Component{
  render() {

    const myFunction =() => {
      const x = document.getElementById("bottom-content");
      if (x.style.display == "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }

    return (
        <div>
          <div className="main body">
            <img id="logo" src={kod} alt="logo"/>
            <img id="main-img" src={mainkod} alt="background-image"/>
            <SignInUp/>
            <a href="#linking-content">
              <button className="knowmore-btn btn-primary" onClick={myFunction}>Know More</button>
            </a>
          </div>
          <a id="linking-content">
            <div className="bottom" id="bottom-content">
              <div className="bottom-background">
                  <div className="bottom-card card row col-11 border ma5 shadow-8">
                  <div className="d-flex flexbox-main flex-lg-column justify-content-start">
                    <div className="d-flex flexbox flex-lg-row align-items-lg-center">
                        <div className="card row col-6 border ma5 grow shadow-4">
                            <div className="image col-4">
                              <img src="https://robohash.org/123" alt='robot'/>
                            </div>
                            <div className="contentbox">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit neque sit amet erat sagittis
                              sagittis. Morbi mattis erat quam, id pretium nulla mollis quis. Ut feugiat condimentum quam, accumsan
                              convallis diam aliquet nec. Vestibulum non erat orci. Morbi vitae arcu congue, fermentum enim nec,
                              scelerisque turpis. Curabitur at quam dapibus, molestie sapien nec, tempus justo. Duis vel facilisis velit.
                              Ut sodales velit enim, a congue ex volutpat et.
                            </div>
                        </div>
                    </div>
                      <div className="d-flex flexbox flex-lg-row justify-content-end">
                        <div className="card row col-6 border ma5 grow shadow-4">
                            <div className="image col-4">
                              <img src="https://robohash.org/123" alt='robot'/>
                            </div>
                            <div className="contentbox">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit neque sit amet erat sagittis
                              sagittis. Morbi mattis erat quam, id pretium nulla mollis quis. Ut feugiat condimentum quam, accumsan
                              convallis diam aliquet nec. Vestibulum non erat orci. Morbi vitae arcu congue, fermentum enim nec,
                              scelerisque turpis. Curabitur at quam dapibus, molestie sapien nec, tempus justo. Duis vel facilisis velit.
                              Ut sodales velit enim, a congue ex volutpat et.
                            </div>
                        </div>
                      </div>

                      <div className="d-flex flexbox flex-lg-row align-items-lg-center">
                        <div className="card row col-6 border ma5 grow shadow-4">
                              <div className="image col-4">
                                  <img src="https://robohash.org/123" alt='robot'/>
                              </div>
                              <div className="contentbox">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit neque sit amet erat sagittis
                                  sagittis. Morbi mattis erat quam, id pretium nulla mollis quis. Ut feugiat condimentum quam, accumsan
                                  convallis diam aliquet nec. Vestibulum non erat orci. Morbi vitae arcu congue, fermentum enim nec,
                                  scelerisque turpis. Curabitur at quam dapibus, molestie sapien nec, tempus justo. Duis vel facilisis velit.
                                  Ut sodales velit enim, a congue ex volutpat et.
                              </div>
                        </div>
                      </div>
                      <div className="d-flex flexbox flex-lg-row justify-content-end">
                        <div className="card row col-6 border ma5 grow shadow-4">
                              <div className="image col-4">
                                  <img src="https://robohash.org/123" alt='robot'/>
                              </div>
                              <div className="contentbox">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit neque sit amet erat sagittis
                                  sagittis. Morbi mattis erat quam, id pretium nulla mollis quis. Ut feugiat condimentum quam, accumsan
                                  convallis diam aliquet nec. Vestibulum non erat orci. Morbi vitae arcu congue, fermentum enim nec,
                                  scelerisque turpis. Curabitur at quam dapibus, molestie sapien nec, tempus justo. Duis vel facilisis velit.
                                  Ut sodales velit enim, a congue ex volutpat et.
                              </div>
                        </div>
                      </div>

                      <div className="d-flex flexbox flex-lg-row align-items-lg-center">
                        <div className="card row col-6 border ma5 grow shadow-4">
                              <div className="image col-4">
                                  <img src="https://robohash.org/123" alt='robot'/>
                              </div>
                              <div className="contentbox">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit neque sit amet erat sagittis
                                  sagittis. Morbi mattis erat quam, id pretium nulla mollis quis. Ut feugiat condimentum quam, accumsan
                                  convallis diam aliquet nec. Vestibulum non erat orci. Morbi vitae arcu congue, fermentum enim nec,
                                  scelerisque turpis. Curabitur at quam dapibus, molestie sapien nec, tempus justo. Duis vel facilisis velit.
                                  Ut sodales velit enim, a congue ex volutpat et.
                              </div>
                        </div>
                      </div>
                  </div>
              </div>
              </div>
            </div>
          </a>
        </div>
    );
  }
}

export default LandingPage;



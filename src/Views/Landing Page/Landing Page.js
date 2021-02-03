import React from "react";
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
              <div className="banner1">

                      <div className="text-box1 text-box11">
                          <h1>
                              <mark>Kaam On Demand</mark>
                          </h1>
                          <span></span>
                      </div>
              </div>

              <div className="banner2">

                      <div className="text-box1 text-box2">
                          <h1>
                              <mark>Kaam On Demand</mark>
                          </h1>
                          <span></span>
                      </div>
              </div>

              <div className="banner3">

                      <div className="text-box1 text-box3">
                          <h1>
                              <mark>Kaam On Demand</mark>
                          </h1>
                          <span></span>
                      </div>
              </div>

              <div className="banner4">
                      <div className="text-box1 text-box4">
                          <h1>
                              <mark>Kaam On Demand</mark>
                          </h1>
                          <span></span>
                      </div>
              </div>
              <div className="sgbtn">
                <SignInUp/>
              </div>
              <div className="btn-know">
                  <a href="#linking-content">
                  <button className="knowmore-btn btn-primary" onClick={myFunction}>Know More</button>
                  </a>
              </div>
          </div>
          <a id="linking-content">
            <div className="bottom" id="bottom-content">
              <div className="d-flex flexbox-main flex-lg-column justify-content-start">
                <div className="d-flex flexbox flex-lg-row align-items-lg-center">
                    <div className="card row col-5 border ma5 grow shadow-4">
                        <div className="image col-4">
                          <img src="https://robohash.org/123" alt='robot'/>
                        </div>
                        <div className="contentbox">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit neque sit amet erat sagittis
                                sagittis. Morbi mattis erat quam, id pretium nulla mollis quis. Ut feugiat condimentum quam, accumsan
                                convallis diam aliquet nec. Vestibulum non erat orci. Morbi vitae arcu congue, fermentum enim nec,
                                scelerisque turpis. Curabitur at quam dapibus, molestie sapien nec, tempus justo. Duis vel facilisis velit.
                                Ut sodales velit enim, a congue ex volutpat et.
                            </p>
                        </div>
                    </div>
                </div>
                  <div className="d-flex flexbox flex-lg-row justify-content-end">
                    <div className="card row col-5 border ma5 grow shadow-4">
                        <div className="image col-4">
                          <img src="https://robohash.org/123" alt='robot'/>
                        </div>
                        <div className="contentbox">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit neque sit amet erat sagittis
                                sagittis. Morbi mattis erat quam, id pretium nulla mollis quis. Ut feugiat condimentum quam, accumsan
                                convallis diam aliquet nec. Vestibulum non erat orci. Morbi vitae arcu congue, fermentum enim nec,
                                scelerisque turpis. Curabitur at quam dapibus, molestie sapien nec, tempus justo. Duis vel facilisis velit.
                                Ut sodales velit enim, a congue ex volutpat et.
                            </p>
                        </div>
                    </div>
                  </div>

                  <div className="d-flex flexbox flex-lg-row align-items-lg-center">
                    <div className="card row col-5 border ma5 grow shadow-4">
                          <div className="image col-4">
                              <img src="https://robohash.org/123" alt='robot'/>
                          </div>
                          <div className="contentbox">
                              <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit neque sit amet erat sagittis
                                  sagittis. Morbi mattis erat quam, id pretium nulla mollis quis. Ut feugiat condimentum quam, accumsan
                                  convallis diam aliquet nec. Vestibulum non erat orci. Morbi vitae arcu congue, fermentum enim nec,
                                  scelerisque turpis. Curabitur at quam dapibus, molestie sapien nec, tempus justo. Duis vel facilisis velit.
                                  Ut sodales velit enim, a congue ex volutpat et.
                              </p>
                          </div>
                    </div>
                  </div>
                  <div className="d-flex flexbox flex-lg-row justify-content-end">
                    <div className="card row col-5 border ma5 grow shadow-4">
                          <div className="image col-4">
                              <img src="https://robohash.org/123" alt='robot'/>
                          </div>
                          <div className="contentbox">
                              <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit neque sit amet erat sagittis
                                  sagittis. Morbi mattis erat quam, id pretium nulla mollis quis. Ut feugiat condimentum quam, accumsan
                                  convallis diam aliquet nec. Vestibulum non erat orci. Morbi vitae arcu congue, fermentum enim nec,
                                  scelerisque turpis. Curabitur at quam dapibus, molestie sapien nec, tempus justo. Duis vel facilisis velit.
                                  Ut sodales velit enim, a congue ex volutpat et.
                              </p>
                          </div>
                    </div>
                  </div>

                  <div className="d-flex flexbox flex-lg-row align-items-lg-center">
                    <div className="card row col-5 border ma5 grow shadow-4">
                          <div className="image col-4">
                              <img src="https://robohash.org/123" alt='robot'/>
                          </div>
                          <div className="contentbox">
                              <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit neque sit amet erat sagittis
                                  sagittis. Morbi mattis erat quam, id pretium nulla mollis quis. Ut feugiat condimentum quam, accumsan
                                  convallis diam aliquet nec. Vestibulum non erat orci. Morbi vitae arcu congue, fermentum enim nec,
                                  scelerisque turpis. Curabitur at quam dapibus, molestie sapien nec, tempus justo. Duis vel facilisis velit.
                                  Ut sodales velit enim, a congue ex volutpat et.
                              </p>
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

import React from "react";
import logo from "./logo.jpg";
import kod from "./kod.png";
import "./stylesheet.css";
import SignInUp from "../Sign-in Form/Sign-in";

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
          <div className="main">
            <img src={logo} alt="Kaam On Demand"/>
            <img id="logo" src={kod} alt="logo"/>
            <SignInUp/>
            <a href="#linking-content">
              <button className="btn2 btn-primary" onClick={myFunction}>Know More</button>
            </a>
          </div>
          <a id="linking-content">
            <div className="bottom" id="bottom-content">
              <SignInUp/>
              <div className="card row col-9 border ma5 grow shadow-4">
                <div className="image col-3">
                  <img src="https://robohash.org/123" alt='robot'/>
                </div>
                <div className="contentbox">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit neque sit amet erat sagittis
                  sagittis. Morbi mattis erat quam, id pretium nulla mollis quis. Ut feugiat condimentum quam, accumsan
                  convallis diam aliquet nec. Vestibulum non erat orci. Morbi vitae arcu congue, fermentum enim nec,
                  scelerisque turpis. Curabitur at quam dapibus, molestie sapien nec, tempus justo. Duis vel facilisis velit.
                  Ut sodales velit enim, a congue ex volutpat et. Duis non tortor ac orci mattis maximus at ut neque. Aenean
                  et augue ac ex congue vulputate. Sed ut elit ac enim cursus dignissim. Sed ornare, eros sit amet porta
                  venenatis, leo justo viverra leo, laoreet posuere libero nulla sed augue. Quisque at posuere risus, id
                  dignissim justo. Nam ullamcorper risus accumsan ex eleifend, ut varius justo pellentesque. Maecenas
                  vehicula, nisl eu lacinia semper, turpis dolor gravida augue, eget ultricies nunc eros et odio. Vivamus sit
                  amet ante ut nisl efficitur accumsan.
                </div>
              </div>
              <div className="card row col-9 border ma5 grow shadow-4">
                <div className="image col-3">
                  <img src="https://robohash.org/123" alt='robot'/>
                </div>
                <div className="contentbox">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit neque sit amet erat sagittis
                  sagittis. Morbi mattis erat quam, id pretium nulla mollis quis. Ut feugiat condimentum quam, accumsan
                  convallis diam aliquet nec. Vestibulum non erat orci. Morbi vitae arcu congue, fermentum enim nec,
                  scelerisque turpis. Curabitur at quam dapibus, molestie sapien nec, tempus justo. Duis vel facilisis velit.
                  Ut sodales velit enim, a congue ex volutpat et. Duis non tortor ac orci mattis maximus at ut neque. Aenean
                  et augue ac ex congue vulputate. Sed ut elit ac enim cursus dignissim. Sed ornare, eros sit amet porta
                  venenatis, leo justo viverra leo, laoreet posuere libero nulla sed augue. Quisque at posuere risus, id
                  dignissim justo. Nam ullamcorper risus accumsan ex eleifend, ut varius justo pellentesque. Maecenas
                  vehicula, nisl eu lacinia semper, turpis dolor gravida augue, eget ultricies nunc eros et odio. Vivamus sit
                  amet ante ut nisl efficitur accumsan.
                </div>
              </div>
            </div>
          </a>
        </div>
    );
  }
}

export default LandingPage;



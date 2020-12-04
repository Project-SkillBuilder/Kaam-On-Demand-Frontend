import React from 'react';
import SignInUp from "./Components/Sign-in Form/Sign-in";
import './App.css';
import NavBar from "./Components/Navigation Bar/Navigation Bar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import CustomerProfile from "./Views/Customer Profile/Customer Profile";
import LandingPage from "./Views/Landing Page/Landing Page";
import CatPage from "./Views/Category Page/Category Page";
import RegForm from "./Components/Sign-up Form/Registration Form";


class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Link to="/LandingPage"/>
                </div>
                <Switch>
                    <Route path="/LandingPage">
                        <LandingPage/>
                    </Route>
                    <Route path="/Home">
                        <NavBar/>
                    </Route>
                    <Route path="/RegistrationForm">
                        <RegForm/>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;

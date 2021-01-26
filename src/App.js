import React from 'react';
import './App.css';
import NavBar from "./Components/Navigation Bar/Navigation Bar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import LandingPage from "./Views/Landing Page/Landing Page";
import RegForm from "./Components/Sign-up Form/Registration Form";
import WProfile from "./Views/worker profile/main";


class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Link to="/LandingPage"/>
                </div>
                <Switch>
                    <Route path="/RegistrationForm">
                        <RegForm/>
                    </Route>
                    <Route path="/WorkerHome">
                        <WProfile/>
                    </Route>
                    <Route path="/Home">
                        <NavBar/>
                    </Route>
                    <Route path="/">
                        <LandingPage/>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;

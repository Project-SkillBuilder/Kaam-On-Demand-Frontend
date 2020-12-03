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
import RegForm from "./Components/Sign-up Form/Registration Form";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <RegForm/>
                </div>
            </Router>
        );
    }
}

export default App;

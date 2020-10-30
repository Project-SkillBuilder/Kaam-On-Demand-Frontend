import React from 'react';
import SignInUp from "./Components/Sign-in Form/Sign-in";
import './App.css';


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <div className="signup"><SignInUp/></div>
                </div>
            </div>
        );
    }
}

export default App;

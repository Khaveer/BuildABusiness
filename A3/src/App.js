import React from "react";
import "./App.css";

import LandingPage from "./Pages/LandingPage/Landing";
import Instructions from "./Pages/Instructions/Instructions";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                {/* <HeaderThing name={"james"} author={"Khaveer"} /> */}
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/Instructions" component={Instructions} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

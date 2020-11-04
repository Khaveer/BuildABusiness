import React from "react";
import "./App.css";

import LandingPage from "./Pages/LandingPage/Landing";
import Instructions from "./Pages/Instructions";
import GameScreen from "./Pages/Form/GameScreen";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "semantic-ui-react";

function App() {
    return (
        <Router>
            <div className="App">
                {/* <HeaderThing name={"james"} author={"Khaveer"} /> */}
                <Switch>
                    <Route path="/" exact>
                        <LandingPage />
                    </Route>
                    <Route path="/Instructions">
                        <Instructions />
                    </Route>
                    <Route path="/Step1">
                        <GameScreen />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

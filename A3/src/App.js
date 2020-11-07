import React from "react";
import "./App.css";

import LandingPage from "./Pages/LandingPage/Landing";
import Instructions from "./Pages/Instructions";
import GameScreen from "./Pages/Form/GameScreen";
import Results from "./Pages/Results/Results";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "semantic-ui-react";

import { UserProvider } from "./Pages/components/UserContext";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact>
                        <LandingPage />
                    </Route>
                    <Route path="/Instructions">
                        <Instructions />
                    </Route>
                    <UserProvider>
                        <Route path="/Game">
                            <GameScreen />
                        </Route>
                        <Route path="/Results">
                            <Results />
                        </Route>
                    </UserProvider>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

import React from "react";
import "./App.css";

import LandingPage from "./Pages/LandingPage/Landing";
import Instructions from "./Pages/Instructions";
// import GameScreen from "./Pages/Form/GameScreen";
import Step1 from "./Pages/Form/Steps/Step1";
import Step2 from "./Pages/Form/Steps/Step2";
import Step3 from "./Pages/Form/Steps/Step3";
import Step4 from "./Pages/Form/Steps/Step4";

import Results from "./Pages/Results/Results";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { UserProvider } from "./Pages/components/UserContext";
import GameScreen from "./Pages/Form/GameScreen";

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

                        {/* <Route path="/step1">
                            <Step1 />
                        </Route>
                        <Route path="/step2">
                            <Step2 />
                        </Route>
                        <Route path="/step3">
                            <Step3 />
                        </Route>
                        <Route path="/step4">
                            <Step4 />
                        </Route>
                        <Route path="/Results">
                            <Results />
                        </Route> */}
                    </UserProvider>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

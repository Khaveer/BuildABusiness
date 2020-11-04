import React, { useState, useContext } from "react";
import styled from "styled-components";

import FormHeader from "./Header";
import Step1 from "./Step1";

import { UserContext } from "./StepContext";

const GameScreen = () => {
    //const [steps, setStep] = useContext(StepContext);
    const [user, setUser] = useContext(UserContext);
    console.log(user);
    return (
        <div>
            <FormHeader />
            {user.steps.step1 === "current" && <Step1 />}
        </div>
    );
};

export default GameScreen;

import React, { useState, useContext } from "react";
import styled from "styled-components";

import FormHeader from "../components/Header";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Footer from "./Footer";

import { UserContext } from "../components/UserContext";

const GameScreen = () => {
    const [user, setUser] = useContext(UserContext);
    console.log(user);
    return (
        <div>
            {/* <FormHeader /> */}
            {user.current === 1 && <Step1 />}
            {user.current === 2 && <Step2 />}
            {user.current === 3 && <Step3 />}
            {user.current === 4 && <Step4 />}

            {/* <Footer /> */}
        </div>
    );
};

export default GameScreen;

// {user.step.current === 4 ? : 0 <Step4 />}

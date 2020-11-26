import React, { useContext } from "react";

import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";

import { UserContext } from "../components/UserContext";
import styled from "styled-components";

const ScreenWrapper = styled.div`
    min-height: 100vh;
`;

const GameScreen = () => {
    const [user] = useContext(UserContext);

    return (
        <ScreenWrapper>
            {user.current === 1 && <Step1 />}
            {user.current === 2 && <Step2 />}
            {user.current === 3 && <Step3 />}
            {user.current === 4 && <Step4 />}
        </ScreenWrapper>
    );
};

export default GameScreen;

import React from "react";

import styled from "styled-components";

import GameInfo from "./components/GameInfo";

const GameWrapper = styled.div``;

const InfoWrapper = styled.div`
    width: 15%;
    display: inline-block;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 2em;
    text-align: left;
`;

const FormWrapper = styled.div`
    width: 75%;
    background-color: blue;
    display: inline-block;
`;

const Step4 = () => {
    return (
        <GameWrapper>
            <InfoWrapper>
                <GameInfo />
            </InfoWrapper>
            <FormWrapper>Step 4</FormWrapper>
        </GameWrapper>
    );
};

export default Step4;

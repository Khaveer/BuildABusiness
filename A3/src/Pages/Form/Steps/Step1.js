import React from "react";

import styled from "styled-components";

import GameInfo from "./components/GameInfo";

import europeNA from "../../../Assets/FromAssests/Step1/EuropeandNorthAmerica.png";
import latinAmerica from "../../../Assets/FromAssests/Step1/LatinAmerica.png";
import eastEurope from "../../../Assets/FromAssests/Step1/EastEurope.png";
import midEast from "../../../Assets/FromAssests/Step1/MidEastandNorthAfrica.png";
import asia from "../../../Assets/FromAssests/Step1/Asia.png";
import pacfic from "../../../Assets/FromAssests/Step1/Pacific.png";
import africa from "../../../Assets/FromAssests/Step1/Sub-SaharanAfrica.png";

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
    width: 70%;
    background-color: blue;
    display: inline-block;
`;

const Step1 = () => {
    return (
        <GameWrapper>
            <InfoWrapper>
                <GameInfo />
            </InfoWrapper>
            <FormWrapper>header</FormWrapper>
        </GameWrapper>
    );
};

export default Step1;

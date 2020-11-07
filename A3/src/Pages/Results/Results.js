import React, { useContext } from "react";
import styled from "styled-components";

import HeaderButtons from "../components/HeaderButtons";
import ResultsCard from "./components/ResultsCard";
import ResultsButtons from "./components/ResultsButtons";

import { UserContext } from "../components/UserContext";

import Dystopia from "../../Assets/Dystopia.png";
import Utopia from "../../Assets/Utopia.png";

const ResultWrapper = styled.div`
    padding: 4em;
    padding-top: 2em;
    width: 40%;
`;

const ResultsButtonWrapper = styled.div`
    position: absolute;
    bottom: 0.5em;
    margin: auto;
    width: 100%;
`;

const Results = () => {
    const [user, setUser] = useContext(UserContext);

    var BackgroundImage = Dystopia;

    if (user.step.resultState === 3) {
        BackgroundImage = Utopia;
    }

    return (
        <div>
            <HeaderButtons />
            <div
                style={{
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "93.5vh",
                }}
            >
                <ResultWrapper>
                    <ResultsCard />
                </ResultWrapper>
                <ResultsButtonWrapper>
                    <ResultsButtons />
                </ResultsButtonWrapper>
            </div>
        </div>
    );
};

export default Results;

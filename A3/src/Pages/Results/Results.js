import React, { useContext } from "react";
import styled from "styled-components";
import { Grid } from "semantic-ui-react";

import HeaderButtons from "../components/HeaderButtons";
import ResultsCard from "./components/ResultsCard";
import ResultsButtons from "./components/ResultsButtons";

import { UserContext } from "../components/UserContext";

import Dystopia from "../../Assets/Dystopia.png";
import Utopia from "../../Assets/Utopia.png";

import { Link } from "react-router-dom";

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

const ResultSpacer = styled.div`
    min-height: 10%;
`;

const Results = () => {
    const [user] = useContext(UserContext);

    var BackgroundImage = Dystopia;

    let State = user.resultState1 + user.resultState2 + user.resultState3;

    if (State >= 8) {
        BackgroundImage = Utopia;
    }

    return (
        <div>
            <HeaderButtons resultsInfo={false} />
            <div
                style={{
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "95vh",
                }}
            >
                <ResultWrapper>
                    <ResultsCard />
                </ResultWrapper>
                <ResultsButtonWrapper>
                    <Link to="/ResultsInfo">
                        <ResultsButtons />
                    </Link>
                </ResultsButtonWrapper>
            </div>
        </div>
    );
};

export default Results;

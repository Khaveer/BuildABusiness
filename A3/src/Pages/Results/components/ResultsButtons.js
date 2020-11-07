import React from "react";
import styled from "styled-components";

import { Button, Image } from "semantic-ui-react";

import downArrow from "../../../Assets/Results/DownArrow.svg";

const ImageWraper = styled.div`
    margin: auto;
    padding-top: 1em;
    padding-bottom: 1em;
`;

const ResultsButtons = () => {
    return (
        <>
            <div>
                <Button content="View your results" primary />
            </div>
            <ImageWraper>
                <Image src={downArrow} centered />
            </ImageWraper>
        </>
    );
};

export default ResultsButtons;

import React, { useContext, useState } from "react";
import { UserContext } from "../../components/UserContext";

import { Segment, Grid, Image } from "semantic-ui-react";

import styled from "styled-components";

//import graphs
import ResultsGraph1 from "../../../Assets/Results/Resources/BlueGraph.jpg";

const InfoHeader = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    margin-top: 0px;
    font-size: 2em;
    text-align: left;
`;

const InfoText = styled.p`
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 1em;
    line-height: 2em;
    word-wrap: break-word;
    text-align: left;
`;

const HeaderInfoText = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 1em;
    margin-top: 0px;
    text-align: left;
`;

const StrongText = styled.b`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 1em;
    line-height: 2em;
    word-wrap: break-word;
    text-align: left;
`;

const SegmentWrapper = styled.div`
    padding: 1em;
`;

const MarketingCard = () => {
    const [user, setUser] = useContext(UserContext);

    const displayValue = Math.floor(Math.random() * (8 - 1) + 1);

    return (
        <Grid>
            <Grid.Column computer={4}>
                <Image src={ResultsGraph1} size="medium" />
            </Grid.Column>
            <Grid.Column computer={12}>
                <InfoHeader>Marketing</InfoHeader>
            </Grid.Column>
        </Grid>
    );
};

export default MarketingCard;

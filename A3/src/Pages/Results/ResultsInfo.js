import React, { useContext, useState } from "react";
import { UserContext } from "../components/UserContext";

import { Segment, Grid, Image } from "semantic-ui-react";

import styled from "styled-components";

import ResourceCard from "./components/Resources";
import OperationsCard from "./components/Operations";
import LogisticsCard from "./components/Logistics";
import MarketingCard from "./components/Marketing";

const SegmentWrapper = styled.div`
    padding: 1em;
`;

const ResultsInfo = () => {
    const [user, setUser] = useContext(UserContext);

    return (
        <Grid>
            <Grid.Column computer={16}>
                <SegmentWrapper>
                    <Segment>
                        <ResourceCard />
                    </Segment>
                </SegmentWrapper>
            </Grid.Column>
            <Grid.Column computer={16}>
                <SegmentWrapper>
                    <Segment>
                        <OperationsCard />
                    </Segment>
                </SegmentWrapper>
            </Grid.Column>
            <Grid.Column computer={16}>
                <SegmentWrapper>
                    <Segment>
                        <LogisticsCard />
                    </Segment>
                </SegmentWrapper>
            </Grid.Column>
            <Grid.Column computer={16}>
                <SegmentWrapper>
                    <Segment>
                        <MarketingCard />
                    </Segment>
                </SegmentWrapper>
            </Grid.Column>
        </Grid>
    );
};

export default ResultsInfo;

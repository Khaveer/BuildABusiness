import React from "react";

import { Segment, Grid } from "semantic-ui-react";

import styled from "styled-components";

import HeaderButtons from "../components/HeaderButtons";
import ResourceCard from "./components/Resources";
import OperationsCard from "./components/Operations";
import LogisticsCard from "./components/Logistics";
import MarketingCard from "./components/Marketing";
import GreenwashingCard from "./components/Greenwashing";

const SegmentWrapper = styled.div`
    padding: 1em;
`;

const ResultsInfo = () => {
    return (
        <>
            <HeaderButtons resultsInfo={true} />
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
                <Grid.Column computer={16}>
                    <SegmentWrapper>
                        <Segment>
                            <GreenwashingCard />
                        </Segment>
                    </SegmentWrapper>
                </Grid.Column>
            </Grid>
        </>
    );
};

export default ResultsInfo;

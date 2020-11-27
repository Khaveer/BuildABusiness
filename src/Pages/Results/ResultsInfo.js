import React, { useContext } from "react";

import { Segment, Grid } from "semantic-ui-react";

import styled from "styled-components";

import { UserContext } from "../components/UserContext";

import HeaderButtons from "./components/ResultsHeader";
import ResourceCard from "./components/Resources";
import OperationsCard from "./components/Operations";
import LogisticsCard from "./components/Logistics";
import MarketingCard from "./components/Marketing";
import GreenwashingCard from "./components/Greenwashing";
import TryAgain from "./components/TryAgain";

const SegmentWrapper = styled.div`
    //padding: 1em;
    width: 90%;
    margin: auto;
`;

const TryAgainWrapper = styled.div`
    width: 70%;
    margin: auto;
`;

const Background = styled.div``;

const ResultsInfo = () => {
    const [user] = useContext(UserContext);

    let State = user.resultState1 + user.resultState2 + user.resultState3;
    return (
        <>
            <HeaderButtons resultsInfo={true} />
            {State >= 8 ? (
                <Background style={{ backgroundColor: "#90b194" }}>
                    <Grid centered>
                        <Grid.Column computer={12} mobile={15}>
                            <SegmentWrapper>
                                <Segment>
                                    <ResourceCard />
                                </Segment>
                            </SegmentWrapper>
                        </Grid.Column>
                        <Grid.Column computer={12} mobile={15}>
                            <SegmentWrapper>
                                <Segment>
                                    <OperationsCard />
                                </Segment>
                            </SegmentWrapper>
                        </Grid.Column>
                        <Grid.Column computer={12} mobile={15}>
                            <SegmentWrapper>
                                <Segment>
                                    <LogisticsCard />
                                </Segment>
                            </SegmentWrapper>
                        </Grid.Column>
                        <Grid.Column computer={12} mobile={15}>
                            <SegmentWrapper>
                                <Segment>
                                    <MarketingCard />
                                </Segment>
                            </SegmentWrapper>
                        </Grid.Column>
                        <Grid.Column computer={12} mobile={15}>
                            <SegmentWrapper>
                                <Segment>
                                    <GreenwashingCard />
                                </Segment>
                            </SegmentWrapper>
                        </Grid.Column>
                        <Grid.Column computer={12} mobile={15}>
                            <TryAgainWrapper>
                                <Segment>
                                    <TryAgain />
                                </Segment>
                            </TryAgainWrapper>
                        </Grid.Column>
                    </Grid>
                </Background>
            ) : (
                <Background style={{ backgroundColor: "#f8916e" }}>
                    <Grid centered>
                        <Grid.Column computer={12} mobile={15}>
                            <SegmentWrapper>
                                <Segment>
                                    <ResourceCard />
                                </Segment>
                            </SegmentWrapper>
                        </Grid.Column>
                        <Grid.Column computer={12} mobile={15}>
                            <SegmentWrapper>
                                <Segment>
                                    <OperationsCard />
                                </Segment>
                            </SegmentWrapper>
                        </Grid.Column>
                        <Grid.Column computer={12} mobile={15}>
                            <SegmentWrapper>
                                <Segment>
                                    <LogisticsCard />
                                </Segment>
                            </SegmentWrapper>
                        </Grid.Column>
                        <Grid.Column computer={12} mobile={15}>
                            <SegmentWrapper>
                                <Segment>
                                    <MarketingCard />
                                </Segment>
                            </SegmentWrapper>
                        </Grid.Column>
                        <Grid.Column computer={12} mobile={15}>
                            <SegmentWrapper>
                                <Segment>
                                    <GreenwashingCard />
                                </Segment>
                            </SegmentWrapper>
                        </Grid.Column>
                        <Grid.Column computer={12} mobile={15}>
                            <TryAgainWrapper>
                                <Segment>
                                    <TryAgain />
                                </Segment>
                            </TryAgainWrapper>
                        </Grid.Column>
                    </Grid>
                </Background>
            )}
        </>
    );
};

export default ResultsInfo;

import React, { useContext } from "react";

import styled from "styled-components";

import { Icon, Grid, Header } from "semantic-ui-react";

import {
    CircularProgressbarWithChildren,
    buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import NumberFormat from "react-number-format";

import { UserContext } from "./UserContext";
import HeaderButtons from "./HeaderButtons";

//Both
const Centering = styled.div`
    display: table-cell;
    vertical-align: middle;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    color: white;
    text-align: center;
    margin: auto;
`;

const Wrapper = styled.div`
    width: 80%;
    margin: auto;
`;

//ProgressWrappers
const ProgressWrapper = styled.div`
    width: 50%;
    margin: auto;
    margin-top: -10%;
    padding: 0px;
    text-align: center;
`;

const ProgressText = styled.div`
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 0.9vw;
`;

const ProgressText2 = styled.div`
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 0.6vw;
`;

//Computer styling
const ProgressBackground = styled.div`
    border-radius: 50%;
    height: 40px;
    width: 40px;
    display: table;
    background-color: #fe8a60;
    margin: auto;
    margin-top: 10px;
    padding: 0px;
`;

const ProgressStepBackgroundBefore = styled.div`
    border-radius: 50%;
    height: 40px;
    width: 40px;
    display: table;
    background-color: rgba(249, 148, 112, 0.6);
    margin: auto;
    margin-top: 10px;
    padding: 0px;
`;

const CurrentStepComputer = styled.div`
    border-radius: 50%;
    height: 15px;
    width: 15px;
    margin: auto;
    vertical-align: middle;
    background-color: #ffffff;
`;

const BeforeHeader = styled(Header)`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    color: rgba(249, 148, 112, 0.6);
    text-align: center;
`;

const CurrentAfterHeader = styled(Header)`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    padding-top: 0.5em;
    margin-bottom: 0.5em;
    color: #fe8a60;
    margin: auto;
    text-align: center;
`;

const FromHeader = (props) => {
    const [user] = useContext(UserContext);

    const amountSpent =
        user.step1Spent +
        user.step2Spent +
        user.step3Spent +
        user.tvMoneySpent +
        user.onlineMoneySpent +
        user.bannerMoneySpent +
        user.influncersMoneySpent;

    const leftTospend = user.maxiumValue - amountSpent;

    return (
        <div>
            <HeaderButtons resultsInfo={false} />
            <Wrapper>
                <Grid centered>
                    {/* Resources Computer*/}
                    <Grid.Column computer={3} only="computer">
                        {props.pageNumber === 1 && (
                            <>
                                <ProgressBackground>
                                    <Centering>
                                        <CurrentStepComputer />
                                    </Centering>
                                </ProgressBackground>
                                <CurrentAfterHeader as="h5">
                                    Resources
                                </CurrentAfterHeader>
                            </>
                        )}
                        {props.pageNumber > 1 && (
                            <>
                                <ProgressBackground>
                                    <Centering>
                                        <Icon inverted name="checkmark" />
                                    </Centering>
                                </ProgressBackground>
                                <CurrentAfterHeader as="h5">
                                    Resources
                                </CurrentAfterHeader>
                            </>
                        )}
                    </Grid.Column>
                    {/* Resources Mobile*/}
                    <Grid.Column mobile={3} only="mobile">
                        {props.pageNumber === 1 && (
                            <>
                                <ProgressBackground>
                                    <Centering>
                                        <CurrentStepComputer />
                                    </Centering>
                                </ProgressBackground>
                                <CurrentAfterHeader as="h5">
                                    1
                                </CurrentAfterHeader>
                            </>
                        )}
                        {props.pageNumber > 1 && (
                            <>
                                <ProgressBackground>
                                    <Centering>
                                        <Icon inverted name="checkmark" />
                                    </Centering>
                                </ProgressBackground>
                                <CurrentAfterHeader as="h5">
                                    1
                                </CurrentAfterHeader>
                            </>
                        )}
                    </Grid.Column>
                    {/* Operations */}
                    <Grid.Column computer={3} only="computer">
                        {props.pageNumber < 2 && (
                            <>
                                <ProgressStepBackgroundBefore>
                                    <Centering>2</Centering>
                                </ProgressStepBackgroundBefore>
                                <BeforeHeader as="h5">Operations</BeforeHeader>
                            </>
                        )}
                        {props.pageNumber === 2 && (
                            <>
                                <ProgressBackground>
                                    <Centering>
                                        <CurrentStepComputer />
                                    </Centering>
                                </ProgressBackground>
                                <CurrentAfterHeader as="h5">
                                    Operations
                                </CurrentAfterHeader>
                            </>
                        )}
                        {props.pageNumber > 2 && (
                            <>
                                <ProgressBackground>
                                    <Centering>
                                        <Icon inverted name="checkmark" />
                                    </Centering>
                                </ProgressBackground>
                                <CurrentAfterHeader as="h5">
                                    Operations
                                </CurrentAfterHeader>
                            </>
                        )}
                    </Grid.Column>
                    {/* Operations Mobile */}
                    <Grid.Column Mobile={3} only="mobile">
                        {props.pageNumber < 2 && (
                            <>
                                <ProgressStepBackgroundBefore>
                                    <Centering>2</Centering>
                                </ProgressStepBackgroundBefore>
                                <BeforeHeader as="h5">2</BeforeHeader>
                            </>
                        )}
                        {props.pageNumber === 2 && (
                            <>
                                <ProgressBackground>
                                    <Centering>
                                        <CurrentStepComputer />
                                    </Centering>
                                </ProgressBackground>
                                <CurrentAfterHeader as="h5">
                                    2
                                </CurrentAfterHeader>
                            </>
                        )}
                        {props.pageNumber > 2 && (
                            <>
                                <ProgressBackground>
                                    <Centering>
                                        <Icon inverted name="checkmark" />
                                    </Centering>
                                </ProgressBackground>
                                <CurrentAfterHeader as="h5">
                                    2
                                </CurrentAfterHeader>
                            </>
                        )}
                    </Grid.Column>
                    {/* Progress */}
                    <Grid.Column computer={4}>
                        <ProgressWrapper>
                            <CircularProgressbarWithChildren
                                value={leftTospend}
                                maxValue={user.maxiumValue}
                                background
                                styles={buildStyles({
                                    pathColor: "#F46734",
                                    backgroundColor: "white",
                                })}
                            >
                                <ProgressText style={{ marginTop: -5 }}>
                                    <strong>
                                        <NumberFormat
                                            value={leftTospend}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"$"}
                                        />
                                    </strong>
                                    <br></br>
                                    <ProgressText2>Left to spend</ProgressText2>
                                </ProgressText>
                            </CircularProgressbarWithChildren>
                        </ProgressWrapper>
                    </Grid.Column>
                    {/* Logistics */}
                    <Grid.Column computer={3}>
                        {props.pageNumber < 3 && (
                            <>
                                <ProgressStepBackgroundBefore>
                                    <Centering>3</Centering>
                                </ProgressStepBackgroundBefore>
                                <BeforeHeader as="h5">Logistics</BeforeHeader>
                            </>
                        )}
                        {props.pageNumber === 3 && (
                            <>
                                <ProgressBackground>
                                    <Centering>
                                        <CurrentStepComputer />
                                    </Centering>
                                </ProgressBackground>
                                <CurrentAfterHeader as="h5">
                                    Logistics
                                </CurrentAfterHeader>
                            </>
                        )}
                        {props.pageNumber > 3 && (
                            <>
                                <ProgressBackground>
                                    <Centering>
                                        <Icon inverted name="checkmark" />
                                    </Centering>
                                </ProgressBackground>
                                <CurrentAfterHeader as="h5">
                                    Logistics
                                </CurrentAfterHeader>
                            </>
                        )}
                    </Grid.Column>
                    {/* Marketing */}
                    <Grid.Column computer={3}>
                        {props.pageNumber < 4 && (
                            <>
                                <ProgressStepBackgroundBefore>
                                    <Centering>4</Centering>
                                </ProgressStepBackgroundBefore>
                                <BeforeHeader as="h5">Marketing</BeforeHeader>
                            </>
                        )}
                        {props.pageNumber === 4 && (
                            <>
                                <ProgressBackground>
                                    <Centering>
                                        <CurrentStepComputer />
                                    </Centering>
                                </ProgressBackground>
                                <CurrentAfterHeader as="h5">
                                    Marketing
                                </CurrentAfterHeader>
                            </>
                        )}
                        {props.pageNumber > 4 && (
                            <>
                                <ProgressBackground>
                                    <Centering>
                                        <Icon inverted name="checkmark" />
                                    </Centering>
                                </ProgressBackground>
                                <CurrentAfterHeader as="h5">
                                    Marketing
                                </CurrentAfterHeader>
                            </>
                        )}
                    </Grid.Column>
                </Grid>
            </Wrapper>
        </div>
    );
};

export default FromHeader;

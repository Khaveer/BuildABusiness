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

const ProgressWrapper = styled.div`
    width: 75%;
    margin: auto;
    margin-top: -22%;
`;

const Wrapper = styled.div`
    width: 100%;
`;

const ProgressStep = styled.div`
    border-radius: 50%;
    height: 3em;
    width: 3em;
    display: table;
    background-color: #fe8a60;
    margin: auto;
    margin-top: 10px;
    padding: 0px;
`;

const ProgressStepBefore = styled.div`
    border-radius: 50%;
    height: 3em;
    width: 3em;
    display: table;
    background-color: rgba(249, 148, 112, 0.6);
    margin: auto;
    margin-top: 10px;
    padding: 0px;
`;

const ProgressStepCenter = styled.div`
    display: table-cell;
    vertical-align: middle;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    color: white;
`;

const BeforeHeader = styled(Header)`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    color: rgba(249, 148, 112, 0.6);
`;

const AfterHeader = styled(Header)`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    color: #fe8a60;
`;

const FormHeader = (props) => {
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
            <HeaderButtons />
            <Wrapper>
                <Grid container columns="equal">
                    <Grid.Column>
                        {props.pageNumber < 1 && (
                            <div>
                                <ProgressStepBefore>
                                    <ProgressStepCenter>1</ProgressStepCenter>
                                </ProgressStepBefore>
                                <BeforeHeader as="h5">Resources</BeforeHeader>
                            </div>
                        )}
                        {props.pageNumber === 1 && (
                            <div>
                                <ProgressStep>
                                    <ProgressStepCenter>
                                        <Icon inverted name="circle" />
                                    </ProgressStepCenter>
                                </ProgressStep>
                                <AfterHeader as="h5">Resources</AfterHeader>
                            </div>
                        )}
                        {props.pageNumber > 1 && (
                            <div>
                                <ProgressStep>
                                    <ProgressStepCenter>
                                        <Icon inverted name="checkmark" />
                                    </ProgressStepCenter>
                                </ProgressStep>
                                <AfterHeader as="h5">Resources</AfterHeader>
                            </div>
                        )}
                    </Grid.Column>
                    <Grid.Column>
                        {props.pageNumber < 2 && (
                            <div>
                                <ProgressStepBefore>
                                    <ProgressStepCenter>2</ProgressStepCenter>
                                </ProgressStepBefore>
                                <BeforeHeader as="h5">Operations</BeforeHeader>
                            </div>
                        )}
                        {props.pageNumber === 2 && (
                            <div>
                                <ProgressStep>
                                    <ProgressStepCenter>
                                        <Icon inverted name="circle" />
                                    </ProgressStepCenter>
                                </ProgressStep>
                                <AfterHeader as="h5">Operations</AfterHeader>
                            </div>
                        )}
                        {props.pageNumber > 2 && (
                            <div>
                                <ProgressStep>
                                    <ProgressStepCenter>
                                        <Icon inverted name="checkmark" />
                                    </ProgressStepCenter>
                                </ProgressStep>
                                <AfterHeader as="h5">Operations</AfterHeader>
                            </div>
                        )}
                    </Grid.Column>
                    <Grid.Column>
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
                                <div style={{ fontSize: 20, marginTop: -5 }}>
                                    <strong>
                                        <NumberFormat
                                            value={leftTospend}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"$"}
                                        />
                                    </strong>
                                    <br></br>
                                    <div style={{ fontSize: 12 }}>
                                        Left to spend
                                    </div>
                                </div>
                            </CircularProgressbarWithChildren>
                        </ProgressWrapper>
                    </Grid.Column>
                    <Grid.Column>
                        {props.pageNumber < 3 && (
                            <div>
                                <ProgressStepBefore>
                                    <ProgressStepCenter>3</ProgressStepCenter>
                                </ProgressStepBefore>
                                <BeforeHeader as="h5">Logistics</BeforeHeader>
                            </div>
                        )}
                        {props.pageNumber === 3 && (
                            <div>
                                <ProgressStep>
                                    <ProgressStepCenter>
                                        <Icon inverted name="circle" />
                                    </ProgressStepCenter>
                                </ProgressStep>
                                <AfterHeader as="h5">Logistics</AfterHeader>
                            </div>
                        )}
                        {props.pageNumber > 3 && (
                            <div>
                                <ProgressStep>
                                    <ProgressStepCenter>
                                        <Icon inverted name="checkmark" />
                                    </ProgressStepCenter>
                                </ProgressStep>
                                <AfterHeader as="h5">Logistics</AfterHeader>
                            </div>
                        )}
                    </Grid.Column>
                    <Grid.Column>
                        {props.pageNumber < 4 && (
                            <div>
                                <ProgressStepBefore>
                                    <ProgressStepCenter>4</ProgressStepCenter>
                                </ProgressStepBefore>
                                <BeforeHeader as="h5">Customer</BeforeHeader>
                                <BeforeHeader as="h5">
                                    relationship
                                </BeforeHeader>
                            </div>
                        )}
                        {props.pageNumber === 4 && (
                            <div>
                                <ProgressStep>
                                    <ProgressStepCenter>
                                        <Icon inverted name="circle" />
                                    </ProgressStepCenter>
                                </ProgressStep>
                                <AfterHeader as="h5">Customer</AfterHeader>
                                <AfterHeader as="h5">relationship</AfterHeader>
                            </div>
                        )}
                        {props.pageNumber > 4 && (
                            <div>
                                <ProgressStep>
                                    <ProgressStepCenter>
                                        <Icon inverted name="checkmark" />
                                    </ProgressStepCenter>
                                </ProgressStep>
                                <AfterHeader as="h5">Customer</AfterHeader>
                                <AfterHeader as="h5">relationship</AfterHeader>
                            </div>
                        )}
                    </Grid.Column>
                </Grid>
            </Wrapper>
        </div>
    );
};

export default FormHeader;
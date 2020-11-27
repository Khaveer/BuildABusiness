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
    padding: 0px;
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

const Wrapper = styled.div`
    width: 100%;
`;

const ProgressStep = styled.div`
    border-radius: 50%;
    height: 2vw;
    width: 2vw;
    display: table;
    background-color: #fe8a60;
    margin: auto;
    margin-top: 10px;
    padding: 0px;
`;

const ProgressStepMobile = styled.div`
    border-radius: 50%;
    height: 7vw;
    width: 7vw;
    display: table;
    background-color: #fe8a60;
    margin: auto;
    margin-top: 10px;
    padding: 0px;
`;

const ProgressStepCurrent = styled.div`
    border-radius: 50%;
    height: 1vw;
    width: 1vw;
    margin: auto;
    vertical-align: middle;
    background-color: #ffffff;
    color: white;
`;

const ProgressStepCurrentMobile = styled.div`
    border-radius: 50%;
    height: 3vw;
    width: 3vw;
    margin: auto;
    vertical-align: middle;
    background-color: #ffffff;
    color: white;
`;

const ProgressStepBefore = styled.div`
    border-radius: 50%;
    height: 2vw;
    width: 2vw;
    display: table;
    background-color: rgba(249, 148, 112, 0.6);
    margin: auto;
    margin-top: 10px;
    padding: 0px;
`;

const ProgressStepBeforeMobile = styled.div`
    border-radius: 50%;
    height: 7vw;
    width: 7vw;
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
            <HeaderButtons resultsInfo={false} />
            <Wrapper>
                <Grid container columns="equal">
                    <Grid.Column only="computer">
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
                                        <ProgressStepCurrent />
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
                    <Grid.Column only="mobile">
                        {props.pageNumber < 1 && (
                            <div>
                                <ProgressStepBefore></ProgressStepBefore>
                                <BeforeHeader as="h5">1</BeforeHeader>
                            </div>
                        )}
                        {props.pageNumber === 1 && (
                            <div>
                                <ProgressStepMobile>
                                    <ProgressStepCenter>
                                        <ProgressStepCurrentMobile />
                                    </ProgressStepCenter>
                                </ProgressStepMobile>
                                <AfterHeader as="h5">1</AfterHeader>
                            </div>
                        )}
                        {props.pageNumber > 1 && (
                            <div>
                                <ProgressStepMobile>
                                    <ProgressStepCenter>
                                        <Icon inverted name="checkmark" />
                                    </ProgressStepCenter>
                                </ProgressStepMobile>
                                <AfterHeader as="h5">1</AfterHeader>
                            </div>
                        )}
                    </Grid.Column>
                    <Grid.Column only="computer">
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
                                        <ProgressStepCurrent />
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
                    s
                    <Grid.Column only="mobile">
                        {props.pageNumber < 2 && (
                            <div>
                                <ProgressStepBeforeMobile></ProgressStepBeforeMobile>
                                <BeforeHeader as="h5">2</BeforeHeader>
                            </div>
                        )}
                        {props.pageNumber === 2 && (
                            <div>
                                <ProgressStepMobile>
                                    <ProgressStepCenter>
                                        <ProgressStepCurrentMobile />
                                    </ProgressStepCenter>
                                </ProgressStepMobile>
                                <AfterHeader as="h5">2</AfterHeader>
                            </div>
                        )}
                        {props.pageNumber > 2 && (
                            <div>
                                <ProgressStepMobile>
                                    <ProgressStepCenter>
                                        <Icon inverted name="checkmark" />
                                    </ProgressStepCenter>
                                </ProgressStepMobile>
                                <AfterHeader as="h5">2</AfterHeader>
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
                    <Grid.Column only="computer">
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
                                        <ProgressStepCurrent />
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
                    <Grid.Column only="mobile">
                        {props.pageNumber < 3 && (
                            <div>
                                <ProgressStepBeforeMobile></ProgressStepBeforeMobile>
                                <BeforeHeader as="h5">3</BeforeHeader>
                            </div>
                        )}
                        {props.pageNumber === 3 && (
                            <div>
                                <ProgressStepMobile>
                                    <ProgressStepCenter>
                                        <ProgressStepCurrentMobile />
                                    </ProgressStepCenter>
                                </ProgressStepMobile>
                                <AfterHeader as="h5">3</AfterHeader>
                            </div>
                        )}
                        {props.pageNumber > 3 && (
                            <div>
                                <ProgressStepMobile>
                                    <ProgressStepCenter>
                                        <Icon inverted name="checkmark" />
                                    </ProgressStepCenter>
                                </ProgressStepMobile>
                                <AfterHeader as="h5">3</AfterHeader>
                            </div>
                        )}
                    </Grid.Column>
                    <Grid.Column only="computer">
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
                                        <ProgressStepCurrent />
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
                    <Grid.Column only="mobile">
                        {props.pageNumber < 4 && (
                            <div>
                                <ProgressStepBeforeMobile></ProgressStepBeforeMobile>
                                <BeforeHeader as="h5">4</BeforeHeader>
                            </div>
                        )}
                        {props.pageNumber === 4 && (
                            <div>
                                <ProgressStepMobile>
                                    <ProgressStepCenter>
                                        <ProgressStepCurrentMobile />
                                    </ProgressStepCenter>
                                </ProgressStepMobile>
                                <BeforeHeader as="h5">4</BeforeHeader>
                            </div>
                        )}
                        {props.pageNumber > 4 && (
                            <div>
                                <ProgressStepMobile>
                                    <ProgressStepCenter>
                                        <Icon inverted name="checkmark" />
                                    </ProgressStepCenter>
                                </ProgressStepMobile>
                                <BeforeHeader as="h5">4</BeforeHeader>
                            </div>
                        )}
                    </Grid.Column>
                </Grid>
            </Wrapper>
        </div>
    );
};

export default FormHeader;

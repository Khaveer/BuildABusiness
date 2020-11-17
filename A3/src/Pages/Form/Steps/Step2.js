import React from "react";
import { Grid, Image, Button, Popup } from "semantic-ui-react";

import { Link } from "react-router-dom";

import styled from "styled-components";

import GameInfo from "./components/GameInfo";
import FormHeader from "../../components/Header";
import Footer from "../Footer";

import { UserContext } from "../../components/UserContext";

import europeNA from "../../../Assets/FromAssests/Step2/EuropeandNorthAmerica.svg";
import latinAmerica from "../../../Assets/FromAssests/Step2/LatinAmerica.svg";
import eastEurope from "../../../Assets/FromAssests/Step2/EastEurope.svg";
import midEast from "../../../Assets/FromAssests/Step2/MidEastandNorthAfrica.svg";
import asia from "../../../Assets/FromAssests/Step2/Asia.svg";
import pacfic from "../../../Assets/FromAssests/Step2/Pacific.svg";
import africa from "../../../Assets/FromAssests/Step2/Sub-SaharanAfrica.svg";

const GameWrapper = styled.div``;

const InfoWrapper = styled.div`
    width: 15%;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 2em;
    text-align: left;
    float: left;
    margin-left: 5%;
`;

const FormWrapper = styled.div`
    width: 75%;
    display: inline-block;
    margin-top: 2em;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 5em;
    padding-right: 2em;
`;

const Wrapper = styled.img`
    fill: blue;
    width: 70%;
    filter: saturate(0.2);
    &:hover {
        filter: saturate(1);
    }
`;

// const Slectedimage() {

// }

const Step2 = () => {
    return (
        <>
            <FormHeader pageNumber={2} />
            <GameWrapper>
                <InfoWrapper>
                    <GameInfo />
                </InfoWrapper>
                <FormWrapper>
                    <Grid centered>
                        <Grid.Column mobile={16} computer={4}>
                            <Popup
                                content="This will be the cost"
                                header="Eastern Europe and North America "
                                trigger={
                                    <Wrapper
                                        src={europeNA}
                                        size="small"
                                        centered
                                    />
                                }
                            />
                            {/* <Wrapper src={europeNA} fill="red" stroke="green" /> */}
                        </Grid.Column>
                        <Grid.Column mobile={16} computer={4}>
                            <Popup
                                content="This will be the cost"
                                header="Latin America "
                                trigger={
                                    <Image
                                        src={latinAmerica}
                                        size="small"
                                        centered
                                    />
                                }
                            />
                        </Grid.Column>
                        <Grid.Column mobile={16} computer={4}>
                            <Popup
                                content="This will be the cost"
                                header="Eastern Europe "
                                trigger={
                                    <Image
                                        src={eastEurope}
                                        size="small"
                                        centered
                                    />
                                }
                            />
                        </Grid.Column>
                        <Grid.Column mobile={16} computer={4}>
                            <Popup
                                content="This will be the cost"
                                header="Middle East "
                                trigger={
                                    <Image
                                        src={midEast}
                                        size="small"
                                        centered
                                    />
                                }
                            />
                        </Grid.Column>
                        <Grid.Column mobile={16} computer={4}>
                            <Popup
                                content="This will be the cost"
                                header="Asia"
                                trigger={
                                    <Image src={asia} size="small" centered />
                                }
                            />
                        </Grid.Column>
                        <Grid.Column mobile={16} computer={4}>
                            <Popup
                                content="This will be the cost"
                                header="Pacfic"
                                trigger={
                                    <Image src={pacfic} size="small" centered />
                                }
                            />
                        </Grid.Column>
                        <Grid.Column mobile={16} computer={4}>
                            <Popup
                                content="This will be the cost"
                                header="Africa"
                                trigger={
                                    <Image src={africa} size="small" centered />
                                }
                            />
                        </Grid.Column>
                    </Grid>
                </FormWrapper>
            </GameWrapper>
            <ButtonWrapper>
                <Link to="step3">
                    <Button content="Continue to Logistics" primary />
                </Link>
            </ButtonWrapper>
            <Footer />
        </>
    );
};

export default Step2;

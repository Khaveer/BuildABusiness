import React, { Component } from "react";
import { Button, Grid, Segment, Image, Form } from "semantic-ui-react";

import { Link } from "react-router-dom";

import styled from "styled-components";

import GameInfo from "./components/GameInfo";

import BaseMap from "./../../../Assets/FromAssests/Step3/BaseWorld.png";

import FormHeader from "../../components/Header";
import Footer from "../Footer";

const GameWrapper = styled.div`
    width: 100%;
    overflow: hidden;
`;

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
    padding-top: 3em;
    padding-right: 2em;
`;

const SegmentWrapper = styled.div`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    margin-top: 0px;
    font-size: 1em;
    text-align: left;
    padding-top: 2em;
    color: rgba(0, 0, 0, 56%);
`;

const ChoiceWrapper = styled.div`
    padding-bottom: 1em;
`;
const DeliveryWrapper = styled.div`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    margin-top: 0px;
    font-size: 0.9em;
    text-align: left;
    padding-left: 2em;
`;

class Step3 extends Component {
    state = {};

    handleChange = (e, { value }) => this.setState({ value });
    render() {
        const { value } = this.state;
        console.log(value);
        return (
            <>
                <FormHeader pageNumber={3} />
                <GameWrapper>
                    <InfoWrapper>
                        <GameInfo />
                    </InfoWrapper>
                    <FormWrapper>
                        <Grid>
                            <Grid.Row columns={2}>
                                <Grid.Column computer={12} only="computer">
                                    <Image src={BaseMap} />
                                </Grid.Column>
                                <Grid.Column computer={4} mobile={16}>
                                    <Segment>
                                        <SegmentWrapper>
                                            <Form.Group>
                                                <ChoiceWrapper>
                                                    <Form.Radio
                                                        label="Tag along ($1,000,000)"
                                                        value="TA"
                                                        checked={value === "TA"}
                                                        onChange={
                                                            this.handleChange
                                                        }
                                                    />
                                                    <DeliveryWrapper>
                                                        7 weeks
                                                    </DeliveryWrapper>
                                                </ChoiceWrapper>
                                                <ChoiceWrapper>
                                                    <Form.Radio
                                                        label="Train ($1,500,000)"
                                                        value="T"
                                                        checked={value === "T"}
                                                        onChange={
                                                            this.handleChange
                                                        }
                                                    />
                                                    <DeliveryWrapper>
                                                        3 months to arrive
                                                    </DeliveryWrapper>
                                                </ChoiceWrapper>
                                                <ChoiceWrapper>
                                                    <Form.Radio
                                                        label="Cargo Planes ($900,000)"
                                                        value="CP"
                                                        checked={value === "CP"}
                                                        onChange={
                                                            this.handleChange
                                                        }
                                                    />
                                                    <DeliveryWrapper>
                                                        2 Weeks
                                                    </DeliveryWrapper>
                                                </ChoiceWrapper>
                                                <ChoiceWrapper>
                                                    <Form.Radio
                                                        label="Cargo Ships ($800,000)"
                                                        value="CS"
                                                        checked={value === "CS"}
                                                        onChange={
                                                            this.handleChange
                                                        }
                                                    />
                                                    <DeliveryWrapper>
                                                        12 Days
                                                    </DeliveryWrapper>
                                                </ChoiceWrapper>
                                                <ChoiceWrapper>
                                                    <Form.Radio
                                                        label="Drones ($2,000,000)"
                                                        value="D"
                                                        checked={value === "D"}
                                                        onChange={
                                                            this.handleChange
                                                        }
                                                    />
                                                    <DeliveryWrapper>
                                                        6 Months
                                                    </DeliveryWrapper>
                                                </ChoiceWrapper>
                                            </Form.Group>
                                        </SegmentWrapper>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </FormWrapper>
                </GameWrapper>
                <ButtonWrapper>
                    <Link to="step4">
                        <Button
                            content="Continue to Customer relationship"
                            primary
                        />
                    </Link>
                </ButtonWrapper>
                <Footer />
            </>
        );
    }
}

// const Step3 = () => {

// };

export default Step3;

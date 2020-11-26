import React, { useState, useContext } from "react";
import { Segment, Grid, Image, Button } from "semantic-ui-react";

import styled from "styled-components";

import NumberFormat from "react-number-format";

import GameInfo from "./components/GameInfo";
import FormHeader from "../../components/Header";
import Footer from "../Footer";
import { UserContext } from "../../components/UserContext";

import RPET from "../../../Assets/FromAssests/Step1/RPET.png";
import Cotton from "../../../Assets/FromAssests/Step1/Cotton.png";
import Animal from "../../../Assets/FromAssests/Step1/Animal.png";
import Synthetics from "../../../Assets/FromAssests/Step1/Synthetics.png";

const GameWrapper = styled.div`
    width: 100%;
    overflow: hidden;
`;

const InfoWrapper = styled.div`
    width: 100%;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 2em;
    text-align: left;
    float: left;
    margin-left: 1em;
`;

const FormWrapper = styled.div`
    display: inline-block;
    margin-top: 2em;
`;

const ChoicetextWrapper = styled.div`
    text-align: left;
    float: left;
    width: 65%;
    vertical-align: middle;
`;

const ChoiceHeader = styled.label`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    margin-top: 0px;
    font-size: 1em;
    padding-left: 1em;
`;

const ChoiceHeaderWrapper = styled.div`
    padding-bottom: 1em;
`;
const ChoiceInfoWrapper = styled.div`
    padding-bottom: 1em;
`;

const ChoiceImage = styled.div`
    align-items: right;
    display: inline-block;
    width: 35%;
`;

const ButtonWrapper = styled.div`
    display: flex;
    position: fixed;
    bottom: 5em;
    padding-right: 3em;
    width: 100%;
    justify-content: flex-end;
`;

const SegmentWrapper = styled.div`
    padding: 1vw;
    padding-bottom: 0px;
`;

const StrongText = styled.b`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 1em;
    line-height: 2em;
    word-wrap: break-word;
    text-align: left;
`;

const Step1 = () => {
    const [user, setUser] = useContext(UserContext);

    const [decsion, setDecsion] = useState("null");

    const [stepUpdate] = useState(2);
    const [result, setResult] = useState();

    const updateChoice = (e) => {
        setDecsion(e.target.value);

        let money;
        let addCost;

        switch (e.target.value) {
            case "Cotton":
                money = user.cottonValue;
                addCost = 2;
                setResult(2);
                break;
            case "RPET":
                money = user.RPETValue;
                addCost = 3;
                setResult(3);
                break;
            case "Animal":
                money = user.animalValue;
                addCost = 1;
                setResult(1);
                break;
            case "Synthetics":
                money = user.syntheticValue;
                addCost = 1;
                setResult(1);
                break;
            default:
                break;
        }

        setUser((preState) => ({
            ...preState,
            step1Spent: money,
            step1Cost: addCost,
        }));
    };

    const submitChoice = (e) => {
        e.preventDefault();
        console.log(result);

        if (decsion !== "null") {
            setUser((preState) => ({
                ...preState,
                step1: decsion,
                current: stepUpdate,
                resultState1: result,
            }));
        }
    };

    return (
        <>
            <FormHeader pageNumber={1} />
            <GameWrapper>
                <Grid>
                    <Grid.Column computer={3} mobile={16}>
                        <InfoWrapper>
                            <GameInfo />
                        </InfoWrapper>
                    </Grid.Column>
                    <Grid.Column computer={13} mobile={16}>
                        <FormWrapper>
                            <form>
                                <Grid>
                                    <Grid.Column mobile={16} computer={8}>
                                        <SegmentWrapper>
                                            <Segment>
                                                <ChoicetextWrapper>
                                                    <ChoiceHeaderWrapper>
                                                        <input
                                                            type="radio"
                                                            id="Cotton"
                                                            name="Option"
                                                            value="Cotton"
                                                            onChange={
                                                                updateChoice
                                                            }
                                                        />

                                                        <ChoiceHeader for="Cotton">
                                                            Cotton
                                                        </ChoiceHeader>
                                                    </ChoiceHeaderWrapper>
                                                    <ChoiceInfoWrapper>
                                                        <StrongText>
                                                            <NumberFormat
                                                                value={
                                                                    user.cottonValue
                                                                }
                                                                displayType={
                                                                    "text"
                                                                }
                                                                thousandSeparator={
                                                                    true
                                                                }
                                                                prefix={"$"}
                                                            />
                                                        </StrongText>
                                                    </ChoiceInfoWrapper>
                                                    <ChoiceInfoWrapper>
                                                        A versatile fabric as
                                                        itself or blended
                                                        provides a natural
                                                        comfort, visual appeal,
                                                        durability and value.
                                                    </ChoiceInfoWrapper>
                                                </ChoicetextWrapper>
                                                <ChoiceImage>
                                                    <Image src={Cotton} />
                                                </ChoiceImage>
                                            </Segment>
                                        </SegmentWrapper>
                                    </Grid.Column>
                                    <Grid.Column mobile={16} computer={8}>
                                        <SegmentWrapper>
                                            <Segment>
                                                <ChoicetextWrapper>
                                                    <ChoiceHeaderWrapper>
                                                        <input
                                                            type="radio"
                                                            id="RPET"
                                                            name="Option"
                                                            value="RPET"
                                                            onChange={
                                                                updateChoice
                                                            }
                                                        />
                                                        <ChoiceHeader for="RPET">
                                                            Recycled materials
                                                        </ChoiceHeader>
                                                    </ChoiceHeaderWrapper>
                                                    <ChoiceInfoWrapper>
                                                        <StrongText>
                                                            <NumberFormat
                                                                value={
                                                                    user.RPETValue
                                                                }
                                                                displayType={
                                                                    "text"
                                                                }
                                                                thousandSeparator={
                                                                    true
                                                                }
                                                                prefix={"$"}
                                                            />
                                                        </StrongText>
                                                    </ChoiceInfoWrapper>
                                                    <ChoiceInfoWrapper>
                                                        RPET a recycled fabric
                                                        created from polyester
                                                        and can contain either
                                                        pre or post-consumer
                                                        waste.
                                                    </ChoiceInfoWrapper>
                                                </ChoicetextWrapper>
                                                <ChoiceImage>
                                                    <Image src={RPET} />
                                                </ChoiceImage>
                                            </Segment>
                                        </SegmentWrapper>
                                    </Grid.Column>
                                    <Grid.Column mobile={16} computer={8}>
                                        <SegmentWrapper>
                                            <Segment>
                                                <ChoicetextWrapper>
                                                    <input
                                                        type="radio"
                                                        id="Animal"
                                                        name="Option"
                                                        value="Animal"
                                                        onChange={updateChoice}
                                                    />
                                                    <ChoiceHeader for="Animal">
                                                        Animal Products
                                                    </ChoiceHeader>
                                                    <br></br>
                                                    <br></br>
                                                    <StrongText>
                                                        <NumberFormat
                                                            value={
                                                                user.animalValue
                                                            }
                                                            displayType={"text"}
                                                            thousandSeparator={
                                                                true
                                                            }
                                                            prefix={"$"}
                                                        />
                                                    </StrongText>
                                                    <br></br>
                                                    <br></br>
                                                    <div>
                                                        High quality fabric used
                                                        to produce durable and
                                                        aesthetic clothing. This
                                                        are derived from animals
                                                        such as cows.
                                                    </div>
                                                </ChoicetextWrapper>
                                                <ChoiceImage>
                                                    <Image src={Animal} />
                                                </ChoiceImage>
                                            </Segment>
                                        </SegmentWrapper>
                                    </Grid.Column>
                                    <Grid.Column mobile={16} computer={8}>
                                        <SegmentWrapper>
                                            <Segment>
                                                <ChoicetextWrapper>
                                                    <input
                                                        type="radio"
                                                        id="Synthetics"
                                                        name="Option"
                                                        value="Synthetics"
                                                        onChange={updateChoice}
                                                    />
                                                    <ChoiceHeader for="Synthetics">
                                                        Synthetics
                                                    </ChoiceHeader>
                                                    <br></br>
                                                    <br></br>
                                                    <StrongText>
                                                        <NumberFormat
                                                            value={
                                                                user.syntheticValue
                                                            }
                                                            displayType={"text"}
                                                            thousandSeparator={
                                                                true
                                                            }
                                                            prefix={"$"}
                                                        />
                                                    </StrongText>
                                                    <br></br>
                                                    <br></br>
                                                    <div>
                                                        Fabric that is cheap to
                                                        produce with the
                                                        downside of not being
                                                        comfortable or durable.
                                                    </div>
                                                </ChoicetextWrapper>
                                                <ChoiceImage>
                                                    <Image src={Synthetics} />
                                                </ChoiceImage>
                                            </Segment>
                                        </SegmentWrapper>
                                    </Grid.Column>
                                </Grid>
                            </form>
                        </FormWrapper>
                    </Grid.Column>
                </Grid>
            </GameWrapper>
            <ButtonWrapper>
                <Button
                    content="Continue to Operations"
                    primary
                    onClick={submitChoice}
                />
            </ButtonWrapper>
            <Footer />
        </>
    );
};

export default Step1;

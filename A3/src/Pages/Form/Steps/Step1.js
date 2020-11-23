import React, { useState, useContext } from "react";
import { Segment, Grid, Checkbox, Image, Button } from "semantic-ui-react";

import { Link } from "react-router-dom";

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

const ChoicetextWrapper = styled.div`
    text-align: left;
    float: left;
    width: 65%;
`;

const ChoiceHeader = styled.label`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    margin-top: 0px;
    font-size: 1em;
    padding-left: 1em;
`;

const ChoiceImage = styled.div`
    align-items: right;
    display: inline-block;
    width: 35%;
`;

const ButtonWrapper = styled.div`
    display: flex;
    position: absolute;
    bottom: 5em;
    padding-right: 3em;
    width: 100%;
    justify-content: flex-end;
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

        if (decsion != "null") {
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
                <InfoWrapper>
                    <GameInfo />
                </InfoWrapper>
                <FormWrapper>
                    <form>
                        <Grid>
                            <Grid.Column mobile={16} computer={8}>
                                <Segment>
                                    <ChoicetextWrapper>
                                        <input
                                            type="radio"
                                            id="Cotton"
                                            name="Option"
                                            value="Cotton"
                                            onChange={updateChoice}
                                        />
                                        <ChoiceHeader for="Cotton">
                                            Cotton
                                        </ChoiceHeader>
                                        <br></br>
                                        <NumberFormat
                                            value={user.cottonValue}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"$"}
                                        />
                                        <div>
                                            A versatile fabric as itself or
                                            blended provides a natural comfort,
                                            visual appeal, durability and value.
                                        </div>
                                    </ChoicetextWrapper>
                                    <ChoiceImage>
                                        <Image src={Cotton} />
                                    </ChoiceImage>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column mobile={16} computer={8}>
                                <Segment>
                                    <ChoicetextWrapper>
                                        <input
                                            type="radio"
                                            id="RPET"
                                            name="Option"
                                            value="RPET"
                                            onChange={updateChoice}
                                        />
                                        <ChoiceHeader for="RPET">
                                            Recycled materials
                                        </ChoiceHeader>
                                        <br></br>
                                        <NumberFormat
                                            value={user.RPETValue}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"$"}
                                        />
                                        <div>
                                            RPET a recycled fabric created from
                                            polyester and can contain either pre
                                            or post-consumer waste.
                                        </div>
                                    </ChoicetextWrapper>
                                    <ChoiceImage>
                                        <Image src={RPET} />
                                    </ChoiceImage>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column mobile={16} computer={8}>
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
                                        <NumberFormat
                                            value={user.animalValue}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"$"}
                                        />
                                        <div>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Donec
                                            sit amet nisi non ipsum finibus
                                            molestie. Mauris at porta enim, sed
                                            malesuada erat. Sed eleifend metus
                                            sed ipsum tincidunt, eget efficitur
                                            turpis varius. Ut lacus dolor,
                                            feugiat a ultrices vitae, mattis a
                                            purus. Praesent et faucibus orci.
                                            Donec ornare fringilla elementum.
                                            Vestibulum sed sagittis dolor.{" "}
                                        </div>
                                    </ChoicetextWrapper>
                                    <ChoiceImage>
                                        <Image src={Animal} />
                                    </ChoiceImage>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column mobile={16} computer={8}>
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
                                        <NumberFormat
                                            value={user.syntheticValue}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"$"}
                                        />
                                        <div>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Donec
                                            sit amet nisi non ipsum finibus
                                            molestie. Mauris at porta enim, sed
                                            malesuada erat. Sed eleifend metus
                                            sed ipsum tincidunt, eget efficitur
                                            turpis varius. Ut lacus dolor,
                                            feugiat a ultrices vitae, mattis a
                                            purus. Praesent et faucibus orci.
                                            Donec ornare fringilla elementum.
                                            Vestibulum sed sagittis dolor.{" "}
                                        </div>
                                    </ChoicetextWrapper>
                                    <ChoiceImage>
                                        <Image src={Synthetics} />
                                    </ChoiceImage>
                                </Segment>
                            </Grid.Column>
                        </Grid>
                    </form>
                </FormWrapper>
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
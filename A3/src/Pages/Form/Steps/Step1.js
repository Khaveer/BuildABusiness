import React, { useState, useContext, useEffect } from "react";
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
    justify-content: flex-end;
    padding-top: 5em;
    padding-right: 2em;
`;

const Step1 = () => {
    const [user, setUser] = useContext(UserContext);
    // console.log(user);
    const [decsion, setDecsion] = useState(null);
    const [stepUpdate, setStepUpdate] = useState(2);
    const [moneySpent, setMoney] = useState();
    const [message, setMessage] = useState("Hi there, how are you?");

    const updateChoice = (e) => {
        setDecsion(e.target.value);
        console.log(decsion);

        // switch (decsion) {
        //     case "Cotton":
        //         setMoney(user.cottonValue);
        //         setDecsion(e.target.value);
        //         break;
        //     case "RPET":
        //         setMoney(user.RPETValue);
        //         setDecsion(e.target.value);
        //         break;
        //     case "Animal":
        //         setMoney(user.animalValue);
        //         setDecsion(e.target.value);
        //         break;
        //     case "Synthetics":
        //         setMoney(user.syntheticValue);
        //         setDecsion(e.target.value);
        //         break;
        // }
        // setUser((preState) => ({
        //     ...preState,
        //     amountSpent: moneySpent,
        // }));
    };

    const submitChoice = (e) => {
        e.preventDefault();
        console.log(decsion);

        console.log(moneySpent);

        if (decsion != null) {
            setUser((preState) => ({
                ...preState,
                step1: decsion,
                current: stepUpdate,
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
                <Link to="step2">
                    <Button
                        content="Continue to Operations"
                        primary
                        onClick={submitChoice}
                    />
                </Link>
            </ButtonWrapper>
            <Footer />
        </>
    );
};

export default Step1;

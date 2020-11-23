import React, { useContext, useState } from "react";
import { Button, Grid, Segment, Image, Form } from "semantic-ui-react";

import styled from "styled-components";

import { UserContext } from "../../components/UserContext";

import GameInfo from "./components/GameInfo";
import NumberFormat from "react-number-format";

import BaseMap from "./../../../Assets/FromAssests/Step3/BaseWorld.png";
import CPlanes from "./../../../Assets/FromAssests/Step3/cPlanesSelected.png";
import CBoats from "./../../../Assets/FromAssests/Step3/cShippingSelected.png";
import Drones from "./../../../Assets/FromAssests/Step3/droneSelected.png";
import TA from "./../../../Assets/FromAssests/Step3/tagAlongSelected.png";
import Train from "./../../../Assets/FromAssests/Step3/trainSelected.png";
import EV from "./../../../Assets/FromAssests/Step3/EVSelected.png";

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
    position: absolute;
    bottom: 5em;
    padding-right: 3em;
    width: 100%;
    justify-content: flex-end;
`;

const SegmentWrapper = styled.div`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    margin-top: 0px;
    font-size: 1em;
    text-align: left;
    padding-top: 0.5em;
    color: rgba(0, 0, 0, 56%);
`;

const ChoiceHeader = styled.label`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    margin-top: 0px;
    font-size: 1em;
    padding-left: 1em;
`;

const ChoiceWrapper = styled.div`
    padding-bottom: 0px;
`;
const DeliveryWrapper = styled.div`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    margin-top: 0px;
    font-size: 0.7em;
    text-align: left;
    padding-left: 2.5em;
    padding-top: 0.1em;
`;

const Step3 = () => {
    const [user, setUser] = useContext(UserContext);
    const [decsion, setDecsion] = useState("null");
    const [stepUpdate] = useState(4);
    const [result, setResult] = useState();

    const updateChoice = (e) => {
        setDecsion(e.target.value);

        let money;
        let addCost;

        switch (e.target.value) {
            case "truck":
                money = user.trucksValue;
                addCost = 1;
                setResult(1);
                break;
            case "train":
                money = user.trainValue;
                addCost = 3;
                setResult(3);
                break;
            case "cPlanes":
                money = user.cargoPlaneValue;
                addCost = 1;
                setResult(1);
                break;
            case "cShips":
                money = user.cargoShipValue;
                addCost = 2;
                setResult(2);
                break;
            case "drones":
                money = user.dronesValue;
                addCost = 3;
                setResult(3);
                break;
            case "electricVehicle":
                money = user.electricValue;
                addCost = 3;
                setResult(3);
                break;
        }
        console.log(money);
        setUser((preState) => ({
            ...preState,
            step3Spent: money,
            step3Cost: addCost,
        }));
    };

    const submitChoice = () => {
        console.log(decsion);

        if (decsion != "null") {
            setUser((preState) => ({
                ...preState,
                step3: decsion,
                current: stepUpdate,
                resultState3: result,
            }));
        }
    };

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
                                {decsion === "null" && <Image src={BaseMap} />}
                                {decsion === "cPlanes" && (
                                    <Image src={CPlanes} />
                                )}
                                {decsion === "cShips" && <Image src={CBoats} />}
                                {decsion === "drones" && <Image src={Drones} />}
                                {decsion === "truck" && <Image src={TA} />}
                                {decsion === "train" && <Image src={Train} />}
                                {decsion === "electricVehicle" && (
                                    <Image src={EV} />
                                )}
                            </Grid.Column>
                            <Grid.Column computer={4} mobile={16}>
                                <Segment>
                                    <SegmentWrapper>
                                        <form>
                                            <ChoiceWrapper>
                                                <input
                                                    type="radio"
                                                    id="train"
                                                    name="Option"
                                                    value="train"
                                                    onChange={updateChoice}
                                                />
                                                <ChoiceHeader for="train">
                                                    Train{" ("}
                                                    {
                                                        <NumberFormat
                                                            value={
                                                                user.trainValue
                                                            }
                                                            displayType={"text"}
                                                            thousandSeparator={
                                                                true
                                                            }
                                                            prefix={"$"}
                                                        />
                                                    }
                                                    {")"}
                                                </ChoiceHeader>
                                                <DeliveryWrapper>
                                                    3 Months / Extended Time
                                                    <br></br>
                                                    distance of delivery?
                                                </DeliveryWrapper>
                                            </ChoiceWrapper>
                                            <ChoiceWrapper>
                                                <input
                                                    type="radio"
                                                    id="cPlanes"
                                                    name="Option"
                                                    value="cPlanes"
                                                    onChange={updateChoice}
                                                />
                                                <ChoiceHeader for="cPlanes">
                                                    Cargo planes{" ("}
                                                    {
                                                        <NumberFormat
                                                            value={
                                                                user.cargoPlaneValue
                                                            }
                                                            displayType={"text"}
                                                            thousandSeparator={
                                                                true
                                                            }
                                                            prefix={"$"}
                                                        />
                                                    }
                                                    {")"}
                                                </ChoiceHeader>
                                                <DeliveryWrapper>
                                                    2 Weeks / Short Time
                                                    <br></br>
                                                    distance of delivery?
                                                </DeliveryWrapper>
                                            </ChoiceWrapper>
                                            <ChoiceWrapper>
                                                <input
                                                    type="radio"
                                                    id="cShips"
                                                    name="Option"
                                                    value="cShips"
                                                    onChange={updateChoice}
                                                />
                                                <ChoiceHeader for="cShips">
                                                    Cargo Ships{" ("}
                                                    {
                                                        <NumberFormat
                                                            value={
                                                                user.cargoShipValue
                                                            }
                                                            displayType={"text"}
                                                            thousandSeparator={
                                                                true
                                                            }
                                                            prefix={"$"}
                                                        />
                                                    }
                                                    {")"}
                                                </ChoiceHeader>
                                                <DeliveryWrapper>
                                                    12 Days / Short Time
                                                    <br></br>
                                                    distance of delivery?
                                                </DeliveryWrapper>
                                            </ChoiceWrapper>
                                            <ChoiceWrapper>
                                                <input
                                                    type="radio"
                                                    id="drones"
                                                    name="Option"
                                                    value="drones"
                                                    onChange={updateChoice}
                                                />
                                                <ChoiceHeader for="drones">
                                                    Drones{" ("}
                                                    {
                                                        <NumberFormat
                                                            value={
                                                                user.dronesValue
                                                            }
                                                            displayType={"text"}
                                                            thousandSeparator={
                                                                true
                                                            }
                                                            prefix={"$"}
                                                        />
                                                    }
                                                    {")"}
                                                </ChoiceHeader>
                                                <DeliveryWrapper>
                                                    Unknown Speed
                                                    <br></br>
                                                    Local Delivery
                                                </DeliveryWrapper>
                                            </ChoiceWrapper>
                                            <ChoiceWrapper>
                                                <input
                                                    type="radio"
                                                    id="electricVehicle"
                                                    name="Option"
                                                    value="electricVehicle"
                                                    onChange={updateChoice}
                                                />
                                                <ChoiceHeader for="electricVehicle">
                                                    Electric Vehicles{" ("}
                                                    {
                                                        <NumberFormat
                                                            value={
                                                                user.electricValue
                                                            }
                                                            displayType={"text"}
                                                            thousandSeparator={
                                                                true
                                                            }
                                                            prefix={"$"}
                                                        />
                                                    }
                                                    {")"}
                                                </ChoiceHeader>
                                                <DeliveryWrapper>
                                                    Unknown Speed
                                                    <br></br>
                                                    Local Delivery
                                                </DeliveryWrapper>
                                            </ChoiceWrapper>
                                            <ChoiceWrapper>
                                                <input
                                                    type="radio"
                                                    id="truck"
                                                    name="Option"
                                                    value="truck"
                                                    onChange={updateChoice}
                                                />
                                                <ChoiceHeader for="truck">
                                                    Trucks{" ("}
                                                    {
                                                        <NumberFormat
                                                            value={
                                                                user.trucksValue
                                                            }
                                                            displayType={"text"}
                                                            thousandSeparator={
                                                                true
                                                            }
                                                            prefix={"$"}
                                                        />
                                                    }
                                                    {")"}
                                                </ChoiceHeader>
                                                <DeliveryWrapper>
                                                    Unknown Speed
                                                    <br></br>
                                                    Local Delivery
                                                </DeliveryWrapper>
                                            </ChoiceWrapper>
                                        </form>
                                    </SegmentWrapper>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </FormWrapper>
            </GameWrapper>
            <ButtonWrapper>
                <Button
                    content="Continue to Customer relationship"
                    primary
                    onClick={submitChoice}
                />
            </ButtonWrapper>
            <Footer />
        </>
    );
};

// const Step3 = () => {

// };

export default Step3;

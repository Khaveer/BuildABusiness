import React, { useContext, useState } from "react";
import { Button, Grid, Segment, Image } from "semantic-ui-react";

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
const ImageWrapper = styled.div`
    padding-top: 2em;
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
`;

const ChoiceHeader = styled.label`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    margin-top: 0px;
    font-size: 1em;
    padding-left: 1em;
`;

const ChoiceWrapper = styled.div`
    padding-top: -2em;
    padding-bottom: 2em;
`;

const LastChoiceWrapper = styled.div`
    padding-bottom: 0em;
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

    let truckChoice = true;
    let trainChoice = true;
    let planeChoice = true;
    let shipChoice = true;
    let droneChoice = true;
    let evChoice = true;

    let amountSpent = user.step1Spent + parseInt(user.step2Spent);

    if (user.maxiumValue - (amountSpent + user.trucksValue) <= 0) {
        truckChoice = false;
    }
    if (user.maxiumValue - (amountSpent + user.trainValue) <= 0) {
        trainChoice = false;
    }
    if (user.maxiumValue - (amountSpent + user.cargoPlaneValue) <= 0) {
        planeChoice = false;
    }
    if (user.maxiumValue - (amountSpent + user.cargoShipValue) <= 0) {
        shipChoice = false;
    }
    if (user.maxiumValue - (amountSpent + user.dronesValue) <= 0) {
        droneChoice = false;
    }
    if (user.maxiumValue - (amountSpent + user.electricValue) <= 0) {
        evChoice = false;
    }

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
            default:
                break;
        }
        setUser((preState) => ({
            ...preState,
            step3Spent: money,
            step3Cost: addCost,
        }));
    };

    const submitChoice = () => {
        console.log(decsion);

        if (decsion !== "null") {
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
                                <ImageWrapper>
                                    {decsion === "null" && (
                                        <Image src={BaseMap} />
                                    )}
                                    {decsion === "cPlanes" && (
                                        <Image src={CPlanes} />
                                    )}
                                    {decsion === "cShips" && (
                                        <Image src={CBoats} />
                                    )}
                                    {decsion === "drones" && (
                                        <Image src={Drones} />
                                    )}
                                    {decsion === "truck" && <Image src={TA} />}
                                    {decsion === "train" && (
                                        <Image src={Train} />
                                    )}
                                    {decsion === "electricVehicle" && (
                                        <Image src={EV} />
                                    )}
                                </ImageWrapper>
                            </Grid.Column>
                            <Grid.Column computer={4} mobile={16}>
                                <Segment>
                                    <SegmentWrapper>
                                        <form>
                                            <ChoiceWrapper>
                                                {trainChoice === false ? (
                                                    <>
                                                        <input
                                                            type="radio"
                                                            id="train"
                                                            name="Option"
                                                            value="train"
                                                            disabled
                                                        />
                                                        <ChoiceHeader for="train">
                                                            Train{" ("}
                                                            {
                                                                <NumberFormat
                                                                    value={
                                                                        user.trainValue
                                                                    }
                                                                    displayType={
                                                                        "text"
                                                                    }
                                                                    thousandSeparator={
                                                                        true
                                                                    }
                                                                    prefix={"$"}
                                                                />
                                                            }
                                                            {")"}
                                                        </ChoiceHeader>
                                                        <DeliveryWrapper>
                                                            3 Months / Extended
                                                            Time
                                                            <br></br>
                                                            Local delivery
                                                        </DeliveryWrapper>
                                                    </>
                                                ) : (
                                                    <>
                                                        <input
                                                            type="radio"
                                                            id="train"
                                                            name="Option"
                                                            value="train"
                                                            onChange={
                                                                updateChoice
                                                            }
                                                        />
                                                        <ChoiceHeader for="train">
                                                            Train{" ("}
                                                            {
                                                                <NumberFormat
                                                                    value={
                                                                        user.trainValue
                                                                    }
                                                                    displayType={
                                                                        "text"
                                                                    }
                                                                    thousandSeparator={
                                                                        true
                                                                    }
                                                                    prefix={"$"}
                                                                />
                                                            }
                                                            {")"}
                                                        </ChoiceHeader>
                                                        <DeliveryWrapper>
                                                            3 Months / Extended
                                                            Time
                                                            <br></br>
                                                            Local delivery
                                                        </DeliveryWrapper>
                                                    </>
                                                )}
                                            </ChoiceWrapper>
                                            <ChoiceWrapper>
                                                {planeChoice === false ? (
                                                    <>
                                                        <input
                                                            type="radio"
                                                            id="cPlanes"
                                                            name="Option"
                                                            value="cPlanes"
                                                            disabled
                                                        />
                                                        <ChoiceHeader for="cPlanes">
                                                            Cargo planes
                                                            {" ("}
                                                            {
                                                                <NumberFormat
                                                                    value={
                                                                        user.cargoPlaneValue
                                                                    }
                                                                    displayType={
                                                                        "text"
                                                                    }
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
                                                            International
                                                            delivery
                                                        </DeliveryWrapper>
                                                    </>
                                                ) : (
                                                    <>
                                                        <input
                                                            type="radio"
                                                            id="cPlanes"
                                                            name="Option"
                                                            value="cPlanes"
                                                            onChange={
                                                                updateChoice
                                                            }
                                                        />
                                                        <ChoiceHeader for="cPlanes">
                                                            Cargo planes
                                                            {" ("}
                                                            {
                                                                <NumberFormat
                                                                    value={
                                                                        user.cargoPlaneValue
                                                                    }
                                                                    displayType={
                                                                        "text"
                                                                    }
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
                                                            International
                                                            delivery
                                                        </DeliveryWrapper>
                                                    </>
                                                )}
                                            </ChoiceWrapper>
                                            <ChoiceWrapper>
                                                {shipChoice === false ? (
                                                    <>
                                                        <input
                                                            type="radio"
                                                            id="cShips"
                                                            name="Option"
                                                            value="cShips"
                                                            disabled
                                                        />
                                                        <ChoiceHeader for="cShips">
                                                            Cargo Ships
                                                            {" ("}
                                                            {
                                                                <NumberFormat
                                                                    value={
                                                                        user.cargoShipValue
                                                                    }
                                                                    displayType={
                                                                        "text"
                                                                    }
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
                                                            International
                                                            delivery
                                                        </DeliveryWrapper>
                                                    </>
                                                ) : (
                                                    <>
                                                        <input
                                                            type="radio"
                                                            id="cShips"
                                                            name="Option"
                                                            value="cShips"
                                                            onChange={
                                                                updateChoice
                                                            }
                                                        />
                                                        <ChoiceHeader for="cShips">
                                                            Cargo Ships
                                                            {" ("}
                                                            {
                                                                <NumberFormat
                                                                    value={
                                                                        user.cargoShipValue
                                                                    }
                                                                    displayType={
                                                                        "text"
                                                                    }
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
                                                            International
                                                            delivery
                                                        </DeliveryWrapper>
                                                    </>
                                                )}
                                            </ChoiceWrapper>
                                            <ChoiceWrapper>
                                                {droneChoice === false ? (
                                                    <>
                                                        <input
                                                            type="radio"
                                                            id="drones"
                                                            name="Option"
                                                            value="drones"
                                                            disabled
                                                        />
                                                        <ChoiceHeader for="drones">
                                                            Drones{" ("}
                                                            {
                                                                <NumberFormat
                                                                    value={
                                                                        user.dronesValue
                                                                    }
                                                                    displayType={
                                                                        "text"
                                                                    }
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
                                                    </>
                                                ) : (
                                                    <>
                                                        <input
                                                            type="radio"
                                                            id="drones"
                                                            name="Option"
                                                            value="drones"
                                                            onChange={
                                                                updateChoice
                                                            }
                                                        />
                                                        <ChoiceHeader for="drones">
                                                            Drones{" ("}
                                                            {
                                                                <NumberFormat
                                                                    value={
                                                                        user.dronesValue
                                                                    }
                                                                    displayType={
                                                                        "text"
                                                                    }
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
                                                    </>
                                                )}
                                            </ChoiceWrapper>
                                            <ChoiceWrapper>
                                                {evChoice === false ? (
                                                    <>
                                                        <input
                                                            type="radio"
                                                            id="electricVehicle"
                                                            name="Option"
                                                            value="electricVehicle"
                                                            disabled
                                                        />
                                                        <ChoiceHeader for="electricVehicle">
                                                            Electric Vehicles
                                                            {" ("}
                                                            {
                                                                <NumberFormat
                                                                    value={
                                                                        user.electricValue
                                                                    }
                                                                    displayType={
                                                                        "text"
                                                                    }
                                                                    thousandSeparator={
                                                                        true
                                                                    }
                                                                    prefix={"$"}
                                                                />
                                                            }
                                                            {")"}
                                                        </ChoiceHeader>
                                                        <DeliveryWrapper>
                                                            1 Week
                                                            <br></br>
                                                            Local Delivery
                                                        </DeliveryWrapper>
                                                    </>
                                                ) : (
                                                    <>
                                                        <input
                                                            type="radio"
                                                            id="electricVehicle"
                                                            name="Option"
                                                            value="electricVehicle"
                                                            onChange={
                                                                updateChoice
                                                            }
                                                        />
                                                        <ChoiceHeader for="electricVehicle">
                                                            Electric Vehicles
                                                            {" ("}
                                                            {
                                                                <NumberFormat
                                                                    value={
                                                                        user.electricValue
                                                                    }
                                                                    displayType={
                                                                        "text"
                                                                    }
                                                                    thousandSeparator={
                                                                        true
                                                                    }
                                                                    prefix={"$"}
                                                                />
                                                            }
                                                            {")"}
                                                        </ChoiceHeader>
                                                        <DeliveryWrapper>
                                                            1 Week
                                                            <br></br>
                                                            Local Delivery
                                                        </DeliveryWrapper>
                                                    </>
                                                )}
                                            </ChoiceWrapper>
                                            <LastChoiceWrapper>
                                                {truckChoice === false ? (
                                                    <>
                                                        <input
                                                            type="radio"
                                                            id="truck"
                                                            name="Option"
                                                            value="truck"
                                                            disabled
                                                        />
                                                        <ChoiceHeader for="truck">
                                                            Trucks{" ("}
                                                            {
                                                                <NumberFormat
                                                                    value={
                                                                        user.trucksValue
                                                                    }
                                                                    displayType={
                                                                        "text"
                                                                    }
                                                                    thousandSeparator={
                                                                        true
                                                                    }
                                                                    prefix={"$"}
                                                                />
                                                            }
                                                            {")"}
                                                        </ChoiceHeader>
                                                        <DeliveryWrapper>
                                                            1 Week
                                                            <br></br>
                                                            Local Delivery
                                                        </DeliveryWrapper>
                                                    </>
                                                ) : (
                                                    <>
                                                        <input
                                                            type="radio"
                                                            id="truck"
                                                            name="Option"
                                                            value="truck"
                                                            onChange={
                                                                updateChoice
                                                            }
                                                        />
                                                        <ChoiceHeader for="truck">
                                                            Trucks{" ("}
                                                            {
                                                                <NumberFormat
                                                                    value={
                                                                        user.trucksValue
                                                                    }
                                                                    displayType={
                                                                        "text"
                                                                    }
                                                                    thousandSeparator={
                                                                        true
                                                                    }
                                                                    prefix={"$"}
                                                                />
                                                            }
                                                            {")"}
                                                        </ChoiceHeader>
                                                        <DeliveryWrapper>
                                                            1 Week
                                                            <br></br>
                                                            Local Delivery
                                                        </DeliveryWrapper>
                                                    </>
                                                )}
                                            </LastChoiceWrapper>
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

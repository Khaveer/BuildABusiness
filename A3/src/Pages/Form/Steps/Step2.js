import React, { useState, useContext } from "react";
import { Grid, Image, Button, Popup } from "semantic-ui-react";

import { Link } from "react-router-dom";

import styled from "styled-components";

import NumberFormat from "react-number-format";

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

const GameWrapper = styled.div`
    padding-top: 5em;
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

const ImageHover = styled.img`
    width: 70%;
    filter: saturate(0);
    &:hover {
        filter: saturate(1);
    }
`;

const SelectedImage = styled.img`
    width: 70%;
`;

const StrongText = styled.b`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 1em;
    line-height: 2em;
    word-wrap: break-word;
    text-align: left;
`;

const Step2 = () => {
    const [user, setUser] = useContext(UserContext);
    const [decsion, setDecsion] = useState("null");
    const [stepUpdate] = useState(3);
    const [result, setResult] = useState();

    const updateChoice = (e) => {
        setDecsion(e.target.name);

        let money;
        let addCost;
        switch (e.target.name) {
            case "europeNA":
                money = user.europeNAValue;
                addCost = 3;
                setResult(3);
                break;
            case "latinAmerica":
                money = user.LatinAmericValue;
                addCost = 2;
                setResult(2);
                break;
            case "eastEurope":
                money = user.eastEuropeValue;
                addCost = 1;
                setResult(1);
                break;
            case "midEast":
                money = user.midEastValue;
                addCost = 1;
                setResult(1);
                break;
            case "asia":
                money = user.asiaValue;
                addCost = 1;
                setResult(1);
                break;
            case "pacfic":
                money = user.pacficValue;
                addCost = 3;
                setResult(3);
                break;
            case "africa":
                money = user.africaValue;
                addCost = 1;
                setResult(1);
                break;
        }

        setUser((preState) => ({
            ...preState,
            step2Spent: money,
            step2Cost: addCost,
        }));
    };

    const submitChoice = () => {
        if (decsion != "null") {
            setUser((preState) => ({
                ...preState,
                step2: decsion,
                current: stepUpdate,
                resultState2: result,
            }));
        }
    };

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
                                content="Office in Europe with High standards"
                                header={
                                    <>
                                        <StrongText>
                                            <NumberFormat
                                                value={user.europeNAValue}
                                                displayType={"text"}
                                                thousandSeparator={true}
                                                prefix={"$"}
                                            />
                                        </StrongText>
                                    </>
                                }
                                trigger={
                                    decsion === "europeNA" ? (
                                        <SelectedImage
                                            src={europeNA}
                                            size="small"
                                            centered
                                        />
                                    ) : (
                                        <ImageHover
                                            name="europeNA"
                                            src={europeNA}
                                            size="small"
                                            centered
                                            onClick={updateChoice}
                                        />
                                    )
                                }
                            />
                        </Grid.Column>
                        <Grid.Column mobile={16} computer={4}>
                            <Popup
                                content="Cost effective option located in central or south america"
                                header={
                                    <>
                                        <StrongText>
                                            <NumberFormat
                                                value={user.LatinAmericValue}
                                                displayType={"text"}
                                                thousandSeparator={true}
                                                prefix={"$"}
                                            />
                                        </StrongText>
                                    </>
                                }
                                trigger={
                                    decsion === "latinAmerica" ? (
                                        <SelectedImage
                                            src={latinAmerica}
                                            size="small"
                                            centered
                                        />
                                    ) : (
                                        <ImageHover
                                            name="latinAmerica"
                                            src={latinAmerica}
                                            size="small"
                                            centered
                                            onClick={updateChoice}
                                        />
                                    )
                                }
                            />
                        </Grid.Column>
                        <Grid.Column mobile={16} computer={4}>
                            <Popup
                                content="Located in Eastern Europe, standards are unknown"
                                header={
                                    <>
                                        <StrongText>
                                            <NumberFormat
                                                value={user.eastEuropeValue}
                                                displayType={"text"}
                                                thousandSeparator={true}
                                                prefix={"$"}
                                            />
                                        </StrongText>
                                    </>
                                }
                                trigger={
                                    decsion === "eastEurope" ? (
                                        <SelectedImage
                                            src={eastEurope}
                                            size="small"
                                            centered
                                        />
                                    ) : (
                                        <ImageHover
                                            name="eastEurope"
                                            src={eastEurope}
                                            size="small"
                                            centered
                                            onClick={updateChoice}
                                        />
                                    )
                                }
                            />
                        </Grid.Column>
                        <Grid.Column mobile={16} computer={4}>
                            <Popup
                                content="Manufacturing in the Middle East or North Africa. Facility standards are unknown"
                                header={
                                    <>
                                        <StrongText>
                                            <NumberFormat
                                                value={user.midEastValue}
                                                displayType={"text"}
                                                thousandSeparator={true}
                                                prefix={"$"}
                                            />
                                        </StrongText>
                                    </>
                                }
                                trigger={
                                    decsion === "midEast" ? (
                                        <SelectedImage
                                            src={midEast}
                                            size="small"
                                            centered
                                        />
                                    ) : (
                                        <ImageHover
                                            name="midEast"
                                            src={midEast}
                                            size="small"
                                            centered
                                            onClick={updateChoice}
                                        />
                                    )
                                }
                            />
                        </Grid.Column>
                        <Grid.Column mobile={16} computer={4}>
                            <Popup
                                content="Operations located in Asia. Has a high output but location standards are unknown."
                                header={
                                    <>
                                        <StrongText>
                                            <NumberFormat
                                                value={user.asiaValue}
                                                displayType={"text"}
                                                thousandSeparator={true}
                                                prefix={"$"}
                                            />
                                        </StrongText>
                                    </>
                                }
                                trigger={
                                    decsion === "asia" ? (
                                        <SelectedImage
                                            src={asia}
                                            size="small"
                                            centered
                                        />
                                    ) : (
                                        <ImageHover
                                            name="asia"
                                            src={asia}
                                            size="small"
                                            centered
                                            onClick={updateChoice}
                                        />
                                    )
                                }
                            />
                        </Grid.Column>
                        <Grid.Column mobile={16} computer={4}>
                            <Popup
                                content="Located in the Pacific. Location holds a high standard. "
                                header={
                                    <>
                                        <StrongText>
                                            <NumberFormat
                                                value={user.pacficValue}
                                                displayType={"text"}
                                                thousandSeparator={true}
                                                prefix={"$"}
                                            />
                                        </StrongText>
                                    </>
                                }
                                trigger={
                                    decsion === "pacfic" ? (
                                        <SelectedImage
                                            src={pacfic}
                                            size="small"
                                            centered
                                        />
                                    ) : (
                                        <ImageHover
                                            name="pacfic"
                                            src={pacfic}
                                            size="small"
                                            centered
                                            onClick={updateChoice}
                                        />
                                    )
                                }
                            />
                        </Grid.Column>
                        <Grid.Column mobile={16} computer={4}>
                            <Popup
                                content="Facility located in Central or South Africa. Standards are unknown."
                                header={
                                    <>
                                        <StrongText>
                                            <NumberFormat
                                                value={user.asiaValue}
                                                displayType={"text"}
                                                thousandSeparator={true}
                                                prefix={"$"}
                                            />
                                        </StrongText>
                                    </>
                                }
                                trigger={
                                    decsion === "africa" ? (
                                        <SelectedImage
                                            src={africa}
                                            size="small"
                                            centered
                                        />
                                    ) : (
                                        <ImageHover
                                            name="africa"
                                            src={africa}
                                            size="small"
                                            centered
                                            onClick={updateChoice}
                                        />
                                    )
                                }
                            />
                        </Grid.Column>
                    </Grid>
                </FormWrapper>
            </GameWrapper>
            <ButtonWrapper>
                <Button
                    content="Continue to Logistics"
                    primary
                    onClick={submitChoice}
                />
            </ButtonWrapper>
            <Footer />
        </>
    );
};

export default Step2;

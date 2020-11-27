import React, { useState, useContext } from "react";
import { Grid, Button, Popup } from "semantic-ui-react";

import styled from "styled-components";

import NumberFormat from "react-number-format";

import GameInfo from "./components/GameInfo";
import FormHeader from "../../components/HeaderV2";
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
    padding-left: 0.5em;
`;

const FormWrapper = styled.div`
    display: inline-block;
    margin-top: 2em;
`;

const ButtonWrapper = styled.div`
    display: flex;
    position: fixed;
    bottom: 5em;
    padding-right: 3em;
    width: 100%;
    justify-content: flex-end;
`;

const ImageHover = styled.img`
    width: 70%;
    display: block;
    margin-left: auto;
    margin-right: auto;

    filter: saturate(0);
    &:hover {
        filter: saturate(1);
    }
`;

const SelectedImage = styled.img`
    width: 70%;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

const StrongText = styled.b`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 1em;
    line-height: 2em;
    word-wrap: break-word;
    text-align: left;
`;

const ImageWrapper = styled.div`
    width: 100%;
`;

const Spacer = styled.div`
    height: 7em;
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
            default:
                break;
        }

        setUser((preState) => ({
            ...preState,
            step2Spent: money,
            step2Cost: addCost,
        }));
    };

    const submitChoice = () => {
        if (decsion !== "null") {
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
                <Grid>
                    <Grid.Column computer={3} mobile={16}>
                        <InfoWrapper>
                            <GameInfo />
                        </InfoWrapper>
                    </Grid.Column>
                    <Grid.Column computer={13} mobile={16}>
                        <FormWrapper>
                            <Grid centered>
                                <Grid.Column mobile={16} computer={4} centered>
                                    {user.step1Spent === 1000000 ? (
                                        <Popup
                                            content="If you picked Europe your choice would result in you not being able to complete your business model"
                                            header={
                                                <>
                                                    <StrongText>
                                                        Invalid Choice
                                                    </StrongText>
                                                </>
                                            }
                                            trigger={
                                                <ImageHover
                                                    name="europeNA"
                                                    src={europeNA}
                                                    size="small"
                                                    centered
                                                />
                                            }
                                        />
                                    ) : (
                                        <Popup
                                            content="Office in Europe with High standards"
                                            header={
                                                <>
                                                    <StrongText>
                                                        <NumberFormat
                                                            value={
                                                                user.europeNAValue
                                                            }
                                                            displayType={"text"}
                                                            thousandSeparator={
                                                                true
                                                            }
                                                            prefix={"$"}
                                                        />
                                                    </StrongText>
                                                </>
                                            }
                                            trigger={
                                                decsion === "europeNA" ? (
                                                    <ImageWrapper>
                                                        <SelectedImage
                                                            src={europeNA}
                                                            size="small"
                                                            centered
                                                        />
                                                    </ImageWrapper>
                                                ) : (
                                                    <ImageWrapper>
                                                        <ImageHover
                                                            name="europeNA"
                                                            src={europeNA}
                                                            size="small"
                                                            centered
                                                            onClick={
                                                                updateChoice
                                                            }
                                                        />
                                                    </ImageWrapper>
                                                )
                                            }
                                        />
                                    )}
                                </Grid.Column>
                                <Grid.Column mobile={16} computer={4}>
                                    <Popup
                                        content="Cost effective option located in central or south america"
                                        header={
                                            <>
                                                <StrongText>
                                                    <NumberFormat
                                                        value={
                                                            user.LatinAmericValue
                                                        }
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
                                                        value={
                                                            user.eastEuropeValue
                                                        }
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
                                                        value={
                                                            user.midEastValue
                                                        }
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
                                    {user.step1Spent === 1000000 ? (
                                        <Popup
                                            content="Choosing the pacific would take your business into bankruptcy!"
                                            header={
                                                <>
                                                    <StrongText>
                                                        Invalid Choice
                                                    </StrongText>
                                                </>
                                            }
                                            trigger={
                                                <ImageHover
                                                    name="pacfic"
                                                    src={pacfic}
                                                    size="small"
                                                    centered
                                                />
                                            }
                                        />
                                    ) : (
                                        <Popup
                                            content="Located in the Pacific. Location holds a high standard. "
                                            header={
                                                <>
                                                    <StrongText>
                                                        <NumberFormat
                                                            value={
                                                                user.pacficValue
                                                            }
                                                            displayType={"text"}
                                                            thousandSeparator={
                                                                true
                                                            }
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
                                    )}
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
                                <Grid.Column only="mobile" mobile={16}>
                                    <Spacer />
                                </Grid.Column>
                            </Grid>
                        </FormWrapper>
                    </Grid.Column>
                </Grid>
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

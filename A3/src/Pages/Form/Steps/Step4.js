import React, { useState, useContext } from "react";
import { Segment, Grid, Button, Image, Label } from "semantic-ui-react";

import { Link } from "react-router-dom";

import styled from "styled-components";

import GameInfo from "./components/GameInfo";
import FormHeader from "../../components/Header";
import Footer from "../Footer";

import { UserContext } from "../../components/UserContext";

import TV from "../../../Assets/FromAssests/Step4/TV.png";
import OnlineAds from "../../../Assets/FromAssests/Step4/OnlineAds.png";
import Banners from "../../../Assets/FromAssests/Step4/Banners.png";
import Influncers from "../../../Assets/FromAssests/Step4/Influencers.png";

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
    color: rgba(0, 0, 0, 0.56);
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
    width: 25%;
`;

const InfoText = styled.p`
    padding-top: 1em;
`;

const SliderWrapper = styled.div`
    width: 75%;
    padding: 0px;
    display: inline-block;
    vertical-align: middle;
`;

const Slider = styled.input`
    width: 100%;
    vertical-align: middle;
`;

const LabelWrapper = styled.div`
    margin: 0px;
    display: inline-block;
    padding-left: 5%;
    vertical-align: middle;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 5em;
    padding-right: 2em;
`;

const Step4 = () => {
    const [TVAmount, setTv] = useState("");
    const [OnlineAdsAmount, setAds] = useState("");
    const [BannersAmount, setBanners] = useState("");
    const [InfluncersAmount, setInfluncers] = useState("");
    const [user, setUser] = useContext(UserContext);

    const updateTV = (e) => {
        setTv(e.target.value);
    };
    const updateAds = (e) => {
        setAds(e.target.value);
    };
    const updateBanners = (e) => {
        setBanners(e.target.value);
    };
    const updateInfluncers = (e) => {
        setInfluncers(e.target.value);
    };

    const submitChoice = (e) => {
        e.preventDefault();
        //setUser((preState) => [...preState, { step1: decsion }]);
    };

    console.log(user);
    console.log("TV " + TVAmount);
    console.log("OnlineAds " + OnlineAdsAmount);
    console.log("Banners " + BannersAmount);
    console.log("Influncers " + InfluncersAmount);

    let balance = user.money.maxiumValue - user.money.amountSpent;

    return (
        <>
            <FormHeader pageNumber={4} />
            <GameWrapper>
                <InfoWrapper>
                    <GameInfo />
                </InfoWrapper>
                <FormWrapper>
                    <form>
                        <Grid>
                            <Grid.Column mobile={16} computer={8}>
                                <Segment.Group>
                                    <Segment>
                                        <ChoicetextWrapper>
                                            <ChoiceHeader>
                                                TV Commericals
                                            </ChoiceHeader>
                                            <InfoText>
                                                Your commpaines ads will show on
                                                local tv stations.
                                            </InfoText>
                                        </ChoicetextWrapper>
                                        <ChoiceImage>
                                            <Image src={TV} />
                                        </ChoiceImage>
                                    </Segment>
                                    <Segment>
                                        <div>
                                            <SliderWrapper>
                                                <Slider
                                                    type="range"
                                                    min="0"
                                                    max={balance}
                                                    onChange={updateTV}
                                                />
                                            </SliderWrapper>
                                            <LabelWrapper>
                                                {TVAmount > 0 && (
                                                    <Label
                                                        as="a"
                                                        size={"large"}
                                                        color={"orange"}
                                                    >
                                                        ${TVAmount}
                                                    </Label>
                                                )}
                                                {TVAmount === 0 && (
                                                    <Label
                                                        as="a"
                                                        size={"large"}
                                                    >
                                                        ${TVAmount}
                                                    </Label>
                                                )}
                                            </LabelWrapper>
                                        </div>
                                    </Segment>
                                </Segment.Group>
                            </Grid.Column>
                            <Grid.Column mobile={16} computer={8}>
                                <Segment.Group>
                                    <Segment>
                                        <ChoicetextWrapper>
                                            <ChoiceHeader>
                                                Online Ads
                                            </ChoiceHeader>
                                            <InfoText>
                                                Your commpaines ads will show on
                                                Facebook and google.
                                            </InfoText>
                                        </ChoicetextWrapper>
                                        <ChoiceImage>
                                            <Image src={OnlineAds} />
                                        </ChoiceImage>
                                    </Segment>
                                    <Segment>
                                        <div>
                                            <SliderWrapper>
                                                <Slider
                                                    type="range"
                                                    min="0"
                                                    max={balance}
                                                    onChange={updateAds}
                                                />
                                            </SliderWrapper>
                                            <LabelWrapper>
                                                {OnlineAdsAmount > 0 && (
                                                    <Label
                                                        as="a"
                                                        size={"large"}
                                                        color={"orange"}
                                                    >
                                                        ${OnlineAdsAmount}
                                                    </Label>
                                                )}
                                                {OnlineAdsAmount === 0 && (
                                                    <Label
                                                        as="a"
                                                        size={"large"}
                                                    >
                                                        ${OnlineAdsAmount}
                                                    </Label>
                                                )}
                                            </LabelWrapper>
                                        </div>
                                    </Segment>
                                </Segment.Group>
                            </Grid.Column>
                            <Grid.Column mobile={16} computer={8}>
                                <Segment.Group>
                                    <Segment>
                                        <ChoicetextWrapper>
                                            <ChoiceHeader>Banners</ChoiceHeader>
                                            <InfoText>
                                                Your commpaines ads will show on
                                                roads within your state.
                                            </InfoText>
                                        </ChoicetextWrapper>
                                        <ChoiceImage>
                                            <Image src={Banners} />
                                        </ChoiceImage>
                                    </Segment>
                                    <Segment>
                                        <div>
                                            <SliderWrapper>
                                                <Slider
                                                    type="range"
                                                    min="0"
                                                    max={balance}
                                                    onChange={updateBanners}
                                                />
                                            </SliderWrapper>
                                            <LabelWrapper>
                                                {BannersAmount > 0 && (
                                                    <Label
                                                        as="a"
                                                        size={"large"}
                                                        color={"orange"}
                                                    >
                                                        ${BannersAmount}
                                                    </Label>
                                                )}
                                                {BannersAmount === 0 && (
                                                    <Label
                                                        as="a"
                                                        size={"large"}
                                                    >
                                                        ${BannersAmount}
                                                    </Label>
                                                )}
                                            </LabelWrapper>
                                        </div>
                                    </Segment>
                                </Segment.Group>
                            </Grid.Column>
                            <Grid.Column mobile={16} computer={8}>
                                <Segment.Group>
                                    <Segment>
                                        <ChoicetextWrapper>
                                            <ChoiceHeader>
                                                Influncers
                                            </ChoiceHeader>
                                            <InfoText>
                                                Your commpany will be promoted
                                                by influncers online.
                                            </InfoText>
                                        </ChoicetextWrapper>
                                        <ChoiceImage>
                                            <Image src={Influncers} />
                                        </ChoiceImage>
                                    </Segment>
                                    <Segment>
                                        <div>
                                            <SliderWrapper>
                                                <Slider
                                                    type="range"
                                                    min="0"
                                                    max={balance}
                                                    onChange={updateInfluncers}
                                                />
                                            </SliderWrapper>
                                            <LabelWrapper>
                                                {InfluncersAmount > 0 && (
                                                    <Label
                                                        as="a"
                                                        size={"large"}
                                                        color={"orange"}
                                                    >
                                                        ${InfluncersAmount}
                                                    </Label>
                                                )}
                                                {InfluncersAmount === 0 && (
                                                    <Label
                                                        as="a"
                                                        size={"large"}
                                                    >
                                                        ${InfluncersAmount}
                                                    </Label>
                                                )}
                                            </LabelWrapper>
                                        </div>
                                    </Segment>
                                </Segment.Group>
                            </Grid.Column>
                        </Grid>
                    </form>
                </FormWrapper>
            </GameWrapper>
            <ButtonWrapper>
                <Link to="/results">
                    <Button content="Continue to Result" primary />
                </Link>
            </ButtonWrapper>
            <Footer />
        </>
    );
};

export default Step4;

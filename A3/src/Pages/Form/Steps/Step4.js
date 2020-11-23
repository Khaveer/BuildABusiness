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
    position: absolute;
    bottom: 5em;
    padding-right: 3em;
    width: 100%;
    justify-content: flex-end;
`;

const PercentWrapper = styled.div`
    width: 75%;
    padding: 0px;
    display: inline-block;
    vertical-align: middle;
    float: left;
`;

const PercentLabelWrapper = styled.div`
    margin: 0px;
    display: inline-block;
    padding-left: 2%;
    vertical-align: middle;
    float: left;
`;

const PercentHeader = styled.h2`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    margin-top: 0px;
    font-size: 1em;
    padding-left: 1em;
    text-align: left;
`;

const Step4 = () => {
    const [TVAmount, setTv] = useState(0);
    const [OnlineAdsAmount, setAds] = useState(0);
    const [BannersAmount, setBanners] = useState(0);
    const [InfluncersAmount, setInfluncers] = useState(0);
    const [MarkUp, setMarkUp] = useState(0);
    const [user, setUser] = useContext(UserContext);

    const updateTV = (e) => {
        setTv(e.target.value);
        console.log(e.target.value);

        let TVMoney = parseInt(TVAmount);

        // let money = user.tvMoneySpent + TVAmount;

        setUser((preState) => ({
            ...preState,
            tvMoneySpent: TVMoney,
        }));
    };
    const updateAds = (e) => {
        setAds(e.target.value);

        let OnlineMoney = parseInt(OnlineAdsAmount);

        setUser((preState) => ({
            ...preState,
            onlineMoneySpent: OnlineMoney,
        }));
    };
    const updateBanners = (e) => {
        setBanners(e.target.value);

        let BannerMoney = parseInt(BannersAmount);

        setUser((preState) => ({
            ...preState,
            bannerMoneySpent: BannerMoney,
        }));
    };
    const updateInfluncers = (e) => {
        setInfluncers(e.target.value);

        let InfluncerMoney = parseInt(InfluncersAmount);

        setUser((preState) => ({
            ...preState,
            influncersMoneySpent: InfluncerMoney,
        }));
    };

    const updateMarkup = (e) => {
        setMarkUp(e.target.value);
        console.log(e);
    };

    const submitChoice = (e) => {
        e.preventDefault();
        //setUser((preState) => [...preState, { step1: decsion }]);
    };

    console.log(user);
    // console.log("TV " + TVAmount);
    // console.log("OnlineAds " + OnlineAdsAmount);
    // console.log("Banners " + BannersAmount);
    // console.log("Influncers " + InfluncersAmount);

    const amountSpent = user.step1Spent + user.step2Spent + user.step3Spent;

    let balance = user.maxiumValue - amountSpent;

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
                                                    step="10000"
                                                    onChange={updateTV}
                                                    onClick={updateTV}
                                                />
                                            </SliderWrapper>
                                            <LabelWrapper>
                                                {user.tvMoneySpent > 0 && (
                                                    <Label
                                                        pointing="left"
                                                        as="a"
                                                        size={"large"}
                                                        color={"orange"}
                                                    >
                                                        ${user.tvMoneySpent}
                                                    </Label>
                                                )}
                                                {user.tvMoneySpent === 0 && (
                                                    <Label
                                                        pointing="left"
                                                        as="a"
                                                        size={"large"}
                                                    >
                                                        ${user.tvMoneySpent}
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
                                                    step="10000"
                                                    onChange={updateAds}
                                                    onClick={updateAds}
                                                />
                                            </SliderWrapper>
                                            <LabelWrapper>
                                                {user.onlineMoneySpent > 0 && (
                                                    <Label
                                                        pointing="left"
                                                        as="a"
                                                        size={"large"}
                                                        color={"orange"}
                                                    >
                                                        ${user.onlineMoneySpent}
                                                    </Label>
                                                )}
                                                {user.onlineMoneySpent ===
                                                    0 && (
                                                    <Label
                                                        pointing="left"
                                                        as="a"
                                                        size={"large"}
                                                    >
                                                        ${user.onlineMoneySpent}
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
                                                    step="10000"
                                                    onChange={updateBanners}
                                                    onClick={updateBanners}
                                                />
                                            </SliderWrapper>
                                            <LabelWrapper>
                                                {user.bannerMoneySpent > 0 && (
                                                    <Label
                                                        pointing="left"
                                                        as="a"
                                                        size={"large"}
                                                        color={"orange"}
                                                    >
                                                        ${user.bannerMoneySpent}
                                                    </Label>
                                                )}
                                                {user.bannerMoneySpent ===
                                                    0 && (
                                                    <Label
                                                        pointing="left"
                                                        as="a"
                                                        size={"large"}
                                                    >
                                                        ${user.bannerMoneySpent}
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
                                                    step="10000"
                                                    onChange={updateInfluncers}
                                                    onClick={updateInfluncers}
                                                />
                                            </SliderWrapper>
                                            <LabelWrapper>
                                                {user.influncersMoneySpent >
                                                    0 && (
                                                    <Label
                                                        pointing="left"
                                                        as="a"
                                                        size={"large"}
                                                        color={"orange"}
                                                    >
                                                        $
                                                        {
                                                            user.influncersMoneySpent
                                                        }
                                                    </Label>
                                                )}
                                                {user.influncersMoneySpent ===
                                                    0 && (
                                                    <Label
                                                        pointing="left"
                                                        as="a"
                                                        size={"large"}
                                                    >
                                                        $
                                                        {
                                                            user.influncersMoneySpent
                                                        }
                                                    </Label>
                                                )}
                                            </LabelWrapper>
                                        </div>
                                    </Segment>
                                </Segment.Group>
                            </Grid.Column>
                            <Grid.Column computer={16}>
                                <PercentHeader>
                                    Mark up your product
                                </PercentHeader>
                                <div>
                                    <PercentWrapper>
                                        <Slider
                                            type="range"
                                            min="0"
                                            max="100"
                                            step="10"
                                            onChange={updateMarkup}
                                            onClick={updateMarkup}
                                        />
                                    </PercentWrapper>
                                    <PercentLabelWrapper>
                                        <Label
                                            pointing="left"
                                            as="a"
                                            size={"large"}
                                        >
                                            {user.step4Markup}%
                                        </Label>
                                    </PercentLabelWrapper>
                                </div>
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

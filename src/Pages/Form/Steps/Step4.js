import React, { useContext } from "react";
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
`;

const ChoicetextWrapper = styled.div`
    text-align: left;
    float: left;
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
    width: 100%;
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
    position: fixed;
    bottom: 5em;
    padding-right: 3em;
    width: 100%;
    justify-content: flex-end;
`;

const SegmentWrapper = styled.div`
    padding: 2em;
`;

const Spacer = styled.div`
    height: 4em;
`;

const Step4 = () => {
    const [user, setUser] = useContext(UserContext);

    const updateValues = (e) => {
        let Spent =
            user.step1Spent +
            user.step2Spent +
            user.step3Spent +
            user.tvMoneySpent +
            user.onlineMoneySpent +
            user.bannerMoneySpent +
            user.influncersMoneySpent;

        let difference;

        if (user.difference < 0) {
            switch (e.target.name) {
                case "TV":
                    difference =
                        user.maxiumValue -
                        Spent -
                        (user.tvMoneySpent - parseInt(e.target.value));
                    break;
                case "ADS":
                    difference =
                        user.maxiumValue -
                        Spent -
                        (user.onlineMoneySpent - parseInt(e.target.value));
                    break;
                case "Banners":
                    difference =
                        user.maxiumValue -
                        Spent -
                        (user.bannerMoneySpent - parseInt(e.target.value));
                    break;
                case "Influncers":
                    difference =
                        user.maxiumValue -
                        Spent -
                        (user.influncersMoneySpent - parseInt(e.target.value));
                    break;
                default:
                    break;
            }
        } else {
            switch (e.target.name) {
                case "TV":
                    difference =
                        user.maxiumValue -
                        Spent -
                        (parseInt(e.target.value) - user.tvMoneySpent);
                    break;
                case "ADS":
                    difference =
                        user.maxiumValue -
                        Spent -
                        (parseInt(e.target.value) - user.onlineMoneySpent);
                    break;
                case "Banners":
                    difference =
                        user.maxiumValue -
                        Spent -
                        (parseInt(e.target.value) - user.bannerMoneySpent);
                    break;
                case "Influncers":
                    difference =
                        user.maxiumValue -
                        Spent -
                        (parseInt(e.target.value) - user.influncersMoneySpent);
                    break;
                default:
                    break;
            }
        }

        setUser((preState) => ({
            ...preState,
            difference: difference,
        }));

        //let difference = user.maxiumValue - Spent - parseInt(e.target.value);

        let sliderValue = parseInt(e.target.value);

        if (user.difference > 0) {
            switch (e.target.name) {
                case "TV":
                    setUser((preState) => ({
                        ...preState,
                        tvMoneySpent: sliderValue,
                    }));
                    break;
                case "ADS":
                    setUser((preState) => ({
                        ...preState,
                        onlineMoneySpent: sliderValue,
                    }));
                    break;
                case "Banners":
                    setUser((preState) => ({
                        ...preState,
                        bannerMoneySpent: sliderValue,
                    }));
                    break;
                case "Influncers":
                    setUser((preState) => ({
                        ...preState,
                        influncersMoneySpent: sliderValue,
                    }));
                    break;
                default:
                    break;
            }
        } else if (user.difference < 0) {
            switch (e.target.name) {
                case "TV":
                    setUser((preState) => ({
                        ...preState,
                        tvMoneySpent: 0,
                    }));
                    break;
                case "ADS":
                    setUser((preState) => ({
                        ...preState,
                        onlineMoneySpent: 0,
                    }));
                    break;
                case "Banners":
                    setUser((preState) => ({
                        ...preState,
                        bannerMoneySpent: 0,
                    }));
                    break;
                case "Influncers":
                    setUser((preState) => ({
                        ...preState,
                        influncersMoneySpent: 0,
                    }));
                    break;
                default:
                    break;
            }
        }
    };

    const amountSpent = user.step1Spent + user.step2Spent + user.step3Spent;

    let balance = user.maxiumValue - amountSpent;

    return (
        <>
            <FormHeader pageNumber={4} />
            <GameWrapper>
                <Grid>
                    <Grid.Column computer={3} mobile={16} centered>
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
                                            <Segment.Group>
                                                <Segment>
                                                    <Grid>
                                                        <Grid.Column
                                                            computer={10}
                                                        >
                                                            <ChoicetextWrapper>
                                                                <ChoiceHeader>
                                                                    TV
                                                                    Commericals
                                                                </ChoiceHeader>
                                                                <InfoText>
                                                                    Your
                                                                    companies
                                                                    ads will
                                                                    show on
                                                                    local tv
                                                                    stations.
                                                                    You will not
                                                                    have control
                                                                    over the
                                                                    demographic
                                                                    or when the
                                                                    commercial
                                                                    is shown.
                                                                    This method
                                                                    grants you
                                                                    access to a
                                                                    large
                                                                    audience.
                                                                </InfoText>
                                                            </ChoicetextWrapper>
                                                        </Grid.Column>
                                                        <Grid.Column
                                                            computer={6}
                                                        >
                                                            <ChoiceImage>
                                                                <Image
                                                                    src={TV}
                                                                />
                                                            </ChoiceImage>
                                                        </Grid.Column>
                                                    </Grid>
                                                </Segment>
                                                <Segment>
                                                    <div>
                                                        <SliderWrapper>
                                                            <Slider
                                                                name="TV"
                                                                type="range"
                                                                min="0"
                                                                max={balance}
                                                                value={
                                                                    user.tvMoneySpent
                                                                }
                                                                step="10000"
                                                                onChange={
                                                                    updateValues
                                                                }
                                                                onClick={
                                                                    updateValues
                                                                }
                                                            />
                                                        </SliderWrapper>
                                                        <LabelWrapper>
                                                            {user.tvMoneySpent >
                                                                0 && (
                                                                <Label
                                                                    pointing="left"
                                                                    as="a"
                                                                    size={
                                                                        "large"
                                                                    }
                                                                    color={
                                                                        "orange"
                                                                    }
                                                                >
                                                                    $
                                                                    {
                                                                        user.tvMoneySpent
                                                                    }
                                                                </Label>
                                                            )}
                                                            {user.tvMoneySpent ===
                                                                0 && (
                                                                <Label
                                                                    pointing="left"
                                                                    as="a"
                                                                    size={
                                                                        "large"
                                                                    }
                                                                >
                                                                    $
                                                                    {
                                                                        user.tvMoneySpent
                                                                    }
                                                                </Label>
                                                            )}
                                                        </LabelWrapper>
                                                    </div>
                                                </Segment>
                                            </Segment.Group>
                                        </SegmentWrapper>
                                    </Grid.Column>
                                    <Grid.Column mobile={16} computer={8}>
                                        <SegmentWrapper>
                                            <Segment.Group>
                                                <Segment>
                                                    <Grid>
                                                        <Grid.Column
                                                            computer={10}
                                                        >
                                                            <ChoicetextWrapper>
                                                                <ChoiceHeader>
                                                                    Online Ads
                                                                </ChoiceHeader>
                                                                <InfoText>
                                                                    Your
                                                                    companies
                                                                    ads will
                                                                    show on
                                                                    Facebook and
                                                                    google. You
                                                                    will have
                                                                    control over
                                                                    the
                                                                    demographic,
                                                                    when and
                                                                    where they
                                                                    will be
                                                                    shown. This
                                                                    is a more
                                                                    modern
                                                                    approach to
                                                                    marketing
                                                                </InfoText>
                                                            </ChoicetextWrapper>
                                                        </Grid.Column>
                                                        <Grid.Column
                                                            computer={6}
                                                        >
                                                            <ChoiceImage>
                                                                <Image
                                                                    src={
                                                                        OnlineAds
                                                                    }
                                                                />
                                                            </ChoiceImage>
                                                        </Grid.Column>
                                                    </Grid>
                                                </Segment>
                                                <Segment>
                                                    <div>
                                                        <SliderWrapper>
                                                            <Slider
                                                                name="ADS"
                                                                type="range"
                                                                min="0"
                                                                max={balance}
                                                                value={
                                                                    user.onlineMoneySpent
                                                                }
                                                                step="10000"
                                                                onChange={
                                                                    updateValues
                                                                }
                                                                onClick={
                                                                    updateValues
                                                                }
                                                            />
                                                        </SliderWrapper>
                                                        <LabelWrapper>
                                                            {user.onlineMoneySpent >
                                                                0 && (
                                                                <Label
                                                                    pointing="left"
                                                                    as="a"
                                                                    size={
                                                                        "large"
                                                                    }
                                                                    color={
                                                                        "orange"
                                                                    }
                                                                >
                                                                    $
                                                                    {
                                                                        user.onlineMoneySpent
                                                                    }
                                                                </Label>
                                                            )}
                                                            {user.onlineMoneySpent ===
                                                                0 && (
                                                                <Label
                                                                    pointing="left"
                                                                    as="a"
                                                                    size={
                                                                        "large"
                                                                    }
                                                                >
                                                                    $
                                                                    {
                                                                        user.onlineMoneySpent
                                                                    }
                                                                </Label>
                                                            )}
                                                        </LabelWrapper>
                                                    </div>
                                                </Segment>
                                            </Segment.Group>
                                        </SegmentWrapper>
                                    </Grid.Column>
                                    <Grid.Column mobile={16} computer={8}>
                                        <SegmentWrapper>
                                            <Segment.Group>
                                                <Segment>
                                                    <Grid>
                                                        <Grid.Column
                                                            computer={10}
                                                        >
                                                            <ChoicetextWrapper>
                                                                <ChoiceHeader>
                                                                    Banners
                                                                </ChoiceHeader>
                                                                <InfoText>
                                                                    Your
                                                                    companies
                                                                    ads will
                                                                    show on
                                                                    roads within
                                                                    your state.
                                                                    This
                                                                    approach
                                                                    enable
                                                                    indirect
                                                                    marketing
                                                                    you will
                                                                    place your
                                                                    marketing in
                                                                    high traffic
                                                                    areas that
                                                                    will place
                                                                    the idea of
                                                                    your brand
                                                                    in their
                                                                    thoughts.
                                                                </InfoText>
                                                            </ChoicetextWrapper>
                                                        </Grid.Column>
                                                        <Grid.Column
                                                            computer={6}
                                                        >
                                                            <ChoiceImage>
                                                                <Image
                                                                    src={
                                                                        Banners
                                                                    }
                                                                />
                                                            </ChoiceImage>
                                                        </Grid.Column>
                                                    </Grid>
                                                </Segment>
                                                <Segment>
                                                    <div>
                                                        <SliderWrapper>
                                                            <Slider
                                                                name="Banners"
                                                                type="range"
                                                                min="0"
                                                                max={balance}
                                                                step="10000"
                                                                value={
                                                                    user.bannerMoneySpent
                                                                }
                                                                onChange={
                                                                    updateValues
                                                                }
                                                                onClick={
                                                                    updateValues
                                                                }
                                                            />
                                                        </SliderWrapper>
                                                        <LabelWrapper>
                                                            {user.bannerMoneySpent >
                                                                0 && (
                                                                <Label
                                                                    pointing="left"
                                                                    as="a"
                                                                    size={
                                                                        "large"
                                                                    }
                                                                    color={
                                                                        "orange"
                                                                    }
                                                                >
                                                                    $
                                                                    {
                                                                        user.bannerMoneySpent
                                                                    }
                                                                </Label>
                                                            )}
                                                            {user.bannerMoneySpent ===
                                                                0 && (
                                                                <Label
                                                                    pointing="left"
                                                                    as="a"
                                                                    size={
                                                                        "large"
                                                                    }
                                                                >
                                                                    $
                                                                    {
                                                                        user.bannerMoneySpent
                                                                    }
                                                                </Label>
                                                            )}
                                                        </LabelWrapper>
                                                    </div>
                                                </Segment>
                                            </Segment.Group>
                                        </SegmentWrapper>
                                    </Grid.Column>
                                    <Grid.Column mobile={16} computer={8}>
                                        <SegmentWrapper>
                                            <Segment.Group>
                                                <Segment>
                                                    <Grid>
                                                        <Grid.Column
                                                            computer={10}
                                                        >
                                                            <ChoicetextWrapper>
                                                                <ChoiceHeader>
                                                                    Influncers
                                                                </ChoiceHeader>
                                                                <InfoText>
                                                                    Your company
                                                                    will be
                                                                    promoted by
                                                                    influencers
                                                                    online. This
                                                                    is the most
                                                                    modern from
                                                                    of
                                                                    marketing.
                                                                    While it has
                                                                    a larger
                                                                    learning
                                                                    curve you
                                                                    utilize
                                                                    influencers
                                                                    your
                                                                    demographic
                                                                    trusts
                                                                    enabling a
                                                                    high success
                                                                    rate when
                                                                    done
                                                                    correctly.
                                                                </InfoText>
                                                            </ChoicetextWrapper>
                                                        </Grid.Column>
                                                        <Grid.Column
                                                            computer={6}
                                                        >
                                                            <ChoiceImage>
                                                                <Image
                                                                    src={
                                                                        Influncers
                                                                    }
                                                                />
                                                            </ChoiceImage>
                                                        </Grid.Column>
                                                    </Grid>
                                                </Segment>
                                                <Segment>
                                                    <div>
                                                        <SliderWrapper>
                                                            <Slider
                                                                name="Influncers"
                                                                type="range"
                                                                min="0"
                                                                max={balance}
                                                                step="10000"
                                                                value={
                                                                    user.influncersMoneySpent
                                                                }
                                                                onChange={
                                                                    updateValues
                                                                }
                                                                onClick={
                                                                    updateValues
                                                                }
                                                            />
                                                        </SliderWrapper>
                                                        <LabelWrapper>
                                                            {user.influncersMoneySpent >
                                                                0 && (
                                                                <Label
                                                                    pointing="left"
                                                                    as="a"
                                                                    size={
                                                                        "large"
                                                                    }
                                                                    color={
                                                                        "orange"
                                                                    }
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
                                                                    size={
                                                                        "large"
                                                                    }
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
                                        </SegmentWrapper>
                                    </Grid.Column>
                                    <Grid.Column only="mobile" mobile={16}>
                                        <Spacer />
                                    </Grid.Column>
                                </Grid>
                            </form>
                        </FormWrapper>
                    </Grid.Column>
                </Grid>
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

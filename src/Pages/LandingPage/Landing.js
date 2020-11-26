import React from "react";
import styled from "styled-components";

import { Button } from "semantic-ui-react";

import { Link } from "react-router-dom";

import desktopImage from "../../Assets/Background.png";

const Wrapper = styled.section`
    padding-top: 5em;
    padding-left: 5em;
    text-align: left;
    max-width: 1200px;
`;

const ButtonWrapper = styled.section`
    text-align: left;
    padding-left: 10px;
`;

const HeaderText = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 4em;
    padding: 0px;
    margin-bottom: 0px;
`;

const IntroText = styled.p`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 12px;
    padding-left: 10px;
    padding-top: 0px;
    padding-bottom: 0px;
    margin: 2px;
    word-wrap: break-word;
`;

function Landing() {
    return (
        <div
            style={{
                backgroundImage: `url(${desktopImage})`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100vh",
            }}
        >
            <Wrapper>
                <HeaderText>Build a Business</HeaderText>
                <br></br>
                <IntroText>
                    Welcome to build a business! Find your resources, deligate
                    your operations,
                </IntroText>
                <IntroText>
                    figure out your shipping logistics and explore marketing!
                </IntroText>
                <IntroText>
                    You have $2,000,000 to spend, spend it wisely.
                </IntroText>
                <br></br>
                <ButtonWrapper>
                    <Link to="/Instructions">
                        <Button content="Im ready to go!" primary />
                    </Link>
                </ButtonWrapper>
            </Wrapper>
        </div>
    );
}

export default Landing;

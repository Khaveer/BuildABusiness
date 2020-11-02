import React from "react";
import styled from "styled-components";

import { Grid, Button } from "semantic-ui-react";

import { Link } from "react-router-dom";

import desktopImage from "../../Assets/Background.png";
import mobileImage from "../../Assets/Mobileimage.png";

const Wrapper = styled.section`
    padding-top: 8vh;
    padding-left: 7vh;
    text-align: left;
`;

const ButtonWrapper = styled.section`
    padding-top: 6vh;
`;

const HeaderText = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 10vh;
`;

const IntroText = styled.p`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 12px;
`;

function Landing() {
    const backgroundImage =
        window.innerWidth >= 650 ? desktopImage : mobileImage;

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                height: "100vh",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Wrapper>
                <Grid columns={1}>
                    <Grid.Row>
                        <Grid.Column>
                            <HeaderText>BUILD-A-BUSINESS</HeaderText>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid columns={4}>
                    <Grid.Row>
                        <Grid.Column>
                            <IntroText>
                                Welcome to build a business! Find your
                                resources, deligate your operations, figure out
                                your shipping logistics and explore marketing!
                                You have $3,000,000 to spend, spend it wisely.{" "}
                            </IntroText>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
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

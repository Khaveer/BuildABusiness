import React, { useContext } from "react";
import styled from "styled-components";

import { Progress, Label, Grid } from "semantic-ui-react";

import { UserContext } from "../components/UserContext";

const FooterPlacer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px; /* Height of the footer */
    background-color: white;
`;

const HeaderWrapper = styled.div`
    width: 78%;
    margin: auto;
    color: white;
    text-align: left;
    vertical-align: middle;
`;

const ProgressWrapper = styled.div`
    width: 70%;
    //margin: auto;
    color: white;
    display: inline-block;
    vertical-align: middle;
`;

const LabelWrapper = styled.div`
    //margin: 0px;
    display: inline-block;
    padding-left: 5%;
    vertical-align: middle;
`;

const FooterDivider = styled.hr`
    border-width: 0;
    background-color: #bfbfbf;
    height: 1px;
`;

const FooterLabel = styled.p`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 0.7em;
    color: #6d6d6d;
    text-align: left;
    padding-bottom: 0px;
    margin-bottom: 0px;
`;

const Footer = () => {
    const [user] = useContext(UserContext);

    const totalCost =
        user.baseCost + user.step1Cost + user.step2Cost + user.step3Cost;

    const Percent = (totalCost / 24) * 100;

    return (
        <FooterPlacer>
            <FooterDivider />

            <Grid>
                <Grid.Column
                    computer={16}
                    style={{ padding: "0px", paddingTop: "0.5em" }}
                >
                    <HeaderWrapper>
                        <FooterLabel>PRODUCT PRICE FOR CONSUMER.</FooterLabel>
                    </HeaderWrapper>
                </Grid.Column>
                <Grid.Column
                    computer={16}
                    style={{ padding: "0px", paddingRight: "0px" }}
                >
                    <ProgressWrapper>
                        <Progress
                            //progress="percent"
                            percent={Percent}
                            color="orange"
                            style={{ margin: "0px" }}
                        />
                    </ProgressWrapper>
                    <LabelWrapper>
                        {totalCost > 0 && (
                            <Label as="a" size={"large"} color={"orange"}>
                                ${totalCost}
                            </Label>
                        )}
                        {totalCost === 0 && (
                            <Label as="a" size={"large"}>
                                ${totalCost}
                            </Label>
                        )}
                    </LabelWrapper>
                </Grid.Column>
            </Grid>
        </FooterPlacer>
    );
};

export default Footer;

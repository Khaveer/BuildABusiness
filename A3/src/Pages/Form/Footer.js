import React, { useContext } from "react";
import styled from "styled-components";

import { Progress, Label, Header } from "semantic-ui-react";

import { UserContext } from "../components/UserContext";

const FooterPlacer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px; /* Height of the footer */
`;

const FooterWrapper = styled.div``;

const ProgressWrapper = styled.div`
    width: 70%;
    //margin: auto;
    color: white;
    display: inline-block;
    vertical-align: middle;
`;

const LabelWrapper = styled.div`
    margin: 0px;
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
    const [user, setUser] = useContext(UserContext);

    const totalCost =
        user.baseCost + user.step1Cost + user.step2Cost + user.step3Cost;

    return (
        <FooterPlacer>
            <FooterDivider />
            <FooterWrapper>
                <ProgressWrapper>
                    <FooterLabel>PRODUCT PRICE FOR CONSUMER.</FooterLabel>
                    <Progress
                        progress="value"
                        value={totalCost}
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
            </FooterWrapper>
        </FooterPlacer>
    );
};

export default Footer;

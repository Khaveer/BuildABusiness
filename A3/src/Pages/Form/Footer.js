import React, { useContext } from "react";
import styled from "styled-components";

import { Progress, Label, Header } from "semantic-ui-react";

import { UserContext } from "./StepContext";

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

const FooterDivider = styled.div`
    width: 0.5em;
    height: auto;
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

    return (
        <FooterPlacer>
            <hr style={{ color: "rgba(137,137,137,0.5)" }} />
            <FooterWrapper>
                <ProgressWrapper>
                    <FooterLabel>PRODUCT PRICE FOR CONSUMER.</FooterLabel>
                    <Progress
                        progress="value"
                        value={user.money.cost}
                        color="orange"
                        style={{ margin: "0px" }}
                    />
                </ProgressWrapper>
                <LabelWrapper>
                    {user.money.cost > 0 && (
                        <Label as="a" size={"large"} color={"orange"}>
                            ${user.money.cost}
                        </Label>
                    )}
                    {user.money.cost === 0 && (
                        <Label as="a" size={"large"}>
                            ${user.money.cost}
                        </Label>
                    )}
                </LabelWrapper>
            </FooterWrapper>
        </FooterPlacer>
    );
};

export default Footer;

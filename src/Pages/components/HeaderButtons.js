import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Button, Icon } from "semantic-ui-react";

const HeaderWrapper = styled.div``;
const ButtonWrapper = styled.div`
    text-align: left;
    padding: 1em;
    padding-top: 0.5em;
`;
const ButtonDivider = styled.div`
    width: 0.5em;
    height: auto;
    display: inline-block;
`;

const Divider = styled.hr`
    border-width: 0;
    background-color: #bfbfbf;
    height: 1px;
    margin-bottom: 0px;
`;

const HeaderButtons = (props) => {
    return (
        <HeaderWrapper>
            <ButtonWrapper>
                {props.resultsInfo === false && (
                    <Link to="/">
                        <Button basic animated compact color="blue">
                            <Button.Content visible>Restart</Button.Content>
                            <Button.Content hidden>
                                <Icon name="redo" />
                            </Button.Content>
                        </Button>
                    </Link>
                )}
                {props.resultsInfo === true && (
                    <Link to="/results">
                        <Button basic animated compact color="blue">
                            <Button.Content visible>Back</Button.Content>
                            <Button.Content hidden>
                                <Icon name="angle left" />
                            </Button.Content>
                        </Button>
                    </Link>
                )}
                <ButtonDivider />
                {props.resultsInfo === false && (
                    <Link to="Instructions">
                        <Button circular compact icon="help" />
                    </Link>
                )}
            </ButtonWrapper>
            <Divider />
        </HeaderWrapper>
    );
};

export default HeaderButtons;

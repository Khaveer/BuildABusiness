import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Button, Icon } from "semantic-ui-react";

const HeaderWrapper = styled.div``;
const ButtonWrapper = styled.div`
    text-align: left;
    padding: 0.5em;
    padding-bottom: 0px;
`;
const ButtonDivider = styled.div`
    width: 0.5em;
    height: auto;
    display: inline-block;
`;

const Divider = styled.hr`
    border-width: 0;
    background-color: #BFBFBF;
    height: 1px;
    margin-bottom: 0px;
`;

function HeaderButtons() {
    return (
        <HeaderWrapper>
            <ButtonWrapper>
                {/* need to figure out where this links to TODO */}
                <Link to="/">
                    <Button basic animated compact color="blue">
                        <Button.Content visible>Restart</Button.Content>
                        <Button.Content hidden>
                            <Icon name="redo" />
                        </Button.Content>
                    </Button>
                </Link>
                <ButtonDivider />
                <Button circular compact icon="help" />
            </ButtonWrapper>
            <Divider />
        </HeaderWrapper>
    );
}
export default HeaderButtons;

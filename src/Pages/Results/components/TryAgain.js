import React from "react";

import { Button } from "semantic-ui-react";

import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

import styled from "styled-components";

const ButtonWrapper = styled.div`
    margin: auto;
    text-align: center;
    padding: 2em;
`;
const Header = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    margin-top: 0px;
    font-size: 2em;
    text-align: center;
`;

const TextWrapper = styled.div``;

const LinkText = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 1em;
    text-align: center;
    word-break: break-all;
`;

class TryAgain extends React.Component {
    state = {
        value: "www.buildabusinesses.com",
        copied: false,
    };

    render() {
        return (
            <div>
                <Header>Try again or send to a friend</Header>
                <ButtonWrapper>
                    <Link to="/">
                        <Button
                            content="Try Again"
                            primary
                            style={{ marginRight: "0px" }}
                        />
                    </Link>
                </ButtonWrapper>
                <TextWrapper>
                    <LinkText>
                        {this.state.copied ? (
                            <span style={{ color: "#333333" }}>
                                Copied to clipboard
                            </span>
                        ) : (
                            <span>{this.state.value}</span>
                        )}
                    </LinkText>
                </TextWrapper>
                <ButtonWrapper>
                    <CopyToClipboard
                        text={this.state.value}
                        onCopy={() => this.setState({ copied: true })}
                    >
                        <Button content="Send a Link to a Friend" primary />
                    </CopyToClipboard>
                </ButtonWrapper>
            </div>
        );
    }
}

export default TryAgain;

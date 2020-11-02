import React from "react";
import styled from "styled-components";

import { Card, Image, Grid } from "semantic-ui-react";

const Wrapper = styled.section`
    padding: 10vh;
`;

function Instructions() {
    return (
        <div>
            <Wrapper>
                <Card.Group>
                    <Card fluid color="red" header="Option 1" />

                    <Card.Description>
                        Matthew is a musician living in Nashville.
                    </Card.Description>
                </Card.Group>
            </Wrapper>
        </div>
    );
}

export default Instructions;

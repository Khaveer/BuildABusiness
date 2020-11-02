import React from "react";
import { Segment, Header, Image } from "semantic-ui-react";

const HeaderThing = ({ name, author }) => {
    return (
        <Segment basic inverted padded="very" vertical>
            <Header as="h1">This is a header for {name}</Header>
            <Image src={"./image/logo512.png"} size="small" centered></Image>
            <Header as="h3">Author: {author}</Header>
        </Segment>
    );
};

export default HeaderThing;

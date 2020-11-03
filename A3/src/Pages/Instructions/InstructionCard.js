import React from "react";
import { Card, Image, Header } from "semantic-ui-react";
import { Slide } from "pure-react-carousel";
import Controls from "./Controls";
import styled from "styled-components";

const NewCardContent = styled(Card.Content)`
    color: blue;
`;

const Wrapper = styled.div`
    color: black;
    font-size: 1em;
    text-align: left;
`;
// array of objects
const instructions = [
    {
        // These are the props that we pass to Card component

        header: "Welcome to your business!",
        image: "./image/two.png",
        description: (
            <text>
                Welcome, you are creating a business model for a fashion
                business. You will have $3,000,000 to spend, the graph will
                indicate how much you have left. <br /> <br /> If you use up all
                your money prior to finishing the business model, you wont be
                able to finish your business, you must use your money wisely!'{" "}
            </text>
        ),
    },
    {
        header: "Product price for consumer",
        image: "./image/two.png",
        description: (
            <text>
                'Your goal as a business is the keep the product price low, not
                only because consumers love cheap products, but also so your can
                mark up the cost in order to get more revenue. <br /> <br />
                To do this in this game, you want to keep your recources,
                operations, logistics and marketing cheap (pick the cheapers
                options). You can mark up your price in the consumer
                relationship section.{" "}
            </text>
        ),
    },
    {
        header: "The Business model",
        image: "./image/three.png",
        description: (
            <text>
                You will be taken though 4 sections: recources (what country
                will you get your materials from),operations (what country will
                your staff make your products) ,logistics (how will you
                transport your products) and consumer realtionships (how will
                you market your product). <br /> <br /> Fill out each section,
                and continue onto the next one. If you want to go back, click
                the part you want to go to on the progress bar!.{" "}
            </text>
        ),
    },
];

function CardContent({ index }) {
    const { header, image, description } = instructions[index];
    return (
        <Card fluid>
            <NewCardContent>
                <div class="flex-row">
                    <Wrapper
                        class="flex-down"
                        style={{ width: 500, paddingRight: 20 }}
                    >
                        <Header>{header}</Header>
                        {description}
                    </Wrapper>

                    <div class="flex-end">
                        <Image
                            src={image}
                            size="big"
                            style={{ marginLeft: 20 }}
                        />
                    </div>
                </div>
                <Controls final={index === 2} />
            </NewCardContent>
        </Card>
    );
}

// We get which number card we are (0, 1, or 2)
// This comes from the InstructionCarousel
export default function InstructionCard({ index }) {
    return (
        <Slide index={index}>
            <div style={{ padding: 10 }}>
                {/* fluid means the Card can expand to the size of the parent 
                    We deconstruct (...) the instructions object for the card we want
                    For example, if index is 0, we instructions[0] object, and pass those values as props to Card
                    It's doing this:
                    if (index === 0) {
                        <Card fluid header={instructions[0].header} description={instructions[0].description} />
                    } else if (index === 1) {
                        <Card fluid header={instructions[1].header} description={instructions[1].description} />
                    } else if (index === 2) {
                        <Card fluid header={instructions[2].header} description={instructions[2].description} />
                    }
                    the ... is called array deconstruction
                */}
                <CardContent index={index} />
            </div>
        </Slide>
    );
}

// https://github.com/express-labs/pure-react-carousel#hooks-and-usecontext //
// semenatic UI in prototypes. pure-react-carousel //

import React, { useState } from "react";
import styled from 'styled-components';
// This is a library of code we downloaded
import { CarouselProvider, Slider } from "pure-react-carousel";

// This is a component we made ourselves!
import InstructionCard from "./InstructionCard";

const CenteredCarouselProvider = styled(CarouselProvider)`
    padding-top: 10%;
    margin: auto;
    max-width: 850px;
`;

export default function InstructionsCarousel() {
    // https://reactjs.org/docs/hooks-intro.html
    const [width, setWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return (
        <CenteredCarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={width < 700 ? 170 : 50}
            totalSlides={3}
        >
            <Slider>
                {/* InstructionCarousel passes a 'prop' (parent and child incest - short for property) to InstructionCard called index */}
                <InstructionCard index={0} />
                <InstructionCard index={1} />
                <InstructionCard index={2} />
            </Slider>
        </CenteredCarouselProvider>
    );
}
// just the instructions

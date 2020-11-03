import React from "react";
// This is a library of code we downloaded
import { CarouselProvider, Slider } from "pure-react-carousel";

// This is a component we made ourselves!
import InstructionCard from "./InstructionCard";

export default function InstructionsCarousel() {
    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}
            style={{ width: "1100px", margin: "auto", padding: 200 }}
        >
            <Slider>
                {/* InstructionCarousel passes a 'prop' (parent and child incest - short for property) to InstructionCard called index */}
                <InstructionCard index={0} />
                <InstructionCard index={1} />
                <InstructionCard index={2} />
            </Slider>
        </CarouselProvider>
    );
}
// just the instructions

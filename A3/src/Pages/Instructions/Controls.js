import React, { useContext } from "react";
import { Button, Icon } from "semantic-ui-react";
import {
    ButtonNext,
    ButtonLast,
    ButtonBack,
    WithStore,
} from "pure-react-carousel";

import { UserContext } from "../components/UserContext";

// do we really want a skip button? we only have like 2 screens?

import { Link } from "react-router-dom";

export default function Controls({ final }) {
    const [user, setUser] = useContext(UserContext);
    let buttons = (
        <>
            <ButtonLast class="ui blue basic button">Skip</ButtonLast>
            <Button
                as={ButtonBack}
                class="ui circular icon button"
                icon="chevron left"
            />
            <Button
                as={ButtonNext}
                class="ui circular icon button"
                style={{ marginRight: 20 }}
                icon="chevron right"
            />
        </>
    );
    if (final) {
        buttons = (
            <>
                <Button
                    as={ButtonBack}
                    class="ui circular icon button"
                    icon="chevron left"
                />
                <Link to="/Game">
                    {user.current > 1 && (
                        <Button
                            class="ui orange-btn button"
                            style={{ marginRight: 20 }}
                        >
                            Return to game!
                        </Button>
                    )}
                    {user.current === 1 && (
                        <Button
                            class="ui orange-btn button"
                            style={{ marginRight: 20 }}
                        >
                            Ready to play!
                        </Button>
                    )}
                </Link>
            </>
        );
    }
    return (
        <div class="flex-row">
            <Dottys />
            <div class="flex-end">{buttons}</div>
        </div>
    );
}

const Dottys = WithStore(
    function ({ currentSlide }) {
        return (
            <div>
                <Icon name={currentSlide === 0 ? "circle" : "circle outline"} />
                <Icon name={currentSlide === 1 ? "circle" : "circle outline"} />
                <Icon name={currentSlide === 2 ? "circle" : "circle outline"} />
            </div>
        );
    },
    (state) => ({ currentSlide: state.currentSlide })
);

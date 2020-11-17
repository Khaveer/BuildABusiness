import React, { useContext } from "react";
import styled from "styled-components";

import { UserContext } from "../../../components/UserContext";

import { Image } from "semantic-ui-react";

import resourceImage from "../../../../Assets/FromAssests/Info/Resources.png";
import operationsImage from "../../../../Assets/FromAssests/Info/Operations.png";
import logisticsImage from "../../../../Assets/FromAssests/Info/Logistics.png";
import consumerImage from "../../../../Assets/FromAssests/Info/CustomerRealtionship.png";

const ImageWrapper = styled.div`
    width: 100%;
    margin: auto;
`;

const InfoHeader = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    margin-top: 0px;
`;

const InfoText = styled.p`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 0.4em;
    line-height: 2em;
    word-wrap: break-word;
`;

const GameInfo = () => {
    const [user, setUser] = useContext(UserContext);
    return (
        <div>
            <ImageWrapper>
                {user.current === 1 && (
                    <Image src={resourceImage} size="medium" />
                )}
                {user.current === 2 && (
                    <Image src={operationsImage} size="medium" />
                )}
                {user.current === 3 && (
                    <Image src={logisticsImage} size="medium" />
                )}
                {user.current === 4 && (
                    <Image src={consumerImage} size="medium" />
                )}
            </ImageWrapper>
            {user.current === 1 && (
                <>
                    <InfoHeader>Resources</InfoHeader>
                    <InfoText>
                        You need to get resources for your product, select a
                        country where you will collect these materials. Some
                        countries cost more then others, this is depending on
                        the rareity and cost needed to collect the resouces.
                    </InfoText>
                </>
            )}
            {user.current === 2 && (
                <>
                    <InfoHeader>Operations</InfoHeader>
                    <InfoText>
                        You need to find somewhere for your clothes to be
                        created. Each country has a price, some more then
                        others.
                    </InfoText>
                    <br></br>
                    <InfoText>
                        If you choose a places like America and Australia, the
                        cost will be high, as there arent alot of manufacturing
                        companies there.
                    </InfoText>
                </>
            )}
            {user.current === 3 && (
                <>
                    <InfoHeader>Logistics</InfoHeader>
                    <InfoText>
                        How will you get your clothes from point A to B. When
                        thinking about this decision, dont just think cost,
                        think about time, because this will impact the price for
                        the consumer (due to shipping).
                    </InfoText>
                </>
            )}
            {user.current === 4 && (
                <>
                    <InfoHeader>Customer Realtionship</InfoHeader>
                    <InfoText>
                        How will your market your product? You can invest in
                        more traditional forms like billboards and Tv
                        commericals. Or more modern like influncers and online
                        marketing.
                    </InfoText>
                    <InfoText>
                        You also have the choice to mark up your product! While
                        this will give you more revenue, careful about what your
                        consumers will think!
                    </InfoText>
                </>
            )}
        </div>
    );
};

export default GameInfo;

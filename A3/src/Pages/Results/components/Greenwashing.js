import React from "react";

import { Grid } from "semantic-ui-react";

import styled from "styled-components";

const InfoHeader = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    margin-top: 0px;
    font-size: 2em;
    text-align: left;
`;

const InfoText = styled.p`
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 1em;
    line-height: 2em;
    word-wrap: break-word;
    text-align: left;
`;

const HeaderInfoText = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 1em;
    margin-top: 0px;
    text-align: left;
`;

const References = styled.div`
    margin-top: 1em;
    text-align: left;
    word-wrap: break-word;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 1em;
`;

const ReferenceLinks = styled.a`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 1em;
    margin-top: 0px;
    text-align: left;
    float: left;
    color: black;
    word-wrap: break-word;
`;

const LogisticsCard = () => {
    const textRandom = Math.floor(Math.random() * 3 + 1);

    return (
        <Grid>
            <Grid.Column computer={16}>
                <InfoHeader>Greenwashing</InfoHeader>
                <InfoText>
                    When a company participates in environmentally friendly
                    activities the respect from their customers increases. Due
                    to this companies who aren't environmentally friendly
                    participate in an action called greenwashing. Green washing
                    is when “a company or organisation spends more time and
                    money on marketing themselves as environmentally friendly
                    than on minimising their environmental impact.” [1]. This
                    process is negative for general consumers, as we are mislead
                    into assuming that a company is ethically and
                    environmentally continuous when they may not be.
                </InfoText>
                {textRandom === 1 && (
                    <>
                        <HeaderInfoText>
                            An Example of Greenwashing:
                        </HeaderInfoText>
                        <InfoText>
                            In 2008 Primark was using child labour, now in the
                            present (2019) they “launched a sustainable denim
                            collection, made from 100% sustainable cotton
                            sourced from the farmer training program in India
                            and Pakistan, and priced from as low as £13.” [2]
                            <References>
                                References:<br></br>
                                <ReferenceLinks
                                    href="https://www.tribedynamics.com/blog/fast-fashion-brands-and-influencer-marketing-2019"
                                    target="_blank"
                                >
                                    [1]
                                    https://www.tribedynamics.com/blog/fast-fashion-brands-and-influencer-marketing-2019
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.senseandsustainability.net/2019/12/03/how-fast-fashion-is-greenwashing/"
                                    target="_blank"
                                >
                                    [2]
                                    https://www.senseandsustainability.net/2019/12/03/how-fast-fashion-is-greenwashing/
                                </ReferenceLinks>
                            </References>
                        </InfoText>
                    </>
                )}
                {textRandom === 2 && (
                    <>
                        <HeaderInfoText>
                            An Example of Greenwashing:
                        </HeaderInfoText>
                        <InfoText>
                            Asos has “quietly introduced recycled products into
                            its portfolio” they are “less dependent on brand-new
                            materials means you’re saving on resources like
                            water and energy.” [2] They are providing
                            agricultural training and increasing business
                            awareness to farmers, which has improved “living
                            conditions and education” [2] ASOS has stated that
                            they will “no longer sell mohair, silk, cashmere,
                            and feathers, as part of its mission to be 100%
                            cruelty free” [3]
                            <References>
                                References:<br></br>
                                <ReferenceLinks
                                    href="https://www.tribedynamics.com/blog/fast-fashion-brands-and-influencer-marketing-2019"
                                    target="_blank"
                                >
                                    [1]
                                    https://www.tribedynamics.com/blog/fast-fashion-brands-and-influencer-marketing-2019
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.senseandsustainability.net/2019/12/03/how-fast-fashion-is-greenwashing/"
                                    target="_blank"
                                >
                                    [2]
                                    https://www.senseandsustainability.net/2019/12/03/how-fast-fashion-is-greenwashing/
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://wellmadeclothes.com.au/articles/cat/Features/post/IsASOSReallyCrueltyFree/"
                                    target="_blank"
                                >
                                    [3]
                                    https://wellmadeclothes.com.au/articles/cat/Features/post/IsASOSReallyCrueltyFree/
                                </ReferenceLinks>
                            </References>
                        </InfoText>
                    </>
                )}
                {textRandom === 3 && (
                    <>
                        <HeaderInfoText>
                            An Example of Greenwashing:
                        </HeaderInfoText>
                        <InfoText>
                            H&M has started a recycling campaign that allows
                            consumers to bring in a bag of old textiles and they
                            will get 15% off their next purchase [1]. However,
                            this isnt necessarily posssity as only “ 1% of
                            clothing can be genuinely recycled” and the process
                            “encourages people to shop more” which contributes
                            to the excess amount of waste due to over
                            consumption of clothes [1].
                            <References>
                                References:<br></br>
                                <ReferenceLinks
                                    href="https://www.tribedynamics.com/blog/fast-fashion-brands-and-influencer-marketing-2019"
                                    target="_blank"
                                >
                                    [1]
                                    https://www.tribedynamics.com/blog/fast-fashion-brands-and-influencer-marketing-2019
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://wellmadeclothes.com.au/articles/cat/Features/post/IsASOSReallyCrueltyFree/"
                                    target="_blank"
                                >
                                    [2]
                                    https://wellmadeclothes.com.au/articles/cat/Features/post/IsASOSReallyCrueltyFree/
                                </ReferenceLinks>
                            </References>
                        </InfoText>
                    </>
                )}
            </Grid.Column>
        </Grid>
    );
};

export default LogisticsCard;

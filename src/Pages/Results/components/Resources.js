import React, { useContext } from "react";
import { UserContext } from "../../components/UserContext";

import { Grid, Image } from "semantic-ui-react";

import styled from "styled-components";

import ResultsGraph1 from "../../../Assets/Results/Resources/BlueGraph.jpg";
import ResultsGraph2 from "../../../Assets/Results/Resources/Coloured.png";

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
    word-break: break-all;
`;

const StrongText = styled.b`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 1em;
    line-height: 2em;
    word-wrap: break-word;
    text-align: left;
`;

const ResourceCard = () => {
    const [user] = useContext(UserContext);

    const imageRandom = Math.floor(Math.random() * (3 - 1) + 1);

    return (
        <Grid>
            <Grid.Column computer={12} mobile={16}>
                <InfoHeader>Resources</InfoHeader>
                {user.step1 === "RPET" && (
                    <>
                        <HeaderInfoText>
                            Environmentally friendly option that reuse existing
                            plastic materials to make new clothes.
                        </HeaderInfoText>
                        <InfoText>
                            Recycled polyester gives a second life to a material
                            that's not biodegradable and would otherwise end up
                            in landfill. [1] This process is almost the same as
                            virgin polyester in terms of quality but its{" "}
                            <StrongText>
                                production requires 59% less energy
                            </StrongText>{" "}
                            compared to virgin polyesters. The process takes
                            recycled plastic waste and converts it to fiber that
                            will be used to make clothing. In a process they use
                            recycled bottles to conserve and reduce waste. [2]
                            An example of plastic bottles being used to create
                            clothing is that it take just{" "}
                            <StrongText>
                                5 soda bottles yield enough fibers to produce
                                one extra large T shirt.
                            </StrongText>{" "}
                            [1]
                            <References>
                                References:<br></br>
                                <ReferenceLinks
                                    href="https://fashionunited.com/news/fashion/how-sustainable-is-recycled-polyester/2018111524577"
                                    target="_blank"
                                >
                                    [1]
                                    https://fashionunited.com/news/fashion/how-sustainable-is-recycled-polyester/2018111524577
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.theguardian.com/environment/2016/jun/20/microfibers-plastic-pollution-oceans-patagonia-synthetic-clothes-microbeads"
                                    target="_blank"
                                >
                                    [2]
                                    https://www.theguardian.com/environment/2016/jun/20/microfibers-plastic-pollution-oceans-patagonia-synthetic-clothes-microbeads
                                </ReferenceLinks>
                            </References>
                        </InfoText>
                    </>
                )}
                {user.step1 === "Cotton" && (
                    <>
                        <HeaderInfoText>
                            A middle ground option due to the ethical and
                            environmental issues with the process.
                        </HeaderInfoText>
                        <InfoText>
                            The production of cotton fabrics is a extremely
                            water thirsty process. Studies show that it can{" "}
                            <StrongText>
                                take more than 2,700 liters of water
                            </StrongText>{" "}
                            to produce enough cotton just for one t-shirt. [1]
                            In India a country where 100 million people don't
                            have access to safe drinking water, if the water
                            that is used in cotton production would be
                            sufficient to provide 85% of the population (1.24
                            billion) with 100 liters of water everyday for a
                            year. [1] The process is also known for using child
                            labour and or forced labour in the production.{" "}
                            <StrongText>
                                18 countries including several of the top 6
                                producer nations have been reported to use child
                                labour or forced labour.
                            </StrongText>{" "}
                            [2]
                            <References>
                                References:<br></br>
                                <ReferenceLinks
                                    href="https://goodonyou.eco/how-ethical-is-cotton/"
                                    target="_blank"
                                >
                                    [1]
                                    https://goodonyou.eco/how-ethical-is-cotton/
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="http://cottonupguide.org/why-source-sustainable-cotton/challenges-for-cotton/#1518784832966-88dad5a9-3507"
                                    target="_blank"
                                >
                                    [2]
                                    http://cottonupguide.org/why-source-sustainable-cotton/challenges-for-cotton/#1518784832966-88dad5a9-3507
                                </ReferenceLinks>
                            </References>
                        </InfoText>
                    </>
                )}
                {user.step1 === "Synthetics" && (
                    <>
                        <HeaderInfoText>
                            An environmentally unsustainable process that
                            produces materials through the destructive process
                            of fracking to produce materials.
                        </HeaderInfoText>
                        <InfoText>
                            Polyester are prodomentally not biodegradable
                            meaning that clothing will be around in earth's land
                            fills for up to 200 years. [1] The materials are
                            derived from petroleum and oil industry and take
                            advantage of disperse dyes which are not soluble in
                            water and don't readily decompose producing
                            wastewater that is difficult to treat and is toxic
                            to humans, animals and humans. The process of
                            washing synthetic garments produce 1,174 milligrams
                            of microfibers that are released during the washing
                            process where up to 40% ultimately end up in rivers,
                            lakes and oceans.{" "}
                            <StrongText>
                                Nearly 70 million barrels of oil
                            </StrongText>{" "}
                            are used each year to make the world's polyester
                            fiber these fiber emit gasses N20 which is{" "}
                            <StrongText>
                                300 times more damaging than C02.
                            </StrongText>{" "}
                            [2] The vast majority of{" "}
                            <StrongText>
                                produces essentially engage in slave labour
                            </StrongText>{" "}
                            and expose workers to toxic chemicals that cause
                            neurological damage, cancer and other potentially
                            fatal conditions. [3]
                            <References>
                                References:<br></br>
                                <ReferenceLinks
                                    href="https://goodonyou.eco/material-guide-polyester-2/"
                                    target="_blank"
                                >
                                    [1]
                                    https://goodonyou.eco/material-guide-polyester-2/
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.forbes.com/sites/jamesconca/2015/12/03/making-climate-change-fashionable-the-garment-industry-takes-on-global-warming/#3de386d779e4"
                                    target="_blank"
                                >
                                    [2]
                                    https://www.forbes.com/sites/jamesconca/2015/12/03/making-climate-change-fashionable-the-garment-industry-takes-on-global-warming/#3de386d779e4
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://sewport.com/fabrics-directory/polyester-fabric"
                                    target="_blank"
                                >
                                    [3]
                                    https://sewport.com/fabrics-directory/polyester-fabric
                                </ReferenceLinks>
                            </References>
                        </InfoText>
                    </>
                )}
                {user.step1 === "Animal" && (
                    <>
                        <HeaderInfoText>
                            A environmentally destructive process that exposes
                            workers and the environment to extremely dangerous
                            chemicals
                        </HeaderInfoText>
                        <InfoText>
                            The production of animal derived products is an
                            incredibly complex process that takes advantage of
                            chemicals treatments to manufacture Fur and Leather
                            products. The process starts with the livestock
                            industry which is responsible for nearly 15% of
                            human induced greenhouse gas[1]. With then 300kg of
                            chemicals being added for 900kg of hides tanned. The
                            chemical used during the process are know to disrupt
                            the hormonal and nervous systems of those handle
                            them. The workers handling the dangerous chemicals
                            have been observed to not wear gloves, goggles,
                            respirators, masks or boots, and in some location
                            they have been found inside vats filled with the
                            chemicals. [2] The tanning process results in 20 -
                            80 cubic meters of wastewater containing dangerous
                            chemicals like Chromium and other dangerous
                            compounds.
                            <References>
                                References:<br></br>
                                <ReferenceLinks
                                    href="https://goodonyou.eco/the-hidden-costs-of-leather/"
                                    target="_blank"
                                >
                                    [1]
                                    https://goodonyou.eco/the-hidden-costs-of-leather/
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.pbs.org/newshour/show/bangladeshs-leather-industry-exposes-workers-and-children-to-toxic-hazards"
                                    target="_blank"
                                >
                                    [2]
                                    https://www.pbs.org/newshour/show/bangladeshs-leather-industry-exposes-workers-and-children-to-toxic-hazards
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.gizmodo.com.au/2014/06/how-leather-is-slowly-killing-the-people-and-places-that-make-it/"
                                    target="_blank"
                                >
                                    [3]
                                    https://www.gizmodo.com.au/2014/06/how-leather-is-slowly-killing-the-people-and-places-that-make-it/
                                </ReferenceLinks>
                            </References>
                        </InfoText>
                    </>
                )}
            </Grid.Column>
            <Grid.Column computer={4} mobile={16}>
                {imageRandom === 1 && (
                    <>
                        <Image src={ResultsGraph1} size="medium" centered />
                        <ReferenceLinks
                            href="https://www.hawthornintl.com/impact-of-fast-fashion"
                            target="_blank"
                        >
                            [Image]
                            https://www.hawthornintl.com/impact-of-fast-fashion
                        </ReferenceLinks>
                    </>
                )}
                {imageRandom === 2 && (
                    <>
                        <Image src={ResultsGraph2} size="medium" centered />
                        <ReferenceLinks
                            href="https://www.nature.com/articles/s43017-020-0039-9"
                            target="_blank"
                        >
                            [Image]
                            https://www.nature.com/articles/s43017-020-0039-9
                        </ReferenceLinks>
                    </>
                )}
            </Grid.Column>
        </Grid>
    );
};

export default ResourceCard;

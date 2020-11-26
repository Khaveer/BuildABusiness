import React, { useContext } from "react";
import { UserContext } from "../../components/UserContext";

import { Grid, Image } from "semantic-ui-react";

import styled from "styled-components";

//import graphs
import ResultsGraph1 from "../../../Assets/Results/Marketing/Marketing.png";

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

const StrongText = styled.b`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 1em;
    line-height: 2em;
    word-wrap: break-word;
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

const MarketingCard = () => {
    const [user] = useContext(UserContext);

    let maxValue = Math.max(
        user.tvMoneySpent,
        user.onlineMoneySpent,
        user.bannerMoneySpent,
        user.influncersMoneySpent
    );

    if (maxValue === 0) {
        maxValue = null;
    }

    return (
        <Grid>
            <Grid.Column computer={4} mobile={16}>
                <Image src={ResultsGraph1} size="medium" centered />
                <ReferenceLinks
                    href="https://www.lyfemarketing.com/blog/types-of-marketing-strategies/"
                    target="_blank"
                >
                    [Image]
                    https://www.lyfemarketing.com/blog/types-of-marketing-strategies/
                </ReferenceLinks>
            </Grid.Column>
            <Grid.Column computer={12} mobile={16}>
                {user.influncersMoneySpent === maxValue && (
                    <InfoHeader>Influencer Marketing</InfoHeader>
                )}
                {user.bannerMoneySpent === maxValue && (
                    <InfoHeader>Marketing (Banners)</InfoHeader>
                )}
                {user.tvMoneySpent === maxValue && (
                    <InfoHeader>Television Ads Marketing</InfoHeader>
                )}
                {user.onlineMoneySpent === maxValue && (
                    <InfoHeader>Digital Marketing</InfoHeader>
                )}
                {user.influncersMoneySpent === maxValue && (
                    <>
                        <HeaderInfoText>
                            Influencers - Profitable, but be careful of who you
                            choose!
                        </HeaderInfoText>
                        <InfoText>
                            You chose influencers for your marketing. The
                            influencer market is said to become very profitable
                            being a{" "}
                            <StrongText>
                                “$5-$10 billion market by 2020.”
                            </StrongText>{" "}
                            [1]. They are seen as being trusted by their
                            audience, but you have to ensure you choose the{" "}
                            <StrongText>right influencer,</StrongText> as if you
                            choose an influencer with prior controversies that
                            may reflect badly on your brand. This leads to{" "}
                            <StrongText>
                                61% of marketers finding it hard to identify the
                                right influencers [1].
                            </StrongText>{" "}
                            It is an effective form of marketing as “22,000
                            women surveys 45% said they will buy products
                            recommended by an influencer “ [1], however{" "}
                            <StrongText>it can be very expensive</StrongText>{" "}
                            with one post ranging from 100 to 100,000 [1].
                            Brands like Fashion Nova and PrettyLittleThing have
                            high representation from celebrities, models and
                            influencers - leading them to becoming very popular
                            brands within the younger demographic [2].
                            <References>
                                References:<br></br>
                                <ReferenceLinks
                                    href="https://www.lyfemarketing.com/blog/types-of-marketing-strategies/"
                                    target="_blank"
                                >
                                    [1]
                                    https://www.lyfemarketing.com/blog/types-of-marketing-strategies/
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.tribedynamics.com/blog/fast-fashion-brands-and-influencer-marketing-2019"
                                    target="_blank"
                                >
                                    [2]
                                    https://www.tribedynamics.com/blog/fast-fashion-brands-and-influencer-marketing-2019
                                </ReferenceLinks>
                            </References>
                        </InfoText>
                    </>
                )}
                {user.bannerMoneySpent === maxValue && (
                    <>
                        <HeaderInfoText>
                            Cost effective, but you need to ensure the design
                            and location is right.
                        </HeaderInfoText>
                        <InfoText>
                            You chose banners for your marketing. You must
                            ensure your banners are placed in an{" "}
                            <StrongText>accessible location,</StrongText> as it
                            can give you access to customers you might not have
                            anticipate [1]. When designing your banner you
                            should{" "}
                            <StrongText>incorporate more visuals</StrongText>{" "}
                            and individuals have strong memory for images
                            compared to text [1]. However there are limits to
                            information that is provided, and visibility
                            decreases at night and stormy days [1]. A banner on
                            average would cost{" "}
                            <StrongText>$1,900 to $3,600 per month</StrongText>{" "}
                            [2], but it is better to have multiple banners.
                            <References>
                                References:<br></br>
                                <ReferenceLinks
                                    href="https://www.lyfemarketing.com/blog/types-of-marketing-strategies/"
                                    target="_blank"
                                >
                                    [1]
                                    https://www.lyfemarketing.com/blog/types-of-marketing-strategies/
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="http://www.billboardsaustralia.com.au/advice/faq"
                                    target="_blank"
                                >
                                    [2]
                                    http://www.billboardsaustralia.com.au/advice/faq
                                </ReferenceLinks>
                            </References>
                        </InfoText>
                    </>
                )}
                {user.tvMoneySpent === maxValue && (
                    <>
                        <HeaderInfoText>
                            Broader audience but very costly.
                        </HeaderInfoText>
                        <InfoText>
                            You chose tv ads as your form of marketing. Tvs ads
                            are effective as it{" "}
                            <StrongText>
                                grabs a wider audience's attention
                            </StrongText>{" "}
                            within their own homes, incorporating light and
                            sound and most types of emotion (through the use of
                            story) [1]. The negatives of tv advertisement is the
                            large cost, as it can be between{" "}
                            <StrongText>
                                two thousand and two million
                            </StrongText>{" "}
                            to run a tv commercial (not including the production
                            costs) [2]. To change your ad once it's on tv is
                            costly, and the ads need to be frequent and put on
                            at a good time in order to be truly effective [1].
                            <References>
                                References:<br></br>
                                <ReferenceLinks
                                    href="https://www.lyfemarketing.com/blog/types-of-marketing-strategies/"
                                    target="_blank"
                                >
                                    [1]
                                    https://www.lyfemarketing.com/blog/types-of-marketing-strategies/
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="http://lokomotion.com.au/tv-commercial-costs-part-one/#:~:text=The%20short%20answer%20is%2C%20a,it%20stands%20out%20on%20TV."
                                    target="_blank"
                                >
                                    [2]
                                    http://lokomotion.com.au/tv-commercial-costs-part-one/#:~:text=The%20short%20answer%20is%2C%20a,it%20stands%20out%20on%20TV.
                                </ReferenceLinks>
                            </References>
                        </InfoText>
                    </>
                )}
                {user.onlineMoneySpent === maxValue && (
                    <>
                        <HeaderInfoText>
                            Highly competitive but a good payoff if done right
                        </HeaderInfoText>
                        <InfoText>
                            You chose social marketing. This form of marketing
                            is highly effective as{" "}
                            <StrongText>
                                “36% of the worlds population is on social
                                media”
                            </StrongText>{" "}
                            it is said that “No matter the target audience you
                            will be able to reach them” [1]. However due to the
                            large amount of individuals on social media it is
                            highly competitive with{" "}
                            <StrongText>
                                “88% companies in the US alone use it”
                            </StrongText>{" "}
                            and most of your time will be invested in competing
                            with the other companies [1]. However social media
                            marketing “enables brand loyalty and is easy to
                            measure your success” [1]
                            <References>
                                References:<br></br>
                                <ReferenceLinks
                                    href="https://www.lyfemarketing.com/blog/types-of-marketing-strategies/"
                                    target="_blank"
                                >
                                    [1]
                                    https://www.lyfemarketing.com/blog/types-of-marketing-strategies/
                                </ReferenceLinks>
                            </References>
                        </InfoText>
                    </>
                )}
            </Grid.Column>
        </Grid>
    );
};

export default MarketingCard;

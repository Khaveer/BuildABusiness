import React, { useContext, useState } from "react";
import { UserContext } from "../../components/UserContext";

import { Segment, Grid, Image } from "semantic-ui-react";

import styled from "styled-components";

import ResultsGraph1 from "../../../Assets/Results/Resources/BlueGraph.jpg";

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

const SegmentWrapper = styled.div`
    padding: 1em;
`;

const LogisticsCard = () => {
    const [user, setUser] = useContext(UserContext);

    return (
        <Grid>
            <Grid.Column computer={12}>
                <InfoHeader>Resources</InfoHeader>
                {user.step3 === "drones" && (
                    <>
                        <HeaderInfoText>
                            Environmentally friendly, but limiting your revenue
                            due to only being able to ship locally.
                        </HeaderInfoText>
                        <InfoText>
                            You chose drones.{" "}
                            <StrongText>
                                Drones are known as being an environmentally
                                friendly
                            </StrongText>{" "}
                            option as they rely on electricity unlike other
                            modes that rely on unsustainable resources like
                            fuel. They are seen as being effective for light
                            packages, however, has been seen as ineffective for
                            those very reasons as it not a large scale shipping
                            method, with articles stating that collecting the
                            products yourself is better than drones [4], due to
                            this it has forced your business to build your local
                            market, in hand getting{" "}
                            <StrongText>less revenue.</StrongText> There are
                            still issues with drones, like air regulation, with
                            drones only being allowed to fly in controlled
                            environments [3]. More development needs to be done,
                            as while it cost $20,000 per drone [2], in the
                            future its projected that it will cost a business
                            only $70 to transport your products 2260km [1]
                            saving you a lot of logistics cost for the future.
                        </InfoText>{" "}
                    </>
                )}
                {user.step3 === "electricVehicle" && (
                    <>
                        <HeaderInfoText>
                            Environmentally friendly, but limiting your revenue
                            due to only being able to ship locally.
                        </HeaderInfoText>
                        <InfoText>
                            You picked electric car/truck for logistics. This
                            mode of transport is a{" "}
                            <StrongText>greener</StrongText> way of travel [1] ,
                            and importantly is very cost efficient [3] as there
                            are{" "}
                            <StrongText>fewer maintenance costs.</StrongText>{" "}
                            However there needs to be more development into
                            electric trucks, as the only data on electric
                            vehicles is cars with the lowest cost of these cars
                            being $47,000 [2]. Due to the transportation method
                            only being local -
                            <StrongText>
                                your business will have to rely on local
                                markets,
                            </StrongText>
                            if you want to increase your revenue (due to
                            entering a global market) electric cars/trunks are
                            not for you.
                        </InfoText>
                    </>
                )}
                {user.step3 === "train" && (
                    <>
                        <HeaderInfoText>
                            Environmentally friendly, but limiting your revenue
                            due to only being able to ship locally.
                        </HeaderInfoText>
                        <InfoText>
                            You chose trains, which is{" "}
                            <StrongText>
                                more environmentally friendly
                            </StrongText>{" "}
                            then other modes of transport as most railways are
                            electric [3]. They use “little energy per kilometre
                            transported goods” while still being very quick [3].
                            There is{" "}
                            <StrongText>
                                broader amount of countries.
                            </StrongText>{" "}
                            your business can target (unlike trucks) as some
                            countries have underwater train lines (e.g. France
                            to England), however you are still limited by
                            international travel which can{" "}
                            <StrongText>limit large scale revenue</StrongText>{" "}
                            due to not accessing the global markets. It is the
                            2nd fastest mode of transportation [2] , and costs
                            less than other modes like trucks ($13,560) [1].
                        </InfoText>
                    </>
                )}
                {user.step3 === "cShips" && (
                    <>
                        <HeaderInfoText>
                            You're not improving the environment but your
                            revenue will increase due to a larger market access
                            and cost effective shipping.
                        </HeaderInfoText>
                        <InfoText>
                            You chose waterborne shipping (such as cargo ships).
                            From an environmentally friendly standpoint
                            waterborne isn’t as bad as modes like trains, as
                            they are “Emissions measured per tonne and kilometre
                            freighted goods are small” [4]. However, “emissions
                            in relation to energy consumption are high”, with
                            nitrogen oxide being the highest emission produced
                            [4]. Cargo shipping is very cost effective as its
                            around $600 for a 30ft container [1] (1.8 tones)
                            [2]. However, shipping using this method is
                            incredibly slow [3].
                        </InfoText>{" "}
                    </>
                )}
                {user.step3 === "truck" && (
                    <>
                        <HeaderInfoText>
                            Not environmentally friendly and it limits your
                            revenue due to only being able to ship locally,
                            however it is cost effective.
                        </HeaderInfoText>
                        <InfoText>
                            You chose trucks for your logistics, while there has
                            been advancement into electric cars, the majority of
                            trucks are{" "}
                            <StrongText>
                                responsible for a big share of emissions
                            </StrongText>{" "}
                            (mainly carbon dioxide) [2]. Diesel (which is common
                            in trucks) producing a lot of nitrogen oxide
                            impacting climate change greatly (on a large scale)
                            [2]. The continual rate for trucks is 15,820,
                            however, this is always dependent on access to roads
                            and conditions [1].
                        </InfoText>
                    </>
                )}
                {user.step3 === "cPlanes" && (
                    <>
                        <HeaderInfoText>
                            Not environmentally friendly, but cost effective,
                            quick and you will gain more revenue (accessing a
                            global market).
                        </HeaderInfoText>
                        <InfoText>
                            You picked planes for your shipping method. While
                            planes are one of the{" "}
                            <StrongText>cheapest</StrongText> methods of
                            transport (only $3600 for 900kg) [1] and the{" "}
                            <StrongText>quickest </StrongText> form of transport
                            [2]. Air travel have{" "}
                            <StrongText>
                                high rates of nitrogen dioxide emissions
                            </StrongText>
                            (which contains carbon) [3]. Not only that but those
                            emissions go straight into the stratosphere, causing
                            direct damaging to the ozone layer [3]. While there
                            is work being done to make planes more
                            environmentally friendly, a lot of work needs to be
                            done. Even though your choice of shipping is
                            environmentally unfriendly, your consumer
                            relationship will be challenged, as society has
                            begun a fight shame movement, gaining momentum
                            around the world [4].
                        </InfoText>
                    </>
                )}
            </Grid.Column>
            <Grid.Column computer={4}>
                <Image src={ResultsGraph1} size="medium" />
            </Grid.Column>
        </Grid>
    );
};

export default LogisticsCard;

import React, { useContext } from "react";
import { UserContext } from "../../components/UserContext";

import { Grid, Image } from "semantic-ui-react";

import styled from "styled-components";

import ResultsGraph1 from "../../../Assets/Results/Logistics/Feature_Shipping_inlineGraph.jpg";
import ResultsGraph2 from "../../../Assets/Results/Logistics/graph.png";

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
    word-wrap: break-word;
`;

const LogisticsCard = () => {
    const [user] = useContext(UserContext);

    const imageRandom = Math.floor(Math.random() * (3 - 1) + 1);

    return (
        <Grid>
            <Grid.Column computer={12}>
                <InfoHeader>Logistics</InfoHeader>
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
                            <References>
                                References:<br></br>
                                <ReferenceLinks
                                    href="https://www.fehrandpeers.com/drone-delivery/#:~:text=Delivery%20drones%20could%20greatly%20reduce,delivery%20in%20about%2030%20minutes"
                                    target="_blank"
                                >
                                    [1]
                                    https://www.fehrandpeers.com/drone-delivery/#:~:text=Delivery%20drones%20could%20greatly%20reduce,delivery%20in%20about%2030%20minutes
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.airspacemag.com/flight-today/delivery-by-drone-180955988/#:~:text=Eight%20drones%2C%20at%20a%20cost,platform%20also%20designed%20by%20Infinium"
                                    target="_blank"
                                >
                                    [2]
                                    hhttps://www.airspacemag.com/flight-today/delivery-by-drone-180955988/#:~:text=Eight%20drones%2C%20at%20a%20cost,platform%20also%20designed%20by%20Infinium
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.airspacemag.com/flight-today/delivery-by-drone-180955988/"
                                    target="_blank"
                                >
                                    [3]
                                    https://www.airspacemag.com/flight-today/delivery-by-drone-180955988/
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://energysavingtrust.org.uk/how-sustainable-are-drones/#:~:text=Drones%20are%20very%20environmentally%20friendly,up%20to%204.5kg%2F10lb"
                                    target="_blank"
                                >
                                    [4]
                                    https://energysavingtrust.org.uk/how-sustainable-are-drones/#:~:text=Drones%20are%20very%20environmentally%20friendly,up%20to%204.5kg%2F10lb
                                </ReferenceLinks>
                            </References>
                        </InfoText>
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
                            <References>
                                References:<br></br>
                                <ReferenceLinks
                                    href="https://www.swissairroadcargo.com/electric-vehicles-for-transport-of-goods/"
                                    target="_blank"
                                >
                                    [1]
                                    https://www.swissairroadcargo.com/electric-vehicles-for-transport-of-goods/
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.mynrma.com.au/cars-and-driving/electric-vehicles/guide/electric-cars-in-australia#:~:text=How%20much%20does%20an%20EV,are%20powered%20exclusively%20by%20electricity"
                                    target="_blank"
                                >
                                    [2]
                                    https://www.mynrma.com.au/cars-and-driving/electric-vehicles/guide/electric-cars-in-australia#:~:text=How%20much%20does%20an%20EV,are%20powered%20exclusively%20by%20electricity
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.afar.com/magazine/the-most-and-least-eco-friendly-ways-to-travel"
                                    target="_blank"
                                >
                                    [3]
                                    https://www.afar.com/magazine/the-most-and-least-eco-friendly-ways-to-travel
                                </ReferenceLinks>
                            </References>
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
                            <References>
                                References:<br></br>
                                <ReferenceLinks
                                    href="https://www.allianceexperts.com/en/knowledge/transportation-for-international-trade/"
                                    target="_blank"
                                >
                                    [1]
                                    https://www.allianceexperts.com/en/knowledge/transportation-for-international-trade/
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.shiprocket.in/blog/best-shipping-mode-for-ecommerce-business/#:~:text=Shipping%20Through%20Air,-In%20this%20mode&text=Air%20transport%20is%20undoubtedly%20the%20fastest%20mode%20of%20transport"
                                    target="_blank"
                                >
                                    [2]
                                    https://www.shiprocket.in/blog/best-shipping-mode-for-ecommerce-business/#:~:text=Shipping%20Through%20Air,-In%20this%20mode&text=Air%20transport%20is%20undoubtedly%20the%20fastest%20mode%20of%20transport
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.naturvardsverket.se/Documents/publikationer/91-620-9962-0.pdf?pid=4363"
                                    target="_blank"
                                >
                                    [3]
                                    https://www.naturvardsverket.se/Documents/publikationer/91-620-9962-0.pdf?pid=4363
                                </ReferenceLinks>
                            </References>
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
                            <References>
                                References:<br></br>
                                <ReferenceLinks
                                    href="https://www.allianceexperts.com/en/knowledge/transportation-for-international-trade/"
                                    target="_blank"
                                >
                                    [1]
                                    https://www.allianceexperts.com/en/knowledge/transportation-for-international-trade/
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.bison-jacks.com/resources/lp/how-much-does-a-shipping-container-weigh/#:~:text=Typically%20an%20empty%2020%20foot,containers%20tend%20to%20be%20heavier"
                                    target="_blank"
                                >
                                    [2]
                                    https://www.bison-jacks.com/resources/lp/how-much-does-a-shipping-container-weigh/#:~:text=Typically%20an%20empty%2020%20foot,containers%20tend%20to%20be%20heavier
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.shiprocket.in/blog/best-shipping-mode-for-ecommerce-business/#:~:text=Shipping%20Through%20Air,-In%20this%20mode&text=Air%20transport%20is%20undoubtedly%20the%20fastest%20mode%20of%20transport"
                                    target="_blank"
                                >
                                    [3]
                                    https://www.shiprocket.in/blog/best-shipping-mode-for-ecommerce-business/#:~:text=Shipping%20Through%20Air,-In%20this%20mode&text=Air%20transport%20is%20undoubtedly%20the%20fastest%20mode%20of%20transport
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.naturvardsverket.se/Documents/publikationer/91-620-9962-0.pdf?pid=4363"
                                    target="_blank"
                                >
                                    [4]
                                    https://www.naturvardsverket.se/Documents/publikationer/91-620-9962-0.pdf?pid=4363
                                </ReferenceLinks>
                            </References>
                        </InfoText>
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
                            <References>
                                References:<br></br>
                                <ReferenceLinks
                                    href="https://www.allianceexperts.com/en/knowledge/transportation-for-international-trade/"
                                    target="_blank"
                                >
                                    [1]
                                    https://www.allianceexperts.com/en/knowledge/transportation-for-international-trade/
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.naturvardsverket.se/Documents/publikationer/91-620-9962-0.pdf?pid=4363"
                                    target="_blank"
                                >
                                    [2]
                                    https://www.naturvardsverket.se/Documents/publikationer/91-620-9962-0.pdf?pid=4363
                                </ReferenceLinks>
                            </References>
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
                            <References>
                                References:<br></br>
                                <ReferenceLinks
                                    href="https://www.allianceexperts.com/en/knowledge/transportation-for-international-trade/"
                                    target="_blank"
                                >
                                    [1]
                                    https://www.allianceexperts.com/en/knowledge/transportation-for-international-trade/
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.shiprocket.in/blog/best-shipping-mode-for-ecommerce-business/#:~:text=Shipping%20Through%20Air,-In%20this%20mode&text=Air%20transport%20is%20undoubtedly%20the%20fastest%20mode%20of%20transport"
                                    target="_blank"
                                >
                                    [2]
                                    https://www.shiprocket.in/blog/best-shipping-mode-for-ecommerce-business/#:~:text=Shipping%20Through%20Air,-In%20this%20mode&text=Air%20transport%20is%20undoubtedly%20the%20fastest%20mode%20of%20transport{" "}
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.naturvardsverket.se/Documents/publikationer/91-620-9962-0.pdf?pid=4363"
                                    target="_blank"
                                >
                                    [3]
                                    https://www.naturvardsverket.se/Documents/publikationer/91-620-9962-0.pdf?pid=4363
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.afar.com/magazine/how-flygskam-or-flight-shame-could-change-the-way-we-all-travel"
                                    target="_blank"
                                >
                                    [4]
                                    https://www.afar.com/magazine/how-flygskam-or-flight-shame-could-change-the-way-we-all-travel
                                </ReferenceLinks>
                            </References>
                        </InfoText>
                    </>
                )}
            </Grid.Column>
            <Grid.Column computer={4}>
                {imageRandom === 1 && (
                    <>
                        <Image src={ResultsGraph1} size="medium" centered />
                        <ReferenceLinks
                            href="https://ensia.com/features/ship-carbon/"
                            target="_blank"
                        >
                            [Image] https://ensia.com/features/ship-carbon/
                        </ReferenceLinks>
                    </>
                )}
                {imageRandom === 2 && (
                    <>
                        <Image src={ResultsGraph2} size="medium" centered />
                        <ReferenceLinks
                            href="https://ec.europa.eu/clima/policies/transport_en"
                            target="_blank"
                        >
                            [Image]
                            https://ec.europa.eu/clima/policies/transport_en
                        </ReferenceLinks>
                    </>
                )}
            </Grid.Column>
        </Grid>
    );
};

export default LogisticsCard;

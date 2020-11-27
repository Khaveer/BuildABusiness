import React, { useContext } from "react";
import { UserContext } from "../../components/UserContext";

import { Grid, Image } from "semantic-ui-react";

import styled from "styled-components";

//import graphs
import ResultsGraph1 from "../../../Assets/Results/Operations/teeshirt.jpg";
import ResultsGraph2 from "../../../Assets/Results/Operations/twotone.jpg";

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

const SuggestionWrapper = styled.div`
    padding-top: 0.5em;
    text-align: center;
`;

const ResourceCard = () => {
    const [user] = useContext(UserContext);

    const imageRandom = Math.floor(Math.random() * (3 - 1) + 1);

    return (
        <Grid>
            <Grid.Column computer={4} mobile={16}>
                {imageRandom === 1 && (
                    <>
                        <Image src={ResultsGraph1} size="medium" centered />
                        <ReferenceLinks
                            href=" https://sustainingcommunity.wordpress.com/2019/01/24/we-need-to-rethink-fast-fashion/"
                            target="_blank"
                        >
                            [Image]
                            https://sustainingcommunity.wordpress.com/2019/01/24/we-need-to-rethink-fast-fashion/
                        </ReferenceLinks>
                    </>
                )}
                {imageRandom === 2 && (
                    <>
                        <Image src={ResultsGraph2} size="medium" centered />
                        <ReferenceLinks
                            href="https://sanvt.com/journal/environmental-impact-of-fast-fashion-infographic/"
                            target="_blank"
                        >
                            [Image]
                            https://sanvt.com/journal/environmental-impact-of-fast-fashion-infographic/
                        </ReferenceLinks>
                    </>
                )}
            </Grid.Column>
            <Grid.Column computer={12} mobile={16}>
                <InfoHeader>Operations</InfoHeader>
                {user.step2 === "pacfic" && (
                    <>
                        <HeaderInfoText>
                            Environmentally friendly and your choice pays your
                            employees above a living wage.
                        </HeaderInfoText>
                        <InfoText>
                            The pacific is very good with providing a{" "}
                            <StrongText>living wage,</StrongText> giving their
                            employees on average 3,700 per month which is one
                            thousand more than Europe and north America [1] [2],
                            however they do preform worse then America in
                            workers violations and in environmental
                            friendliness. Scoring a{" "}
                            <StrongText>3/5 for workers violations</StrongText>{" "}
                            in Australia (1 being no violations and 5 being a
                            lot). Out of the Pacific’s main large scale
                            manufactures New Zealand is the most environmentally
                            friendly (75% environmentally friendly), with
                            Australia getting a 74% rating for environmentally
                            friendly.s
                            <References>
                                References:<br></br>
                                <ReferenceLinks
                                    href="https://www.payscale.com/research/AU/Industry=Textile_Manufacturing/Hourly_Rate"
                                    target="_blank"
                                >
                                    [1]
                                    https://www.payscale.com/research/AU/Industry=Textile_Manufacturing/Hourly_Rate
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.careers.govt.nz/jobs-database/manufacturing/manufacturing/textile-process-operator/job-opportunities#:~:text=Pay%20for%20textile%20process%20operators,govt.nz%20research%2C%202018"
                                    target="_blank"
                                >
                                    [2]
                                    https://www.careers.govt.nz/jobs-database/manufacturing/manufacturing/textile-process-operator/job-opportunities#:~:text=Pay%20for%20textile%20process%20operators,govt.nz%20research%2C%202018
                                </ReferenceLinks>
                            </References>
                        </InfoText>
                    </>
                )}
                {user.step2 === "europeNA" && (
                    <>
                        <HeaderInfoText>
                            Environmentally friendly and your choice pays your
                            employees above a living wage.
                        </HeaderInfoText>
                        <InfoText>
                            Because your invested in Europe and north America
                            your business will either not impact or positively
                            effect climate change. They are one of the{" "}
                            <StrongText>
                                best for environmental friendliness
                            </StrongText>{" "}
                            (Switzerland scoring an 87% for environmental
                            friendliness), and for workers violations score a
                            1.8/5 (1 being no violations and 5 being a large
                            amount) [1]. There labour costs are on average per
                            month 2612 [2] [3] which is{" "}
                            <StrongText>6 times better than Asia.</StrongText>{" "}
                            However, if climate change continues, supply chains
                            will be lost, and America will be largely effected
                            [4], so while you might have invested properly you
                            need to push others like you to invest, or your hard
                            work won’t matter.
                            <References>
                                References:<br></br>
                                <ReferenceLinks
                                    href="https://sewport.com/countries-with-best-clothing-manufacturers"
                                    target="_blank"
                                >
                                    [1]
                                    https://sewport.com/countries-with-best-clothing-manufacturers
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.ic.gc.ca/app/scr/app/cis/salaries-salaires/313;jsessionid=0001EiypjN2nwYPmxigkuxqBLiJ:-219PGL"
                                    target="_blank"
                                >
                                    [2]
                                    https://www.ic.gc.ca/app/scr/app/cis/salaries-salaires/313;jsessionid=0001EiypjN2nwYPmxigkuxqBLiJ:-219PGL
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://shenglufashion.com/2018/03/04/wage-level-for-garment-workers-in-the-world-updated-in-2017/"
                                    target="_blank"
                                >
                                    [3]
                                    https://shenglufashion.com/2018/03/04/wage-level-for-garment-workers-in-the-world-updated-in-2017/
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.nature.com/articles/s41558-018-0282-y"
                                    target="_blank"
                                >
                                    [4]
                                    https://www.nature.com/articles/s41558-018-0282-y
                                </ReferenceLinks>
                            </References>
                        </InfoText>
                    </>
                )}
                {user.step2 === "latinAmerica" && (
                    <>
                        <HeaderInfoText>
                            You're not improving the environment and workers
                            violations are high, but labour costs are at a
                            living wage and its cost effective.
                        </HeaderInfoText>
                        <InfoText>
                            You placed your manufacturing in Latin America and
                            the Caribbean{" "}
                            <StrongText>
                                which made little impact on the environment.
                            </StrongText>{" "}
                            They are more environmentally friendly and have{" "}
                            <StrongText>
                                less workers violations compared to Asia.
                            </StrongText>{" "}
                            Likewise, there employee{" "}
                            <StrongText>
                                monthly wages are just above the living wage,
                            </StrongText>{" "}
                            (even though its only $80 more than Asia employees.)
                            An example of this is Mexico’s living wage being
                            4,130 Mexican Peso [3] (197 United States Dollar),
                            with their average monthly wage for the textile
                            industry being $207 [1]. This is a positive, as the
                            more an employee gets paid, the more the cost of
                            manufacturing is, which in hand increases the cost
                            of the product (leading to less waste due to less
                            buying of that product) [4]. However, there is still{" "}
                            <StrongText>
                                more improvement needed in the care of their
                                workers as they still got a 3.5/5 for workers
                                violations
                            </StrongText>{" "}
                            [2], likewise environmental friendliness as their
                            highest country was Costa Rica (67% environmentally
                            friendly) and lowest being Guyana (47%
                            environmentally friendly) [2].
                            <SuggestionWrapper>
                                <i>
                                    Next time try investing in the Pacific or
                                    Europe and North America
                                </i>
                            </SuggestionWrapper>
                            <References>
                                References:<br></br>
                                <ReferenceLinks
                                    href="https://shenglufashion.com/2018/03/04/wage-level-for-garment-workers-in-the-world-updated-in-2017/"
                                    target="_blank"
                                >
                                    [1]
                                    https://shenglufashion.com/2018/03/04/wage-level-for-garment-workers-in-the-world-updated-in-2017/
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://sewport.com/countries-with-best-clothing-manufacturers"
                                    target="_blank"
                                >
                                    [2]
                                    https://sewport.com/countries-with-best-clothing-manufacturers
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://tradingeconomics.com/mexico/living-wage-individual#:~:text=Living%20Wage%20Individual%20in%20Mexico%20averaged%204232.50%20MXN%2FMonth%20from,4130%20MXN%2FMonth%20in%202017"
                                    target="_blank"
                                >
                                    [3]
                                    https://tradingeconomics.com/mexico/living-wage-individual#:~:text=Living%20Wage%20Individual%20in%20Mexico%20averaged%204232.50%20MXN%2FMonth%20from,4130%20MXN%2FMonth%20in%202017
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://phys.org/news/2019-01-wage-social-environmental-sustainability.html"
                                    target="_blank"
                                >
                                    [4]
                                    https://phys.org/news/2019-01-wage-social-environmental-sustainability.html
                                </ReferenceLinks>
                            </References>
                        </InfoText>
                    </>
                )}
                {user.step2 === "eastEurope" && (
                    <>
                        <HeaderInfoText>
                            Not environmentally friendly due to the wages of
                            your workers are below a living wage, however it is
                            cost effective.
                        </HeaderInfoText>
                        <InfoText>
                            You have decided to put your manufacturing in east
                            Europe and Eurasia.{" "}
                            <StrongText>
                                Workers violations are lower compared to other
                                countries,
                            </StrongText>{" "}
                            averaging out to have a score of 3 with workers
                            violations (1 being none and 5 being a large amount)
                            and there average environmental friendliness is okay
                            with Slovakia being 70% environmentally friendly and
                            Bosnia and Herzegovina receiving a measly 41% [1].
                            What most people don’t know is that{" "}
                            <StrongText>
                                workers are paid lower in eastern Europe than in
                                China.
                            </StrongText>{" "}
                            Moldova and Ukraine being the worst effected giving
                            workers €70-€80 per month, which is far below a
                            living wage [2]. So while your business might have
                            invested in a location which have average
                            environmentally friendly actions and workers
                            violations, there{" "}
                            <StrongText>
                                labour costs are worst then other regions.
                            </StrongText>{" "}
                            Due to this, it leads to a dystopia, as it opens up
                            the region to be exploited by businesses due to the
                            low cost of manufacturing, leading to a higher
                            output, more buying and thus more waste [3]. Until
                            the workers get granted an eu wide minimum wage,
                            this problem will not be solved [4].
                            <SuggestionWrapper>
                                <i>
                                    Next time try investing in the Pacific or
                                    Europe and North America
                                </i>
                            </SuggestionWrapper>
                            <References>
                                References:<br></br>
                                <ReferenceLinks
                                    href="https://sewport.com/countries-with-best-clothing-manufacturers"
                                    target="_blank"
                                >
                                    [1]
                                    https://sewport.com/countries-with-best-clothing-manufacturers
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.euractiv.com/section/social-europe-jobs/news/textile-workers-paid-lower-in-eastern-europe-than-in-china-report-finds/"
                                    target="_blank"
                                >
                                    [2]
                                    https://www.euractiv.com/section/social-europe-jobs/news/textile-workers-paid-lower-in-eastern-europe-than-in-china-report-finds/
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://phys.org/news/2019-01-wage-social-environmental-sustainability.html"
                                    target="_blank"
                                >
                                    [3]
                                    https://phys.org/news/2019-01-wage-social-environmental-sustainability.html
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.euronews.com/2019/02/12/bulgarian-textile-workers-in-bulgaria-demand-eu-wide-minimum-wage"
                                    target="_blank"
                                >
                                    [4]
                                    https://www.euronews.com/2019/02/12/bulgarian-textile-workers-in-bulgaria-demand-eu-wide-minimum-wage
                                </ReferenceLinks>
                            </References>
                        </InfoText>
                    </>
                )}
                {user.step2 === "midEast" && (
                    <>
                        <HeaderInfoText>
                            Not environmentally friendly due to the wages of
                            your workers are below a living wage, however it is
                            cost effective.
                        </HeaderInfoText>
                        <InfoText>
                            You placed your operations in the middle east/north
                            Africa. While this region scored{" "}
                            <StrongText>
                                okay for environmental friendliness
                            </StrongText>{" "}
                            (highest environmentally friendly country is Israel
                            75% and lowest Iraq with 43%) [1]. The working
                            situation had ethical concerns, not only did they
                            score a{" "}
                            <StrongText>
                                4.5/5 for workers violations
                            </StrongText>{" "}
                            (1 being none and 5 being the most amount) [1], but
                            there average wage per month is 548 [2], with
                            African countries labourers actively{" "}
                            <StrongText>pushing for a living wage</StrongText>{" "}
                            [3] Due to the lack of a living wage, clothing
                            manufacturing prices will continue to be cheap,
                            leading to more demand and more waste [4]. As north
                            Africa and the middle east are considered developing
                            countries [5], the WHO has stated that “climate
                            change has the potential to reverse significant
                            development gains made in these countries” with a
                            significant amount to{" "}
                            <StrongText>additional deaths</StrongText> occurring
                            from malnutrition, malaria, diarrhea and heat stress
                            as of 2030 [6]. So not only will your workers be
                            treated less ethically, but when climate change
                            impacts, there will be more deaths.
                            <SuggestionWrapper>
                                <i>
                                    Next time try investing in the Pacific or
                                    Europe and North America
                                </i>
                            </SuggestionWrapper>
                            <References>
                                References:<br></br>
                                <ReferenceLinks
                                    href="https://sewport.com/countries-with-best-clothing-manufacturers"
                                    target="_blank"
                                >
                                    [1]
                                    https://sewport.com/countries-with-best-clothing-manufacturers
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://shenglufashion.com/2018/03/04/wage-level-for-garment-workers-in-the-world-updated-in-2017/"
                                    target="_blank"
                                >
                                    [2]
                                    https://shenglufashion.com/2018/03/04/wage-level-for-garment-workers-in-the-world-updated-in-2017/
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="http://www.industriall-union.org/living-wages-a-major-demand-in-africa"
                                    target="_blank"
                                >
                                    [3]
                                    http://www.industriall-union.org/living-wages-a-major-demand-in-africa
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://phys.org/news/2019-01-wage-social-environmental-sustainability.html"
                                    target="_blank"
                                >
                                    [4]
                                    https://phys.org/news/2019-01-wage-social-environmental-sustainability.html
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.imf.org/external/pubs/ft/mena/04econ.htm"
                                    target="_blank"
                                >
                                    [5]
                                    https://www.imf.org/external/pubs/ft/mena/04econ.htm
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.international.gc.ca/world-monde/issues_development-enjeux_developpement/environmental_protection-protection_environnement/climate-climatiques.aspx?lang=eng"
                                    target="_blank"
                                >
                                    [6]
                                    https://www.international.gc.ca/world-monde/issues_development-enjeux_developpement/environmental_protection-protection_environnement/climate-climatiques.aspx?lang=eng
                                </ReferenceLinks>
                            </References>
                        </InfoText>
                    </>
                )}
                {user.step2 === "africa" && (
                    <>
                        <HeaderInfoText>
                            Not environmentally friendly due to low labour costs
                            and workers violations, but cost effective,
                        </HeaderInfoText>
                        <InfoText>
                            You placed your manufacturing is sub-Saharan Africa.
                            The average monthly wage for Africa is US $119
                            (2013) [1]. However, a large proportion of countries
                            in sub Saharan Africa are below that line, including
                            Kenya ($116 per month), Zambia ($69 per month) and
                            Uganda ($65 per month) [2]. Their{" "}
                            <StrongText>
                                workers violations scores a 3.8/5
                            </StrongText>{" "}
                            (1 being no violations and 5 being a lot of
                            violations) resulting in being one of the{" "}
                            <StrongText>
                                highest regions for violation
                            </StrongText>{" "}
                            [3], likewise scored as{" "}
                            <StrongText>
                                one of the worst in environmental friendliness,
                            </StrongText>{" "}
                            with almost all (other than Seychelles) scoring
                            bellow 50%, with the lowest being 27% [3]. Sub
                            Saharan Africa is said to be a developing region
                            [4], due to this climate change will affect them the
                            most, “according to the World Health Organization,
                            as of the year 2030, climate change is expected to
                            contribute to approximately{" "}
                            <StrongText>250,000 additional deaths</StrongText>{" "}
                            per year, from malnutrition, malaria, diarrhea and
                            heat stress” [5].
                            <SuggestionWrapper>
                                <i>
                                    Next time try investing in the Pacific or
                                    Europe and North America
                                </i>
                            </SuggestionWrapper>
                            <References>
                                References:<br></br>
                                <ReferenceLinks
                                    href="https://academic.oup.com/wbro/article/32/1/21/2797759"
                                    target="_blank"
                                >
                                    [1]
                                    https://academic.oup.com/wbro/article/32/1/21/2797759
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://shenglufashion.com/2018/03/04/wage-level-for-garment-workers-in-the-world-updated-in-2017/"
                                    target="_blank"
                                >
                                    [2]
                                    https://shenglufashion.com/2018/03/04/wage-level-for-garment-workers-in-the-world-updated-in-2017/
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://sewport.com/countries-with-best-clothing-manufacturers"
                                    target="_blank"
                                >
                                    [3]
                                    https://sewport.com/countries-with-best-clothing-manufacturers
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.un.org/africarenewal/magazine/august-2011/africas-least-developed-lands-opportunity#:~:text=Since%201971%20when%20the%20least,countries%20have%20dominated%20the%20list.&text=Africa's%20LDCs%20are%20highly%20diverse,per%20cent%20in%20recent%20years."
                                    target="_blank"
                                >
                                    [4]
                                    https://www.un.org/africarenewal/magazine/august-2011/africas-least-developed-lands-opportunity#:~:text=Since%201971%20when%20the%20least,countries%20have%20dominated%20the%20list.&text=Africa's%20LDCs%20are%20highly%20diverse,per%20cent%20in%20recent%20years.
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.international.gc.ca/world-monde/issues_development-enjeux_developpement/environmental_protection-protection_environnement/climate-climatiques.aspx?lang=eng"
                                    target="_blank"
                                >
                                    [5]
                                    https://www.international.gc.ca/world-monde/issues_development-enjeux_developpement/environmental_protection-protection_environnement/climate-climatiques.aspx?lang=eng
                                </ReferenceLinks>
                            </References>
                        </InfoText>
                    </>
                )}
                {user.step2 === "asia" && (
                    <>
                        <HeaderInfoText>
                            Not environmentally friendly due to low labour costs
                            and workers violations, but cost effective
                        </HeaderInfoText>
                        <InfoText>
                            You placed your operations in Asia. This has led you
                            to <StrongText>decreasing costs</StrongText> (1 as
                            all top 10 cheapest manufacturing countries are
                            within Asia [1] and increase revenue as your
                            consumers are “always willing to pay less for
                            something even if it's manufactured in China” [2]
                            However, there are some social and economic
                            downfalls with manufacturing in Asia. The{" "}
                            <StrongText>
                                labour costs are 6 times less than Europe
                            </StrongText>{" "}
                            and North America with the average monthly wage
                            being 420 [8]. This is important to the environment
                            as increasing wages not only reduces poverty and
                            make countries for economically capable of
                            environmentally friendly actions, but it will
                            increase prices of clothes meaning that there is
                            less waste [3]. Ethically,{" "}
                            <StrongText>
                                Asia averaged out to have a score of 4.4 with
                                workers violations
                            </StrongText>{" "}
                            (1 being none and 5 being the most amount) [4]. In
                            Bangladesh specifically, “women must sew hundreds of
                            jackets an hour, more than 1,000 a day. Their daily
                            wage is less than $3.” [5] and “in April 24, 2013,
                            the Rana Plaza factory building in Bangladesh
                            collapsed, due to the factory, overloaded with too
                            many floors, workers, and equipment” [5] . While the
                            investment in “protective equipment” is projected
                            for the future, so it the involvement of more
                            ecommerce and technology to push manufacturing and
                            demand even higher. [6], however this wont matter in
                            the long term as due to climate change, India and{" "}
                            <StrongText>
                                china will be largely impacted due to the loss
                                of supply chains
                            </StrongText>{" "}
                            [7] Over all Asia scores very low for environmental
                            friendliness, with the lowest country being Taiwan
                            (27% environmentally friendly) [4]
                            <SuggestionWrapper>
                                <i>
                                    Next time try investing in the Pacific or
                                    Europe and North America
                                </i>
                            </SuggestionWrapper>
                            <References>
                                References:<br></br>
                                <ReferenceLinks
                                    href="https://www.usnews.com/news/best-countries/slideshows/countries-seen-to-have-the-lowest-manufacturing-costs"
                                    target="_blank"
                                >
                                    [1]
                                    https://www.usnews.com/news/best-countries/slideshows/countries-seen-to-have-the-lowest-manufacturing-costs
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.entrepreneur.com/article/269783"
                                    target="_blank"
                                >
                                    [2]
                                    https://www.entrepreneur.com/article/269783
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://phys.org/news/2019-01-wage-social-environmental-sustainability.html"
                                    target="_blank"
                                >
                                    [3]
                                    https://phys.org/news/2019-01-wage-social-environmental-sustainability.html
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://sewport.com/countries-with-best-clothing-manufacturers"
                                    target="_blank"
                                >
                                    [4]
                                    https://sewport.com/countries-with-best-clothing-manufacturers
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://upfront.scholastic.com/issues/2017-18/090417/the-real-cost-of-cheap-fashion.html#1070L"
                                    target="_blank"
                                >
                                    [5]
                                    https://upfront.scholastic.com/issues/2017-18/090417/the-real-cost-of-cheap-fashion.html#1070L
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.globenewswire.com/news-release/2020/03/10/1997918/0/en/Global-Textile-Market-Outlook-2020-2027-Manufacturers-Expected-to-Increase-Expenditure-Toward-Establishing-Strategic-Partnerships-with-E-Commerce-Portals.html#:~:text=The%20global%20textile%20market%20size,to%20drive%20the%20market%20growth"
                                    target="_blank"
                                >
                                    [6]
                                    https://www.globenewswire.com/news-release/2020/03/10/1997918/0/en/Global-Textile-Market-Outlook-2020-2027-Manufacturers-Expected-to-Increase-Expenditure-Toward-Establishing-Strategic-Partnerships-with-E-Commerce-Portals.html#:~:text=The%20global%20textile%20market%20size,to%20drive%20the%20market%20growth
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://www.nature.com/articles/s41558-018-0282-y"
                                    target="_blank"
                                >
                                    [7]
                                    https://www.nature.com/articles/s41558-018-0282-y
                                </ReferenceLinks>
                                <br></br>
                                <ReferenceLinks
                                    href="https://shenglufashion.com/2018/03/04/wage-level-for-garment-workers-in-the-world-updated-in-2017/"
                                    target="_blank"
                                >
                                    [8]
                                    https://shenglufashion.com/2018/03/04/wage-level-for-garment-workers-in-the-world-updated-in-2017/
                                </ReferenceLinks>
                            </References>
                        </InfoText>
                    </>
                )}
            </Grid.Column>
        </Grid>
    );
};

export default ResourceCard;

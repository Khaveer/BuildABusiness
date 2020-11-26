import React from "react";

import styled from "styled-components";

const CardContainer = styled.div`
    //box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: white;
    text-align: left;
`;

const CardHeader = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 1.5em;
    padding-left: 1em;
    padding-top: 1em;
`;

const CardText = styled.p`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 0.7em;
    line-height: 2em;
    word-wrap: break-word;
    padding-left: 2em;
    padding-right: 2em;
`;

const TimerWrapper = styled.div`
    background-color: #fe8a60;
    height: 10%;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 1.5em;
    padding: 0.5em;
`;

const ResultsCard = () => {
    //let State = user.resultState1 + user.resultState2 + user.resultState3;
    let State = 7;
    console.log(State);

    return (
        <div>
            <CardContainer>
                {State <= 7 && <CardHeader>Your Dystopia</CardHeader>}
                {State >= 8 && <CardHeader>Your Utopia</CardHeader>}
                {State <= 5 && (
                    <CardText>
                        Your business was successful in the sense you have a lot
                        of revenue. Your use of cost-effective business model
                        actions has led to your business being well off in the
                        short term. However, your use of environmentally
                        unfriendly actions has affected your business long term.
                        Your business (and ones like yours) have led to this
                        dystopia. Check your results below to find out why.
                    </CardText>
                )}
                {State >= 6 && State <= 7 && (
                    <CardText>
                        Your business was successful in the sense you have
                        revenue, due to your use of cost-effective business
                        model actions. You used some environmentally friendly
                        actions, but while you haven’t negatively impacted the
                        environment - you haven’t positively impacted the
                        environment either. With that trajectory your business
                        (and ones like yours) has led to this dystopia. Check
                        your results below to find out why.
                    </CardText>
                )}
                {State >= 8 && (
                    <CardText>
                        Your business might have taken a little while to become
                        successful, however due to your use of environmentally
                        friendly actions, you (and businesses like yours) have
                        led to this utopia. Your business will flourish in the
                        long term as you will be known as a leader in positive
                        change towards the issue of climate change. Your
                        consumers will grow as there will be push towards
                        sustainable businesses and boycotting non sustainable
                        companies. Well done and thank you! Check out your
                        results below.
                    </CardText>
                )}
                <TimerWrapper>
                    Estimated date we will reach 1.5°C is 24 November 2032
                </TimerWrapper>
            </CardContainer>
        </div>
    );
};

export default ResultsCard;

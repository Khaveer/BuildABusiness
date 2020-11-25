import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        //steps
        current: 1,

        //Money
        step1Spent: 0,
        step2Spent: 0,
        step3Spent: 0,
        //Step4 money spent
        tvMoneySpent: 0,
        onlineMoneySpent: 0,
        bannerMoneySpent: 0,
        influncersMoneySpent: 0,
        //
        difference: 0,

        maxiumValue: 2000000,
        baseCost: 15,
        step1Cost: 0,
        step2Cost: 0,
        step3Cost: 0,
        step4Markup: 0,

        //Form data
        resultState1: 1,
        resultState2: 1,
        resultState3: 1,
        //step10
        cottonValue: 1000000,
        RPETValue: 750000,
        animalValue: 800000,
        syntheticValue: 500000,
        //Step1 choice
        step1: null,

        //Step2
        europeNAValue: 900000,
        LatinAmericValue: 500000,
        eastEuropeValue: 200000,
        midEastValue: 500000,
        asiaValue: 300000,
        pacficValue: 1000000,
        africaValue: 150000,
        //Step2 choice
        step2: null,

        //Step3
        trainValue: 250000,
        cargoPlaneValue: 300000,
        cargoShipValue: 200000,
        dronesValue: 800000,
        electricValue: 600000,
        trucksValue: 250000,
        //step3 choice
        step3: null,

        //Step4 choices
    });

    // const [user, setUser] = useState({
    //     step: {
    //         current: 1, Set by where the user is in the game. Controls the progress step and the game info displayed
    //         resultState: 1, Set by the users choices. Controls the results background image and your results message.
    //     },
    //     money: {
    //         amountSpent: 2000000,
    //         maxiumValue: 3000000,
    //         cost: 50,
    //     },
    // });

    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    );
};

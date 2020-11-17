import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        //steps
        current: 1,

        //Money
        amountSpent: 0,
        maxiumValue: 3000000,
        cost: 20,

        //Form data

        //step1
        cottonValue: 500000,
        RPETValue: 1000000,
        animalValue: 1500000,
        syntheticValue: 2000000,
        //Step1 choice
        step1: null,

        resultState: 1,

        step2: "",
        step3: "",
        step4: {
            TV: 0,
            onlineAd: 0,
            banners: 0,
            influencers: 0,
        },
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

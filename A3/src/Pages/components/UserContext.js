import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState({
        step: {
            current: 2,
            resultState: 3,
        },
        money: {
            amountSpent: 2000000,
            maxiumValue: 3000000,
            cost: 20,
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

    console.log(user);
    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    );
};

import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState({
        step: {
            current: 1,
        },
        money: {
            amountSpent: 2000000,
            maxiumValue: 3000000,
            cost: 50,
        },
    });
    console.log(user);
    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    );
};

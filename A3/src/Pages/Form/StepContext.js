import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState({
        steps: {
            step1: "current",
            step2: "before",
            step3: "before",
            step4: "before",
        },
        money: {
            amountSpent: 2000000,
            maxiumValue: 3000000,
        },
    });
    console.log(user);
    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    );
};

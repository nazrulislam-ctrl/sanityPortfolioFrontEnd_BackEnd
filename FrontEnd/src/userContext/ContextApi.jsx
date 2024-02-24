import { createContext, useState } from "react";

export const userContext= createContext();

export const UserProvider =({children})=>{
    const [loggedUser, setLoggedUser]= useState({});

    return (<userContext.Provider value={{loggedUser, setLoggedUser}}>{children}</userContext.Provider>)

};

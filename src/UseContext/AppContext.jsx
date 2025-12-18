import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props)=>{
   const phone = 1234567890;
   const address = "123 Main St, Anytown, USA";
    return(
        <AppContext.Provider value={{phone, address}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider; 
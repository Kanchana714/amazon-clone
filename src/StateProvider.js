// //setup data layer 
// //import { createContext } from "react";
// import React, {createContext,useContext,useReducer} from "react"
// //DATA Layer
// export const StateContext=createContext();

// //BUILD a PROVIDER
// export const StateProvider=({reducer,initialState,children})=>
// {
//    <StateContext.Provider value={useReducer(reducer,initialState)}>
//     {children}
//    </StateContext.Provider>
// }

// export const useStateValue=() => useContext(StateContext);
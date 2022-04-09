 import React,{createContext, useContext , useReducer} from 'react'
//prepare the dataLayer
 export const StateContext = createContext();

 //Wrap our app and provide the data layer
 export const StateProvider = ({reducer, initialState, children}) =>(
   <StateContext.Provider value={useReducer(reducer,initialState)}>
      {children}
   </StateContext.Provider>
 );

 //Pull information
 export const useStateValue = () => useContext(StateContext);
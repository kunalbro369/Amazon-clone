
import { createContext,useReducer,useContext } from "react";


// Data layer
export const StateContext = createContext();

// Building Provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );

  // this is how we use it inside component
export const useStateValue = ()=>useContext(StateContext);
import React, { useReducer } from "react";
import quoteContext from "./quoteContext";
import quoteReducer from "./quoteReducer";
import { SELECT_VEHICLE_SUCCESS } from "../../../types";

const QuoteState = props => {
   const initialState = {
      vehicleLocal: null,
      total: 1
   }

   const [state, dispatch] = useReducer(quoteReducer, initialState)

   const SelectVehicle = vehicle => {
      dispatch({
         type: SELECT_VEHICLE_SUCCESS,
         payload: vehicleLocal
      })
   }

   return (
      <quoteContext.Provider
      value={{
         //vehicleLocal: state.vehicleLocal,
         ...state,
         SelectVehicle
      }}
   >
      {props.children}
   </quoteContext.Provider>
  )



}

export default QuoteState
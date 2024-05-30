import React, { useReducer } from "react";
import quoteContext from "./quoteContext";
import quoteReducer from "./quoteReducer";
import {
   SELECT_VEHICLE_SUCCESS,
   SHOW_SUMMARY_SUCCESS,
   SAVE_SUMMARY_SUCCESS
} from "../../../types";

const QuoteState = props => {
   const initialState = {
      quote: null,
      vehicleLocal: null,
      total: 1
   }

   const [state, dispatch] = useReducer(quoteReducer, initialState)

   const SelectVehicle = vehicle => {
      dispatch({
         type: SELECT_VEHICLE_SUCCESS,
         payload: vehicle
      })
   }

   const showQuote = (quote) => {
      dispatch({
         type: SHOW_SUMMARY_SUCCESS,
         payload: quote
      })
   }

   const saveQuote = (quote) =>{
      dispatch({
         type: SAVE_SUMMARY_SUCCESS,
         payload: quote
      })
   }

   return (
      <quoteContext.Provider
         value={{
            //vehicleLocal: state.vehicleLocal,
            ...state,
            SelectVehicle,
            showQuote,
            saveQuote
         }}
      >
         {props.children}
      </quoteContext.Provider>
   )



}

export default QuoteState
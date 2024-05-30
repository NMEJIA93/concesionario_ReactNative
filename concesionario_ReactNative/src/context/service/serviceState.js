import React, { useReducer } from "react";
import firebase from '../../FirebaseDB';
import serviceContext from "./serviceContext";
import serviceReducer from "./serviceReducer";


const serviceState = props => {
    const initialState = {
        servicio: []
    }
    const [state, dispatch] = useReducer(serviceReducer, initialState)
    return (
        <serviceContext.Provider
            value={{
                servicio: state.servicio,
                firebase
            }}
        >
            {props.children}
        </serviceContext.Provider>
    )

}

export default serviceState;
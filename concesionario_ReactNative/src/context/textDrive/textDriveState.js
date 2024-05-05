import React, { useReducer } from "react";
import firebase from '../../FirebaseDB';
import textDriveContext from "./testDriveContext";
import textDriveReducer from "./textDriveReducer";


const textDrive = props => {
    const initialState = {
        text: []
    }
    const [state, dispatch] = useReducer(textDriveReducer, initialState)
    return (
        <textDriveContext.Provider
            value={{
                text: state.text,
                firebase
            }}
        >
            {props.children}
        </textDriveContext.Provider>
    )

}

export default textDrive;
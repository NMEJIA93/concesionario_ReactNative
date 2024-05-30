import React, { useReducer } from "react";
import firebase from '../../FirebaseDB';
import testDriveContext from './testDriveContext';
import testDriveReducer from './testDriveReducer';


const testDriveState = props => {
    const initialState = {
        testDrive: []
    }
    const [state, dispatch] = useReducer(testDriveReducer, initialState)
    return (
        <testDriveContext.Provider
            value={{
                testDrive: state.testDrive,
                firebase
            }}
        >
            {props.children}
        </testDriveContext.Provider>
    )

}

export default testDriveState;
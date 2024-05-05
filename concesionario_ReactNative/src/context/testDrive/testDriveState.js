import React, { useReducer } from "react";
import firebase from '../../FirebaseDB';
import TestDriveContext from './testDriveContext';
import TestDriveReducer from './testDriveReducer';


const TestDriveState = props => {
    const initialState = {
        testDrive: []
    }
    const [state, dispatch] = useReducer(TestDriveReducer, initialState)
    return (
        <TestDriveContext.Provider
            value={{
                testDrive: state.testDrive,
                firebase
            }}
        >
            {props.children}
        </TestDriveContext.Provider>
    )

}

export default TestDriveState;
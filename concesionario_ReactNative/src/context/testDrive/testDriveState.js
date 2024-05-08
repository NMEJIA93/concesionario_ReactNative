import React, { useReducer } from "react";
import firebase from '../../FirebaseDB';
import testDriveContext from "./testDriveContext";
import TestDriveReducer from './testDriveReducer';
import { GET_SUCCESSFUL_PRODUCTS } from "../../../types";
import _ from 'lodash'

const TestDriveState = props => {
    const initialState = {
        testDrive: []
    }
    const [state, dispatch] = useReducer(TestDriveReducer, initialState)

    const getListCart = () => {

        firebase.db
        .collection('catalogue')
        .onSnapshot(manageSnapshot)
    
    function manageSnapshot(snapshot){
        console.log('===', snapshot.docs)

        let cars = snapshot.docs.map(doc =>{
            return{
                id:doc.id,
                ...doc.data()
            }
        })

        console.log('----> testDrive', cars)
        dispatch({
            type:GET_SUCCESSFUL_PRODUCTS,
            payload:cars
        })

    }
    }

    return (
        <testDriveContext.Provider
            value={{
                testDrive: state.testDrive,
                firebase,
                getListCart
            }}
        >
            {props.children}
        </testDriveContext.Provider>
    )

}

export default TestDriveState;
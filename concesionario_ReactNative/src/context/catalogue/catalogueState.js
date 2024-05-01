import React, { useReducer } from "react";
import firebase from '../../FirebaseDB';
import CatalogueContext from './catalogueContext';
import CatalogueReducer from './catalogueReducer';
import { GET_SUCCESSFUL_PRODUCTS } from "../../../types";
import _ from 'lodash'


const CatalogueState = props => {
    const initialState = {
        catalogue: []
  
    }
    const [state, dispatch] = useReducer(CatalogueReducer, initialState)

    const getListCars = () => {
        //consultar a la base de datos
        firebase.db
            .collection('catalogue')
            .onSnapshot(manageSnapshot)

        function manageSnapshot(snapshot) {
            console.log('=== ', snapshot.docs)

            let cars = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });

            //ordenar los datos 
            //cars = _.sortBy(
            console.log('-----> ', cars)
            dispatch({
                type: GET_SUCCESSFUL_PRODUCTS,
                payload: cars
            })
        }
    }
    return (
        <CatalogueContext.Provider
            value={{
                catalogue: state.catalogue,
                firebase,
                getListCars
            }}
        >
            {props.children}
        </CatalogueContext.Provider>
    )

}

export default CatalogueState;
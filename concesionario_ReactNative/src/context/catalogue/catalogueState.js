import React, { useReducer } from "react";
import firebase from '../../FirebaseDB';
import CatalogueContext from './catalogueContext';
import CatalogueReducer from './catalogueReducer';


const CatalogueState = props => {
    const initialState = {
        catalogue: []
    }
    const [state, dispatch] = useReducer(CatalogueReducer, initialState)
    return (
        <CatalogueContext.Provider
            value={{
                catalogue: state.catalogue,
                firebase
            }}
        >
            {props.children}
        </CatalogueContext.Provider>
    )

}

export default CatalogueState;
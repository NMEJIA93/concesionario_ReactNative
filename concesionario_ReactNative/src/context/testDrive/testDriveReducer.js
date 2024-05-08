import { GET_SUCCESSFUL_PRODUCTS } from "../../../types";
import Catalogue from "../../screens/Catalogue";

export default (state,action)=>{
    switch(action.type){
        case GET_SUCCESSFUL_PRODUCTS: 
            return{
                ...state,
                testDrive: action.payload
            }
            default:
                return state;
    }
}
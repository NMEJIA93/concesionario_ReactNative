import { GET_SUCCESSFUL_PRODUCTS } from "../../../types";

export default (state,action)=>{
    switch(action.type){
        case GET_SUCCESSFUL_PRODUCTS:
            return{
                ...state,
                catalogue: action.payload
            }
        default: 
            return state;
    }

    
}









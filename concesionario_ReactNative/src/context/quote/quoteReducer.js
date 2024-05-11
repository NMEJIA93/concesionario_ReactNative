import { SELECT_VEHICLE_SUCCESS } from "../../../types";

export default(state,action)=>{
    switch(action.type){
        case SELECT_VEHICLE_SUCCESS:
            console.log('-----> reducer state',state);
            console.log('------->reducer action:',action);
            return{
                ...state,
                vehicleLocal: action.payload
            }
            default:
                return state;
    }
}
import {
    SELECT_VEHICLE_SUCCESS,
    SHOW_SUMMARY_SUCCESS,
    SAVE_SUMMARY_SUCCESS
} from "../../../types";

export default (state, action) => {
    switch (action.type) {
        case SELECT_VEHICLE_SUCCESS:
            console.log('-----> reducer state', state);
            console.log('------->reducer action:', action);
            return {
                ...state,
                vehicleLocal: action.payload
            }
        case SHOW_SUMMARY_SUCCESS:
            console.log('-----> reducer state', state);
            console.log('------->reducer action:', action);
            return {
                ...state,
                quote: action.payload
            }
        case SAVE_SUMMARY_SUCCESS:
            return{
                ...state,
                quoteSave: action.payload 
            }
        default:
            return state;
    }
}
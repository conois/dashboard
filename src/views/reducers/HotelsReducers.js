import { combineReducers } from 'redux';
import {
    SET_LOADING_HOTELS,
    SET_HOTELS,
    SET_ERROR_HOTELS,
} from '../actions/types';


const setHotelsReducer = (state = [], action) => {
    switch (action.type) {
        case SET_HOTELS:
            return action.hotels   
        default:
            return state;
    }
};

const setErrorHotelsReducer = (state = false, action) => {
    switch (action.type) {
        case SET_ERROR_HOTELS:
            return action.error;
        default:
            return state;
    }
};

const setLoadingHotelReducer = (state = false, action) => {
    switch (action.type) {
        case SET_LOADING_HOTELS:
            return action.loading;
        default:
            return state;
    }
};



export default combineReducers({
    hotels: setHotelsReducer,
    errorHotels: setErrorHotelsReducer,
    loadingHotels: setLoadingHotelReducer,
});
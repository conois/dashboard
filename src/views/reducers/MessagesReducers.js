
import { combineReducers } from 'redux';
import {
    SET_LOADING_MESSAGES,
    SET_MESSAGES,
    SET_ERROR_MESSAGES,
    SET_MESSAGE_ACTIVE,
    CLEAR_MESSAGE_ACTIVE,
} from '../actions/types';

const setLoadingMessagesReducer = (state = false, action) => {
    switch (action.type) {
        case SET_LOADING_MESSAGES:
            return action.loading;   
        default:
            return state;
    }
}

const setErrorMessagesReducer = (state = false, action) => {
    switch (action.type) {
        case SET_ERROR_MESSAGES:
            return action.error;   
        default:
            return state;
    }
}

const setMessagesReducer = (state = [], action) => {
    switch (action.type) {
        case SET_MESSAGES:
            return action.messages;   
        default:
            return state;
    }
};

const setMessageActiveReducer = (state = false, action) => {
    switch (action.type) {
        case SET_MESSAGE_ACTIVE:
            return action.message;
        case CLEAR_MESSAGE_ACTIVE:
            return false; 
        default:
            return state;
    }
};


export default combineReducers({
    messages: setMessagesReducer,
    errorMessages: setErrorMessagesReducer,
    loadingMessages: setLoadingMessagesReducer,
    messageActive: setMessageActiveReducer,
});
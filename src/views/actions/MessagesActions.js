import {
    SET_LOADING_MESSAGES,
    SET_MESSAGES,
    SET_ERROR_MESSAGES,
    SET_MESSAGE_ACTIVE,
    CLEAR_MESSAGE_ACTIVE,
} from './types';

//import services
import { getMessages } from '../../services/messageServices';

/* ACTIONS MESSAGES LIST */
const setLoadingMessages = (loading) => ({
    type: SET_LOADING_MESSAGES,
    loading,
});

const setErrorMessages = (error) => ({
    type: SET_ERROR_MESSAGES,
    error,
});

const setMessages = (messages) => ({
    type: SET_MESSAGES,
    messages,
});

const setMessageActive = (message) => ({
    type: SET_MESSAGE_ACTIVE,
    message,
});

const clearMessageActive = () => ({
    type: CLEAR_MESSAGE_ACTIVE,
});


const getMessagesList = () => async (dispatch) => {
    dispatch(setLoadingMessages(true));
    getMessages().then((resp) => {
        return resp.json();
    })
    .then((messages) => {
        if (messages) {
            dispatch(setMessages(messages));
        }
        dispatch(setLoadingMessages(false));
    })
    .catch(e => {
        dispatch(setErrorMessages(true));
        dispatch(setLoadingMessages(false));
    });
};

export {
    getMessagesList,
    setMessageActive,
    clearMessageActive,
};
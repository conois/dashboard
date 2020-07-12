import {
    SET_LOADING_HOTELS,
    SET_HOTELS,
    SET_ERROR_HOTELS,
} from './types';
import { getHotels } from '../../services/hotelsServices';

const setLoadingHotel = (loading) => ({
    type: SET_LOADING_HOTELS,
    loading,
});

const setErrorHotels = (error) => ({
    type: SET_ERROR_HOTELS,
    error,
})

const setHoteles = (hotels) => ({
    type: SET_HOTELS,
    hotels,
})

const getHotelsInformation = () => async (dispatch) => {
    dispatch(setLoadingHotel(true));
    getHotels().then((resp) => {
        const { information } = resp;
        dispatch(setHoteles(information));
        dispatch(setLoadingHotel(false));
    }).catch(e => {
        dispatch(setErrorHotels(true));
        dispatch(setHoteles(true));
        dispatch(setLoadingHotel(false));
    });
};

export {
    setLoadingHotel,
    getHotelsInformation,
}
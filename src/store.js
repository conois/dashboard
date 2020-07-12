import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import { setHotelsReducer, setErrorHotelsReducer, setLoadingHotelReducer } from './views/reducers/Home';


const rootReducer = combineReducers({
    infoHotels: {
        hotels: setHotelsReducer,
        loading: setLoadingHotelReducer,
        error: setErrorHotelsReducer,
    },
});

const middlewares = [thunk];

const configureStore = () => createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares)),
);

export default configureStore;


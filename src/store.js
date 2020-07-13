import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import infoHotels from './views/reducers/HotelsReducers';
import infoMessages from './views/reducers/MessagesReducers';


const rootReducer = combineReducers({
    infoHotels,
    infoMessages,
});

const middlewares = [thunk];

const configureStore = () => createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
);

export default configureStore;


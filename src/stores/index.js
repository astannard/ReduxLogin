import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import getRootReducer from '../reducers';

export default function getStore(navReducer){
    return store = createStore(getRootReducer(navReducer),{},applyMiddleware(ReduxThunk));
}
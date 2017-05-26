import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import getRootReducers from '../reducers';

export default function getStore(){
    return store = createStore(getRootReducers(),{},applyMiddleware(ReduxThunk));
}
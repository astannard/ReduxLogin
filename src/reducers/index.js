import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import CompanyReducer from './CompanyReducer';


export default function getRootReducer(navReducer){
    return combineReducers({
        nav: navReducer,
        auth: AuthReducer,
        companies: CompanyReducer,
    })
}

// export default combineReducers({
    
//     auth: AuthReducer,
//     companies: CompanyReducer,
// })
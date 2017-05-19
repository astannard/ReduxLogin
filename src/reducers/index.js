import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import CompanyReducer from './CompanyReducer';

export default combineReducers({
    
    auth: AuthReducer,
    companies: CompanyReducer
})
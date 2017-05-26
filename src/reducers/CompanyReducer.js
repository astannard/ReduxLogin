import {GET_COMPANIES, COMPANIES_LOADED, COMPANIES_FAILED, LOGIN_USER_SUCCESS} from '../actions/types';

import { getCompanyList } from '../actions/company'

const INITIAL_STATE = {
    companies: [],
    error:''
}

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case COMPANIES_LOADED:
            return { ...state, companies: action.payload };
        case COMPANIES_FAILED:
        debugger
        return {...state, error: 'Could not load companies'+action.payload}
        default:
            return state;

    }

}
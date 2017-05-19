import {GET_COMPANIES, COMPANIES_LOADED, LOGIN_USER_SUCCESS} from '../actions/types';

import { getCompanyList } from '../actions/company'

const INITIAL_STATE = {
    companies: []
}

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {

        case LOGIN_USER_SUCCESS :
            console.log('companyReducer: LOGIN_USER_SUCCESS', action.payload );
            const {Username,ApiKey} = action.payload;
            getCompanyList(
                {
                    username: Username, 
                    apiKey: ApiKey
                }
            );
            return state;
        case COMPANIES_LOADED:
            return { ...state, email: action.payload };
        default:
            return state;

    }

}
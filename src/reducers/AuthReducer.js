import {PASSWORD_CHANGED, EMAIL_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGOUT_USER_SUCCESS, LOADING, LOADED} from '../actions/types';

const INITIAL_STATE = {
    email:'',
    password:'',
    user:null,
    apploading: false,
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload }; 
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload};
        case LOGIN_USER_FAIL:
            return { ...state};
        case LOGOUT_USER_SUCCESS:
            return { ...state, user: null};
        case LOADING:
            return { ...state, apploading: true};
        case LOADED:
            return { ...state, apploading: false};    
        default:
            return state;
    }
}
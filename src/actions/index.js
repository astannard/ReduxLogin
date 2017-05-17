import firebase from 'firebase';
import {PASSWORD_CHANGED, EMAIL_CHANGED, LOGIN_USER_SUCCESS} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const loginUser = (email, password) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email,password).then(user =>{
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: user
            });
        });
    };
    
}
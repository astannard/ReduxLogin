import firebase from 'firebase';
import {PASSWORD_CHANGED, EMAIL_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGOUT_USER_SUCCESS, LOADING, LOADED} from './types';

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

export const loginUser = ({email, password}) => {
    console.log('log me in');


    return (dispatch) => {

        dispatch({
            type: LOADING,
        });

        firebase.auth().signInWithEmailAndPassword(email,password).then(user =>{
            if(user.uid !== undefined){
                dispatch({
                    type: LOGIN_USER_SUCCESS,
                    payload: user
                });
            }else{
                 dispatch({
                    type: LOGIN_USER_FAIL,
                    payload: user
                }); 
            }

            dispatch({
                type: LOADED,
            });
        });
    }; 
}



export const logoutUser = () => {
    console.log('log me out');

    return (dispatch) => {
        firebase.auth().signOut().then(() =>{
            dispatch({
                type: LOGOUT_USER_SUCCESS
            });
        });
    }; 
}


export const loading = () => {
    return {
        type: LOADING,
    }
}

export const loaded = () => {
    return {
        type: LOADED,
    }
}
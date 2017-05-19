import {LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, COMPANIES_FAILED, LOGOUT_USER_SUCCESS, COMPANIES_LOADED} from '../actions/types';
const login_url = "https://api.inniaccounts.co.uk/mAPITest/api/login/login";
const getCompanies_url = "https://api.inniaccounts.co.uk/mAPITest/api/CompanyList/GetCompanies3";


export const doLogin = (dispatch,{username, password}) => {
    console.log('fetch request for login being made');
    let response = fetch(
        login_url, {
            method:'post',
            dataType: 'jsonp',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
    }).then((response)=> {
        console.log('login response recieved');
            return response;   
    }).then((responseData) => {
        return responseData.json();
    }).then((result) =>{
        console.log('login response is: ',result);
        if (result.Success !== true) {
            dispatch({
                type: LOGIN_USER_FAIL
            }); 
        }
        else{
            const { UserResponse } = result;
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: UserResponse
            }); 
        }
    }).catch(function(err) {
      console.log('Error occured',err);
    });    

}



export const getCompanies = (dispatch,username,apikey) => {
    console.log('getCompanies');

    let response = fetch(
        `${getCompanies_url}?username=${username}&apikey=${apikey}`, {
            method:'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'text/plain'
            }
    }).then((response)=> {
         console.log('get companies responded:',response);
            return response.json();   
    }).then((responseData) => {
        console.log('get companies json unwrapped:',responseData);
        return responseData
    }).then((result) => {
        console.log('get companies result:',result);
        console.log('get companies succeded:');
        // const { Companies } = result;
        dispatch({
            type: COMPANIES_LOADED,
            payload: result
        }); 
        
    }).catch(function(err) {
      console.log('Error occured when fetch companies',err);
    });    

}
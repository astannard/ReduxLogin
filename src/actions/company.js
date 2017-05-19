import firebase from 'firebase';
import { GET_COMPANIES } from './types';
import { getCompanies } from '../apihelper';



export const getCompanyList = ({username, apiKey}) => {
    console.log('getCompanyList');


    return (dispatch) => {

      //  dispatch({type: LOADING});

        getCompanies(dispatch,{
            username,
            apiKey}
        );
    } 
}

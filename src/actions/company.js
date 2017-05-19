import { GET_COMPANIES, LOADING } from './types';
import { getCompanies } from '../apihelper';



export const getCompanyList = ({username, apiKey}) => {
    console.log('company.getCompanyList');


    return (dispatch) => {
        getCompanies(dispatch, username, apiKey);

    };
}

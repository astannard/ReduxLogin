import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import CompanyReducer from './CompanyReducer';
import ExpenseFormReducer from './ExpenseFormReducer';


export default function getRootReducers(){
    return combineReducers({
        auth: AuthReducer,
        companies: CompanyReducer,
        expenseform: ExpenseFormReducer,
    })
}


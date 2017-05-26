import { EXPENSE_FORM_UPDATE } from './types';

export const expenseFormUpdate = ({prop,value}) => {
    return {
        type: EXPENSE_FORM_UPDATE,
        payload: {prop, value}
    };
};
import { EXPENSE_FORM_UPDATE } from '../actions/types';

const INITIAL_STATE = {
    date: '',
    description: '',
    amount: '',
    category: '',
    vatcode: '',
    refno: '',
    billable: false,
    contract: null,
};

export default(state = INITIAL_STATE, action) => {
    switch(action.type){

        case EXPENSE_FORM_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value } //[] are used for key interpelation to alter the key being updated

        default:
            return state;


    }
}
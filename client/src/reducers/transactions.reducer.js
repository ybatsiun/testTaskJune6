import { transactionConstants } from '../_constants';

export function transactions(state = [], action) {
    switch (action.type) {
        case transactionConstants.TRANSACTIONS_FECTHED:
            return {
                transactions: action.transactions
            };
        // case userConstants.TRANSACTION_SUBMITTED:
        //     return { ...state, refLink: action.refLink };
        // case userConstants.DELETE_REF_LINK:
        //     return { ...state, refLink: null };
        default:
            return state
    }
}
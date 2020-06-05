import { transactionConstants } from '../_constants';

export function balance(state = 0, action) {
    switch (action.type) {
        case transactionConstants.BALANCE_FETCHED:
            return action.balance.balance

        default:
            return state
    }
}
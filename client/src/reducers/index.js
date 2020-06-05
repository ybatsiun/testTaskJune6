import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import { transactions } from './transactions.reducer';
import { balance } from './balance.reducer';

export default history => combineReducers({
    router: connectRouter(history),
    transactions,
    balance
});
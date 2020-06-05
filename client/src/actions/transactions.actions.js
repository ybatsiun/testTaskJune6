import { transactionConstants } from '../_constants';
import { serviceHelper } from '../_helpers';
import { transactionService } from '../_services';

export const transactionActions = {
    getTransactions,
    findTransaction,
    commitTransaction,
    getBalance
};

function getTransactions() {
    return dispatch =>
        transactionService.getTransactions()
            .then(transactions => dispatch({ type: transactionConstants.TRANSACTIONS_FECTHED, transactions }))
            .catch(serviceHelper.actionsErrorHandler);
}

function findTransaction(transactionId) {
    return dispatch =>
        transactionService.findTransaction(transactionId)
            .then(transaction => dispatch({ type: transactionConstants.TRANSACTIONS_FECTHED, transaction }))
            .catch(serviceHelper.actionsErrorHandler);
}
function commitTransaction(transaction) {

    return async dispatch => {
        try {
            const res = await transactionService.checkApproval(transaction);
            if (res.approved) {
                const transactions = await transactionService.commitTransaction(transaction);
                return dispatch({ type: transactionConstants.TRANSACTIONS_FECTHED, transactions });
            } else {
                alert('Transaction can not be completed')
            }
        } catch (e) {
            serviceHelper.actionsErrorHandler()
        }
    };
}

function getBalance() {
    return dispatch =>
        transactionService.getBalance()
            .then(balance => dispatch({ type: transactionConstants.BALANCE_FETCHED, balance }))
            .catch(serviceHelper.actionsErrorHandler);
}
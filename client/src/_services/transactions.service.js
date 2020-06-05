import { serviceHelper } from '../_helpers';
import { apiConstants, constructUrl } from '../_constants';

export const transactionService = {
    getTransactions,
    commitTransaction,
    checkApproval,
    findTransaction,
    getBalance
}

function getTransactions() {
    return global.fetchWithLoader(
        constructUrl(apiConstants.TRANSACTIONS),
        serviceHelper.getRequestOptions('GET'))
        .then(serviceHelper.handleResponse);
}

function commitTransaction(transaction) {
    return global.fetchWithLoader(
        constructUrl(apiConstants.TRANSACTIONS),
        serviceHelper.getRequestOptions('POST', { transaction }))
        .then(serviceHelper.handleResponse);
}

function findTransaction(transactionId) {
    return global.fetchWithLoader(
        constructUrl(apiConstants.FIND_TRANSACTION(transactionId)),
        serviceHelper.getRequestOptions('GET'))
        .then(serviceHelper.handleResponse);
}

function checkApproval(transaction) {
    return global.fetchWithLoader(
        constructUrl(apiConstants.TRANSACTION_CHECK),
        serviceHelper.getRequestOptions('POST', { transaction }))
        .then(serviceHelper.handleResponse);
}

function getBalance() {
    return global.fetchWithLoader(
        constructUrl(apiConstants.BALANCE),
        serviceHelper.getRequestOptions('GET'))
        .then(serviceHelper.handleResponse);
}
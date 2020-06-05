import config from '../config';

export const apiConstants = {
    TRANSACTIONS: '/transactions',
    FIND_TRANSACTION: transactionId => `/transactions/${transactionId}`,
    BALANCE: '/balance',
    TRANSACTION_CHECK: '/transactionCheck'
}

export const routingConstants = {
    ADD_MEMBER_BY_REF: ref => `/addMe/${ref}`
}

export const constructUrl = url => `${config.apiUrl}${url}`;
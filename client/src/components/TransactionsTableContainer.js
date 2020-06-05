import TransactionsTable from './TransactionsTable';
import { connect } from 'react-redux';

import { transactionActions } from '../actions';

const mapDispatchToProps = dispatch => {
    return {
        fetchTransactions: () => {
            return dispatch(transactionActions.getTransactions());
        }
    }
}

const mapStateToProps = state => {
    return {
        transactionsFromGlobalState: state.transactions,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TransactionsTable)
import { connect } from 'react-redux';
import { transactionActions } from '../actions';
import TransactionBuilder from './TransactionBuilder';


const mapDispatchToProps = dispatch => {
    return {
        commitTransaction: (transaction) => {
            return dispatch(transactionActions.commitTransaction(transaction));
        }
    }
}

export default connect(null, mapDispatchToProps)(TransactionBuilder)
import { connect } from 'react-redux';
import { transactionActions } from '../actions';
import Balance from './Balance';


const mapDispatchToProps = dispatch => {
    return {
        fetchBalance: () => {
            return dispatch(transactionActions.getBalance());
        }
    }
}

const mapStateToProps = state => {
    return {
        balance: state.balance,
        transactions: state.transactions
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Balance)
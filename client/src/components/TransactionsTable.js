import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import MaterialTable from 'material-table'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    buttonsBar: {
        paddingTop: '22px'
    }
}));

export default function TransactionsTable({ fetchTransactions, transactionsFromGlobalState }) {

    const classes = useStyles();
    const [selectedTransAction, setselectedTransAction] = useState();

    useEffect(() => {
        const fetch = async () => {
            await fetchTransactions();
        };
        fetch();
    }, []);

    function onTransactionRowClick(e, transaction) {
        setselectedTransAction(transaction)
    }

    return <>
        <MaterialTable
            onRowClick={onTransactionRowClick}
            className={classes.paper}
            title='Transactions history'
            data={transactionsFromGlobalState.transactions}
            columns={[
                { title: 'Id', field: 'id' },
                { title: 'Type', field: 'type' },
                { title: 'Amount', field: 'amount', type: 'numeric' },
                { title: 'Date', field: 'effectiveDate' },
            ]}
        />

        {selectedTransAction && <div>
            Amount: {selectedTransAction.amount}
            <br />
            Type: {selectedTransAction.type}
            <br />
            Date: {selectedTransAction.effectiveDate}
            <br />
            Id: {selectedTransAction.id}
            <br />
        </div>}
    </>
}
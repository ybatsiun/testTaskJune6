import React from 'react';
import Grid from '@material-ui/core/Grid';
import TransactionsTable from './TransactionsTableContainer'
import Balance from './BalanceContainer';
import TransactionBuilder from './TransactionBuilderContainer'



export default function HomeView() {
    return <Grid container spacing={3}>
        <Grid item xs={12}>
            <TransactionsTable />
        </Grid>
        <Grid item xs={6}>
            <Balance />
        </Grid>
        <Grid item xs={6}>
            <TransactionBuilder />
        </Grid>
    </Grid >


}
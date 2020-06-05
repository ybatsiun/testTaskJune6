import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import MaterialTable from 'material-table';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


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
    },
    card: {
        minWidth: 200,
        minHeight: 200
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

    return <Grid container spacing={1}>
        <Grid item xs={6}>
            <MaterialTable
                onRowClick={onTransactionRowClick}
                className={classes.paper}
                title='Transactions history'
                data={transactionsFromGlobalState.transactions}
                columns={[
                    { title: 'Type', field: 'type' },
                    { title: 'Amount', field: 'amount', type: 'numeric' },
                ]}
                options={{
                    search: false
                }}
            />
        </Grid>
        <Grid item xs={6}>
            {selectedTransAction && <Card >
                <CardContent className={classes.root}>
                    <Typography color="textSecondary" gutterBottom>
                        Amount: {selectedTransAction.amount}
                        <br />
                        Type: {selectedTransAction.type}
                        <br />
                        Date: {selectedTransAction.effectiveDate}
                        <br />
                        Id: {selectedTransAction.id}
                        <br />
                    </Typography>
                </CardContent>
            </Card>
            }
        </Grid>
    </Grid >
}
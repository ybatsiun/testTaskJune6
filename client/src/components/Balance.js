import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },

});

export default function Balance({ fetchBalance, balance, transactions }) {
    const classes = useStyles();

    useEffect(() => {
        const fetch = async () => {
            await fetchBalance();
        };
        fetch();
    }, [transactions]);

    return <Card className={classes.root}>
        <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                Your balance {balance}
            </Typography>

        </CardContent>

    </Card>
}

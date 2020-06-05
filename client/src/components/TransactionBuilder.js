import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export default function TransactionBuilder({ commitTransaction }) {
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState("debit");
    function handleChange(e) {
        setType(e.target.value)
    }
    function handleAmountChange(e) {

        setAmount(Number.parseInt(e.target.value))
    }

    function onSubmit() {
        commitTransaction({ amount, type })
    }


    return (
        <FormControl component="fieldset">
            <TextField id="standard-basic" label="Amount" type="number" onChange={handleAmountChange} />
            <RadioGroup aria-label="gender" name="gender1" value={type} onChange={handleChange}>
                <FormControlLabel value="debit" control={<Radio />} label="Debit" />
                <FormControlLabel value="credit" control={<Radio />} label="Credit" />
            </RadioGroup>
            <Button variant="secondary" onClick={onSubmit}>Add transaction</Button>
        </FormControl>
    )
}
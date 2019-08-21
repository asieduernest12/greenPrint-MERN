import React from 'react';

import Form from 'react-bootstrap/Form';

const Step1 = props => {
    if (props.currentStep !== 1) {
        return null
    }
    return (
        <div>
            <h2> Income</h2>
            
            <label style={{fontSize:'15px'}}> What is your salary/ wages </label><br/>
            <input id="income" name="income" type="text" value={props.income} onChange={props.handleChange}/>
            <br />
            <label style={{fontSize:'15px'}}> Do you have any additional? if so please fill out the amount below </label><br />
            <input id="additionalIncome" name="additionalIncome" type="text" value={props.additionalIncome} onChange={props.handleChange}/>
        </div>
    )
}

export default Step1;
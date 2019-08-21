import React from 'react';

import Form from 'react-bootstrap/Form';

const Step2 = props => {
    if (props.currentStep !== 2) {
        return null
    }
    return (
        <div>
            <h2> Home Expenses</h2>
            <label style={{fontSize:'15px'}}> What is your mortgage/ rent ammount ? </label><br />
            <input id="mortgageRent" name="mortgageRent" type="text" value={props.mortgageRent} onChange={props.handleChange}/>
            <br />
            <label style={{fontSize:'15px'}}> How much do you pay for insurance ? </label><br />
            <input id="homeInsurance" name="homeInsurance" type="text" value={props.homeInsurance} onChange={props.handleChange}/>
            <br />
            <label style={{fontSize:'15px'}}> How much do you pay for home repairs or maintainance</label><br />
            <input id="homeRepairs" name="homeRepairs" type="text" value={props.homeRepairs} onChange={props.handleChange}/>
            <br />
            <label style={{fontSize:'15px'}}> How do you pay for utilities such as gas, water, electiricity, etc. combined ? </label><br />
            <input id="homeUtilities" name="homeUtilities" type="text" value={props.homeUtilities} onChange={props.handleChange}/>
            <br />
            <label style={{fontSize:'15px'}}> How much do you pay for cable, phone and internet in total ? </label><br />
            <input id="phoneInternet" name="phoneInternet" type="text" value={props.phoneInternet} onChange={props.handleChange}/>
            <br />
            <label style={{fontSize:'15px'}}> How much do you pay for home supplies and groceries ? </label><br />
            <input id="groceriesSupplies" name="groceriesSupplies" type="text" value={props.groceriesSupplies} onChange={props.handleChange}/>
        </div>
    )
}

export default Step2;
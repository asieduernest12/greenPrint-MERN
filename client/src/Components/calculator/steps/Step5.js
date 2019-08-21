import React from 'react';

import Button from 'react-bootstrap/Button';

const Step5 = props => {
    if (props.currentStep !== 5) {
        return null
    }
    return (
        <div>
            <h2> Personal Expenses</h2>
            <label style={{fontSize:'15px'}}> How much do you pay for entertainment and leisure ? </label><br />
            <input id="entertainment" name="entertainment" type="text" value={props.entertainment} onChange={props.handleChange}></input>
            <br />
            <label style={{fontSize:'15px'}}> How much do you pay medical expenses ? </label><br />
            <input id="medical" name="medical" type="text" value={props.medical} onChange={props.handleChange}></input>
            <br />
            <label style={{fontSize:'15px'}}> How much do you pay for any other expenses? </label><br />
            <input id="other" name="other" type="text" value={props.other} onChange={props.handleChange}></input>

            <br />
            Click 'calculate to get expense breakdown'<br/><br/>
            <button style={{backgroundColor:'#a366ff', border:'none', color:'white', borderRadius:'5px'}}>Calculate</button>
            <br/>
            For a more personalized experience click 'next' to provide contact information and a trained financial advisor will contact you soon.
            <br />
            <br/>
        </div>
    )
}

export default Step5;
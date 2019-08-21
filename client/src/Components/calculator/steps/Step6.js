import React from 'react';

import Button from 'react-bootstrap/Button';

const Step6 = props => {
    if (props.currentStep !== 6) {
        return null
    }
    return (
        <div>
            <h2>Connect</h2>
            <label style={{fontSize:'15px'}}> Your first name</label><br/>
            <input id="firstName" name="firstName" type="text" value={props.firstName} onChange={props.handleChange}></input>
            <br/>
            <label style={{fontSize:'15px'}}> Your last name</label><br/>
            <input id="lastName" name="lastName" type="text" value={props.lastName} onChange={props.handleChange}></input>
            <br/>
            <label style={{fontSize:'15px'}}> Your phone number</label><br/>
            <input id="phoneNumber" name="phoneNumber" type="text" value={props.phoneNumber} onChange={props.handleChange}></input>
            <br/>
            <label style={{fontSize:'15px'}}> Your email</label><br/>
            <input id="email" name="email" type="text" value={props.email} onChange={props.handleChange}></input>
            <br/>
            <br/>
            <button style={{backgroundColor:'#a366ff', border:'none', color:'white', borderRadius:'5px'}}>submit</button>
        </div>
    )
}

export default Step6;
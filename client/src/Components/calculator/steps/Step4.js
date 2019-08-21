import React from 'react';

const Step4 = props => {
    if (props.currentStep !== 4) {
        return null
    }
    return (
        <div>
            <h2> Education Expenses</h2>
            <label style={{fontSize:'15px'}}> How much do in tuition for school ? </label><br />
            <input id="eduTution" name="eduTuition" type="text" value={props.eduTution} onChange={props.handleChange}></input>
            <br />
            <label style={{fontSize:'15px'}}> How much do in student loans ? </label><br />
            <input id="eduLoans" name="eudLoans" type="text" value={props.eduLoans} onChange={props.handleChange}></input>

        </div>
    )
}

export default Step4;
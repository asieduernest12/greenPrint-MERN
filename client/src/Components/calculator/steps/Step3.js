import React from 'react';

const Step3 = props => {
    if (props.currentStep !== 3) {
        return null
    }
    return (
        <div>
            <h2> Auto Expenses</h2>
            <label style={{fontSize:'15px'}}> How much do you pay for your vehicle ? </label><br />
            <input id="carBill" name="carBill" type="text" value={props.carBill} onChange={props.handleChange}></input>
            <br />
            <label style={{fontSize:'15px'}}> How much do you pay for Public transportation ? </label><br />
            <input id="pubTrans" name="pubTrans" type="text" value={props.pubTrans} onChange={props.handleChange}></input>
            <br />
            <label style={{fontSize:'15px'}}> How much do you pay for vehicle repairs and or maintainance ? </label><br />
            <input id="carRepairs" name="carRepairs" type="text" value={props.carRepairs} onChange={props.handleChange}></input>
            <br />
            <label style={{fontSize:'15px'}}> How much do you pay for vehicle insurance ? </label><br />
            <input id="carInsurance" name="carInsurance" type="text" value={props.Insurance} onChange={props.handleChange}></input>

        </div>
    )
}

export default Step3;
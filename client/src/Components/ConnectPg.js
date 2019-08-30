import React, { Component } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './mainStyle/connectStyle.css';
import mainhero from './mainStyle/homeImages/greenprintLogo1.png';

export default class ConnectPg extends Component {

    constructor(props) {
        super(props)

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmailAddress = this.onChangeEmailAddress.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeGrossIncome = this.onChangeGrossIncome.bind(this);
        this.onChangeGoal = this.onChangeGoal.bind(this)

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            emailAddress: '',
            phoneNumber: '',
            grossIncome: '',
            goal: '',

            displayHero: true,
            displayConfirm: false
        }

    }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }

    onChangeEmailAddress(e) {
        this.setState({
            emailAddress: e.target.value
        });
    }

    onChangePhoneNumber(e) {
        this.setState({
            phoneNumber: e.target.value
        });
    }

    onChangeGrossIncome(e) {
        this.setState({
            grossIncome: e.target.value
        });
    }

    onChangeGoal(e) {
        this.setState({
            goal: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log('form submitted.');
        console.log(`first name: ${this.state.firstName}`);
        console.log(`last name: ${this.state.lastName}`);
        console.log(`email address: ${this.state.emailAddress}`);
        console.log(`phone number: ${this.state.phoneNumber}`);
        console.log(`gross income: ${this.state.grossIncome}`);
        console.log(`goals: ${this.state.goal}`);


        const newContact = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            emailAddress : this.state.emailAddress,
            phoneNumber : this.state.phoneNumber,
            grossIncome : this.state.grossIncome,
            goal : this.state.goal
        }

        axios.post('/data/addGeneralData',newContact)
        .then(res => console.log(res.data))
        
        this.setState({
            firstName: '',
            lastName: '',
            emailAddress: '',
            phoneNumber: '',
            grossIncome: '',
            goal: '',
            displayHero: false,
            displayConfirm: true,
        });

    }

    render() {

        return (
            <Container style= {{textAlign:'center'}} className='form-main'>
            <div id="">
                <Row>

                <div className="" style = {{}}>
                    
                    {this.state.displayHero ?

                        <div>
                            <Image src ={mainhero} fluid className="imageHero"/>
                        </div>
                        : null}
                    
                        {this.state.displayConfirm ?
                        <div>
                            <h2>Confirmation</h2>
                        </div>
                        :null }
                </div>

                    <Col>
                <div id="">
                    <h2>Let's Connect</h2>
                    Fill out the form below and on of our Financial advisors will reach out to you and help you reach
                    your financial goals.
                    <br/>
                    <br />
                    <Form onSubmit={this.onSubmit} className="form-style">
                        <Form.Row>
                        <Col>
                        <Form.Control size= 'sm' type='text' placeholder='First Name' value={this.state.firstName} onChange={this.onChangeFirstName} style={{}}/>
                        <br />
                        </Col>
                        
                        <Col>
                        <Form.Control size= 'sm' type='text'placeholder='Last Name' value={this.state.lastName} onChange={this.onChangeLastName} />
                        <br />
                        </Col>
                        </Form.Row>
                        
                        <Form.Row>
                        <Col>
                        <Form.Control size='sm' type='text' placeholder='E-mail Address' value={this.state.emailAddress} onChange={this.onChangeEmailAddress} />
                        <br />
                        </Col>
                        <Col>
                        <Form.Control size= 'sm' type='text' placeholder='Phone Number' value={this.state.phoneNumber} onChange={this.onChangePhoneNumber} />
                        <br />
                        </Col>
                        </Form.Row>
                        <Form.Row>
                        <br />
                        <Form.Control size='sm' placeholder='What is your total monthly income ?' type='text' value={this.state.grossIncome} onChange={this.onChangeGrossIncome} />
                        <br />
                        </Form.Row>
                        <br/>
                        <Form.Row>
                        <Form.Control as= 'textarea' placeholder='Tell us about your financial goals... ' type='text' value={this.state.goal} onChange={this.onChangeGoal} />
                        <br/>
                        </Form.Row>
                        <br/>

                        <Button varient='primary' type='submit' value='Connect' className='connect-submit'>Connect</Button>

                    </Form>

                </div>

                    </Col>

                </Row>

            </div >
            </Container>

        )
    }
}

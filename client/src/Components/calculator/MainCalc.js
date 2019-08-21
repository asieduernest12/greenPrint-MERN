import React, { Component } from 'react';
import { ifStatement } from '@babel/types';

import axios from 'axios';

import Chart from 'react-google-charts';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

import './calcStyle/calcStyle.css';
import heroImg from './calcStyle/calcImages/budget.png';
import confirm from './calcStyle/calcImages/confirmation.png';

import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5';

import Step6 from './steps/Step6'

export default class MainCalc extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentStep: 1,
            income: 0,
            additionalIncome: 0,

            mortgageRent: 0,
            homeInsurance: 0,
            homeRepairs: 0,
            homeUtilities: 0,
            phoneInternet: 0,
            groceriesSupplies: 0,

            carBill: 0,
            pubTrans: 0,
            carRepairs: 0,
            carInsurance: 0,

            eduTuition: 0,
            eduLoans: 0,

            entertainment: 0,
            medical: 0,
            other: 0,

            grossIncome: 0,
            homeExpenseTotal: 0,
            autoExpenseTotal: 0,
            transportExpenseTotal: 0,
            educationExpenseTotal: 0,
            personalExpenseTotal: 0,

            diff: 0,
            ExTot: 0,

            genSavings: 0,
            emergencySavings: 0,
            retirementSavings: 0,

            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',

            dataPie: '',

            displayHero: true,
            displayGraph: false,
            displayRes: false,
            displayConfirm: false
        }
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value

        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { income, additionalIncome, mortgageRent, homeInsurance, homeRepairs, homeUtilities, phoneInternet,
            groceriesSupplies, carBill, pubTrans, carRepairs, carInsurance, eduTuition, eduLoans, entertainment,
            medical, other, grossIncome, homeExpenseTotal, autoExpenseTotal, transportExpenseTotal, educationExpenseTotal,
            personalExpenseTotal } = this.state

        if(this.state.currentStep == 5){
        this.calculateExpense()
        }
        if(this.state.currentStep == 6){
            this.sendData()
        }
    }

    _nextStep = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 6 ? 1 : currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }

    _prevStep = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }

    previousButton() {
        let currentStep = this.state.currentStep;
        if (currentStep !== 1) {
            return (
                <Button size='sm' style={{margin:'5px'}} className= "slide-buttons"
                    type="button" onClick={this._prevStep}>
                    Previous
            </Button>
            )
        }
        return null;
    }

    nextButton() {
        let currentStep = this.state.currentStep;
        if (currentStep < 6) {
            return (
                <Button size='sm' style={{margin:'5px'}} className= "slide-buttons"
                    type="button" onClick={this._nextStep}>
                    Next
            </Button>
            )
        }
        return null;
    }

    calculateExpense() {
        let incomeNum = +this.state.income
        let additionalNum = +this.state.additionalIncome

        let incomeTot = incomeNum + additionalNum
        console.log(incomeTot);

        let homeMort = +this.state.mortgageRent
        let homeUtil = +this.state.homeUtilities
        let homeInsure = +this.state.homeInsurance
        let homeRepair = +this.state.homeRepairs
        let web = +this.state.phoneInternet
        let homeShop = +this.state.groceriesSupplies

        let homeTot = homeMort + homeUtil + homeInsure + homeRepair + web + homeShop
        console.log(homeTot)

        let carPay = +this.state.carBill
        let carInsure = +this.state.carInsurance
        let carRepair = +this.state.carRepairs
        let pub = +this.state.pubTrans

        let carTot = carPay + carInsure + carRepair + pub
        console.log(carTot)

        let edBill = +this.state.eduLoans
        let edTu = +this.state.eduTuition

        let eduTot = edBill + edTu
        console.log(eduTot)

        let entertain = +this.state.entertainment
        let medExp = +this.state.medical
        let otherExp = +this.state.other

        let personalTot = entertain + medExp + otherExp
        console.log(personalTot)

        let totalExpense = homeTot + carTot + eduTot + personalTot
        let difference = incomeTot - totalExpense
        console.log("total expense: " + totalExpense)
        console.log("left over " + difference)

        this.setState({
            displayHero: false,
            displayGraph: true,
            displayRes: true,
            grossIncome: incomeTot,
            homeExpenseTotal: homeTot,
            autoExpenseTotal: carTot,
            educationExpenseTotal: eduTot,
            personalExpenseTotal: personalTot,
            diff: difference,
            ExTot: totalExpense,
        })

    }

    sendData(){
        console.log("sending data...")
        console.log('this is where our api post will go to back end')

        const newBudget = {
            grossIncome: this.state.grossIncome,
        
            homeExpenseTotal: this.state.homeExpenseTotal, 
        
            autoExpenseTotal: this.state.autoExpenseTotal,
        
            transportExpenseTotal:this.state.transportExpenseTotal, 
        
            educationExpenseTotal: this.state.educationExpenseTotal,
        
            personalExpenseTotal: this.state.personalExpenseTotal,
        
            firstName: this.state.firstName,
        
            lastName: this.state.lastName,
        
            phoneNumber:this.state.phoneNumber, 
        
            email: this.state.email
        }

        axios.post('http://localhost:4001/data/addBudgetData', newBudget). 
        then(res =>console.log(res.data));

        
        this.setState({
            displayGraph:false,
            displayRes:false,
            displayConfirm:true
        })
        
    }

    render() {

        let yourIncome = this.state.grossIncome
        let yourExpenses = this.state.ExTot

        let yourLeftOver = this.state.diff
        let yourgeneralSaves = +this.state.diff * .5
        let yourEmergencySave = +this.state.diff * .3
        let yourRetirementSaves = +this.state.diff * .2

        console.log('your total income: ' + yourIncome)
        console.log('your Expenses: ' + yourExpenses)
        console.log('your left over: ' + yourLeftOver)

        let fifty = yourgeneralSaves.toFixed(2);
        let thirty = yourEmergencySave.toFixed(2);
        let twenty = yourRetirementSaves.toFixed(2);

        const dataGraph = [
            ['Income', 'Expense'],
            ['home', this.state.homeExpenseTotal],
            ['auto', this.state.autoExpenseTotal],
            ['education', this.state.educationExpenseTotal],
            ['personal', this.state.personalExpenseTotal],
            ['left Over', this.state.diff]
        ]

        const pieOptions = {
            title: "Your expense breakdown",
            pieHole: 0.6,
            slices: [
                {
                    color: "#2BB673"
                },
                {
                    color: "#d91e48"
                },
                {
                    color: "#007fad"
                },
                {
                    color: "#e9a227"
                }
            ],
            legend: {
                position: "bottom",
                alignment: "center",
                textStyle: {
                    color: "233238",
                    fontSize: 14
                }
            },
            tooltip: {
                showColorCode: true
            },
            chartArea: {
                left: 0,
                top: 0,
                width: "100%",
                height: "80%"
            },
            fontName: "Roboto"
        };


        return (

            <Container style={{textAlign:'center'}} >

                <Row style= {{}}>


            <Col style={{height:''}} m={6} lg={6} xs={12}>
                <div style={{}}>
                    {this.state.displayHero ?
                    <div style={{}}> 
                    <Image src = {heroImg} alt={'logo'} className='heroImgCalc' fluid/>
                    </div>
                    : null}

                    {this.state.displayGraph ?
                    <Chart
                        chartType="PieChart"
                        data={dataGraph}
                        options={pieOptions}
                        width={"100%"}
                        height={"400px"}
                    />
                    : null}

                    {this.state.displayRes ?
                    <div> Your total income: {yourIncome}, your total expenses: {yourExpenses}<br />
                            budget breakdown based on your left over income:
                    <br />
                            General Savings 50% : {fifty}<br />
                            Emergency Savings 30% : {thirty}<br />
                            Retirement Savings 20%: {twenty}<br />
                    </div>
                    : null}

                    {this.state.displayConfirm ?
                        <div style={{}}>
                            <Image src = {confirm} alt={'confirmed'} className='heroImgCalc' fluid/><br/>
                        Thanks! We'll talk to you soon</div>
                    : null}
                </div>
                </Col>

                    <Col style={{}}>
                    <Form onSubmit={this.handleSubmit} style={{height:'', postion:'fixed'}} m={6} lg={6} xs={12} className = "calc-form-style">
                    {/*render form step components*/}
                    
                    <Step1
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}

                        income={this.state.income}
                        additionalIncome={this.state.additionalIncome}
                    />

                    <Step2
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}

                        mortgageRent={this.mortgageRent}
                        homeInsurance={this.homeInsurance}
                        homeRepairs={this.homeRepairs}
                        homeUtilities={this.homeUtilities}
                        phoneInternet={this.phoneInternet}
                        groceriesSupplies={this.groceriesSupplies}

                    />

                    <Step3
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}

                        carBill={this.carBill}
                        pubTrans={this.pubTrans}
                        carRepairs={this.carRepairs}
                        carInsurance={this.carInsurance}
                    />

                    <Step4
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}

                        eduTuition={this.eduTuition}
                        eduLoans={this.eduLoans}

                    />

                    <Step5
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}

                        entertainment={this.entertainment}
                        medical={this.medical}
                        other={this.other}
                    />

                    <Step6
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}

                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        phoneNumber={this.state.phoneNumber}
                        email={this.state.email}
                    />

                    
                </Form>

                    <Row style={{textAlign:'center', marginTop:''}}>
                    <Col style={{alignContent:'center'}}>

                    
                    <div className ='buttonContain'>
                        {this.previousButton()}
                        {this.nextButton()}
                    </div>

                    
                    </Col>
                    </Row>
                </Col>




        </Row>

            </Container>
        )
    }

}
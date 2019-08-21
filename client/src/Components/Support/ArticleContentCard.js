import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import ButtonGroup from 'react-bootstrap/ButtonGroup';

import articleImg from './supportStyle/articleImg.css';

export default class ArticleContentCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pages: props.loadPage,
            index: 0,
        }
    }



    render() {
        console.log(this.state.index)
        const assetPath = require.context('./contentImg')

        console.log(this.state.pages[this.state.index])

        
        const nextPage = (e) => {
            e.preventDefault()
            console.log(this.state.pages[this.state.index++])

            let increase = this.state.index++; 
            if(increase===4){
                increase=3
            }

            this.setState({
                index: increase
            })

        }

        const prevPage = (e) => {
            e.preventDefault()
            console.log(this.state.pages[this.state.index--])

            let decrease = this.state.index--;
            if(decrease=== -1){
                decrease=0
            }

            this.setState({
                index: decrease
            })

        }


        return (

            <div className="">

                <Card style={{textAlign:'center'}}>
                <Card.Header style={{}}>
                <div className="" >
                    Page: {this.state.pages[this.state.index].page} <span />
                    <b>{this.state.pages[this.state.index].header}</b>
                </div>
                </Card.Header>
                <Card.Body>
                <div className = "articleImage">
                    <Card.Img  varient="top" style = {{ }}
                    src = {require('./contentImg' + this.state.pages[this.state.index].image)} 
                    alt = 'slide'
                    
                    />
                </div>

                <Card.Text>
                <div className="" style = {{}}>
                <p>{this.state.pages[this.state.index].writeUp}</p>
                </div>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <div className = "d-flex flex-column">
                <ButtonGroup style={{alignContent:'center', margin:'5px'}}>
                    <Button varient ='primary' size='lg' onClick={prevPage} className='buttons'>Previous</Button>
                    <Button varient ='primary' size='lg' onClick={nextPage} className='buttons'>Next</Button>
                </ButtonGroup>
                </div>
                </Card.Footer>
                </Card>

            </div>
        
        )
    }
}
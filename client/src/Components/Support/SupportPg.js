import React, { Component } from 'react';
import Article from "./ArticleData";
import ArticleContent from './ArticleContentCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './supportStyle/support.css';


export default class SupportPg extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: Article,
            pages: []
        }
    }

    render() {

        return (
            <Container style={{}}>
            <div>

                <h2 className='supportHeader'>Resource Library</h2>


                <div className="">

                    {this.state.data.map((d) =>
            
                        <div className="contentHead">
                            <div key={d.id} className="">
                               <b>{d.articleTitle}</b> <span/><span/>
                                <i>{d.articleDescription}</i>
                            </div>
                        
                            < ArticleContent 
                                loadPage={d.articleContent}
                            />
                        </div>)}
            
                    </div>
                
                <div></div>

            </div>
            </Container>
        )
    }
}


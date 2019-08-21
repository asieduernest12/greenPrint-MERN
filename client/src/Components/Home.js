import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from  'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';

/*import HeroImg from './heroImages/landingHeroImage.png';*/
import mainhero from './mainStyle/homeImages/greenprintLogo1.png';
import newBg from './mainStyle/homeImages/Money-Pattern-l.jpg';


import './mainStyle/homeStyle.css';

const Home = () => (
    
    <div>

    <Jumbotron fluid style= {{backgroundImage:`url(${newBg})`}} className='jumbotron jumbotron-cover-image'>
    <Container className='homeContain'>
       
       <div style={{backgroundColor:'', marginTop:'0px'}}>

        <h1>Welcome to Green Print</h1>
        <Image src ={mainhero} className='landing'/>
            <p>
                Financial literacy and budget calculator resource
            </p>
            </div>
            </Container>
    </Jumbotron>
          
    </div>


)

export default Home;
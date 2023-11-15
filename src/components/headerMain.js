import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import "../components style/headerMain.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import HeroImg from "../images/hero-img.png";
import ClientImg1 from "../images/client-1.png";
import ClientImg2 from "../images/client-2.png";
import ClientImg3 from "../images/client-3.png";
import ClientImg4 from "../images/client-4.png";
import ClientImg5 from "../images/client-5.png";
import ClientImg6 from "../images/client-6.png";

library.add(faPhoneFlip);

function HeaderMain() {
  return (
    <>
        <section id='Home' className='Header-Main-Section'>
            <Container>
                <Row>
                    <Col className='column-one-main m-auto' xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                        <h2>Your new digital experience with Mini Digi!</h2>
                        <p>Efficiently Integrated Business Solutions: Mini Digi - Your All-in-One Answer.</p>
                        <Nav.Link eventKey="5" href="#Contact"><span>Contact <FontAwesomeIcon icon={faPhoneFlip} /></span></Nav.Link>
                    </Col>
                    <Col className='column-two-main m-auto' xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                        <img src={HeroImg}/>
                    </Col>
                </Row>
        </Container>
        </section>

        <section className='Header-Client-Section'>
           <div className='client-img'>
             <img src={ClientImg1}/>
             <img src={ClientImg2}/>
             <img src={ClientImg3}/>
             <img src={ClientImg4}/>
             <img src={ClientImg5}/>
             <img src={ClientImg6}/>
           </div>
        </section>
    </>
  )
}

export default HeaderMain;

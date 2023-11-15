import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../components style/aboutUs.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

library.add(faUserTie,faUsers);

function AboutUs() {
  return (
   <section id='AboutUs' className='About-Us-Section'>
        <Container>
            <Row className='about-us-row'>
                <Col className='about-us-img' xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>

                </Col>
                <Col className='about-us-content' xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <h2>Digital Excellence Redefined</h2>
                    <p>At Mini Digi, we specialize in web development and digital marketing, weaving a digital tapestry that propels businesses to new heights. Our dynamic websites are not just aesthetically pleasing but also functionally robust, while our digital marketing strategies are tailored to amplify your online reach. With a focus on innovation and client satisfaction, we are your partners in navigating the ever-evolving digital landscape. Trust us to elevate your brand and make a lasting impact in the digital realm. Welcome to a world where your online success is our priority.</p>
                   
                    <Row className='about-us-specialized'>

                        <Col className='about-us-spec-inside'>
                        <FontAwesomeIcon icon="fa-solid fa-user-tie" />
                          <strong>10+ Year's of Expertise</strong>
                        </Col>

                        <Col className='about-us-spec-inside'>
                        <FontAwesomeIcon icon="fa-solid fa-users" />
                          <strong>40+ Happy Client's</strong>
                        </Col>

                    </Row>
                </Col>
            </Row>
        </Container>
   </section>
  )
}

export default AboutUs;

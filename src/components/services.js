import React from 'react'
import "../components style/services.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faUsersViewfinder } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';

library.add(faCode,faUsersViewfinder,faCartShopping,faNewspaper,faLink,faChartPie);

function Services() {
  return (
    <section id='Services' className='Services-Section'>
        <div className='Services-top-content'>
            <h2>Services</h2>
            <p>At Mini Digi, we offer a spectrum of services tailored to transform your digital footprint. From sleek web development and strategic digital marketing to user-friendly e-commerce solutions, we enhance your online presence. Our content creation services weave engaging narratives with captivating visuals. SEO optimization ensures your business rises in search engine ranks, attracting organic traffic. Elevate your brand with our comprehensive and impactful digital solutions.</p>
        </div>
        
        <Container>
            <Row>
                <Col className='Service-Box' xs={12} sm={12} md={6} lg={6} xl={4} xxl={4}>
                   <FontAwesomeIcon icon="fa-solid fa-code" />
                   <h3>Web Development</h3>
                </Col>

                <Col className='Service-Box' xs={12} sm={12} md={6} lg={6} xl={4} xxl={4}>
                   <FontAwesomeIcon icon="fa-solid fa-users-viewfinder" />
                   <h3>Digital Marketing</h3>
                </Col>

                <Col className='Service-Box' xs={12} sm={12} md={6} lg={6} xl={4} xxl={4}>
                   <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                   <h3>E-Commerce Solution</h3>
                </Col>

                <Col className='Service-Box' xs={12} sm={12} md={6} lg={6} xl={4} xxl={4}>
                   <FontAwesomeIcon icon="fa-solid fa-newspaper" /> 
                   <h3>Content Creation</h3>
                </Col>

                <Col className='Service-Box' xs={12} sm={12} md={6} lg={6} xl={4} xxl={4}>
                   <FontAwesomeIcon icon="fa-solid fa-link" />
                   <h3>Link Building</h3>
                </Col>

                <Col className='Service-Box' xs={12} sm={12} md={6} lg={6} xl={4} xxl={4}>
                   <FontAwesomeIcon icon="fa-solid fa-chart-pie" />
                   <h3>Analytics and Reporting</h3>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Services;

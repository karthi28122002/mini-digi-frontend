import React from 'react'
import "../components style/blog.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BlogImg1 from "../images/blog-img-1.png";
import BlogImg2 from "../images/blog-img-2.png";
import BlogImg3 from "../images/blog-img-3.jpg";

function Blog() {
  return (
    <section id='Blog' className='Blog-Section'>
        <h2>Blog</h2>
        
        <Container>
            <Row>
                <Col className='Blog-Box' xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={BlogImg1} />
                        <Card.Body>
                            <Card.Title>Leveraging User Data: How to Improve UX with Google Analytics</Card.Title>
                            <Card.Text>
                               15 NOV 2023
                            </Card.Text>
                            <Button variant="warning">Read more</Button>
                        </Card.Body>
                        </Card>
                </Col>

                <Col className='Blog-Box' xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                        <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={BlogImg2} />
                                <Card.Body>
                                    <Card.Title>Exploring the Best Umbraco Hosting Providers for Your Website</Card.Title>
                                    <Card.Text>
                                       30 OCT 2023
                                    </Card.Text>
                                    <Button variant="warning">Read more</Button>
                                </Card.Body>
                        </Card>
                </Col>

                <Col className='Blog-Box' xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                        <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={BlogImg3} />
                                <Card.Body>
                                    <Card.Title>How to Build a Custom Web App for Your Website</Card.Title>
                                    <Card.Text>
                                       28 OCT 2023
                                    </Card.Text>
                                    <Button variant="warning">Read more</Button>
                                </Card.Body>
                            </Card>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Blog;

import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container bg="light">
            <Row>
                <Col lg={4} xs={12}>
                    <h3 className='fw-bold'>Working Time</h3>
                    <br />
                    <ul>
                        <li>Monday 11:30 am - 10:00 pm </li>
                        <li>Tuesday 11:30 am - 10:00 pm</li>
                        <li>Wednesday 11:30 am - 10:00 pm</li>
                        <li>Thursday 11:30 am - 10:00 pm</li>
                        <li>Friday 11:30 am - 10:00 pm</li>
                        <li>Saturday 11:30 am - 09:00 pm</li>
                        <li>Sunday 11:30 am - 09:00 pm</li>
                    </ul>
                </Col>
                <Col lg={4} xs={12}>
                <h3 className='fw-bold'>About us</h3>
                    <ul>
                        <li>Our story</li>
                        <li>Blog</li>
                        <li>Offers</li>
                        <li>Weddings</li>
                        <li>Gift Vouchers</li>
                    </ul>
                </Col>
                <Col lg={4} xs={12}>
                    <h3 className='fw-bold'>Reservations</h3>
                    <p>Our support available to help you 24 hours a day, seven days a week.</p>
                    <p>Please call: +880 1636 999 666</p>
                    <p>For more information koreancookeries@gmail.com</p>
                    <br />
                    <Button variant="outline-secondary">Book a table</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
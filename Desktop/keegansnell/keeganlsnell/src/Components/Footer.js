import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col><a href='mailto:KLSnell0351@gmail.com'><button className='footerbtn'>KLSnell0351@gmail.com</button></a></Col>
                    <Col><a href='tel:520-456-6024'><button className='footerbtn'>520-456-6024</button></a></Col>
                    <Col><p> &copy;Keegan L Snell 2021 </p></Col>
                </Row>
            </Container>
            
        </div>
        
    )
}
export default Footer;
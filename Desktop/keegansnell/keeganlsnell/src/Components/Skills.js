import React from 'react';
import { Card } from 'reactstrap';
import { Container, Row, Col } from 'react-grid-system';
import {FaCss3, FaHtml5, FaJs, FaReact, FaFire, FaTenge, FaHeading } from 'react-icons/fa'


const Skills = () => {
    return (
        <div className='skills'>
            <div>
                <h1 className='h1titles'>-Skills-</h1>
                <Container>
                    <Row>
                        
                        <Col>
                            <Card className='skillcard' style={{ backgroundColor: '#ebebe17e' }}><a href='https://www.hackreactor.com/blog/what-is-javascript-used-for' target='blank'><FaJs className='jslogo'/></a> JavaScript</Card>
                        </Col>
                        <Col>
                            <Card className='skillcard' style={{ backgroundColor: '#ebebe17e' }}><a href='https://blog.devmountain.com/what-is-css-and-why-use-it/' target='blank'><FaCss3 className='csslogo'/></a>CSS3</Card>
                        </Col>
                        <Col>
                            <Card className='skillcard' style={{ backgroundColor: '#ebebe17e' }}><a href='https://www.techradar.com/news/internet/web/html5-what-is-it-1047393' target='blank'><FaHtml5 className='htmllogo'/></a> HTML5</Card>
                        </Col>
                        <Col>
                            <Card className='skillcard' style={{ backgroundColor: '#ebebe17e' }}><a href='https://reactjs.org/' target='blank'><FaReact className='reactlogo'/></a>React</Card>
                        </Col>
                        <Col>
                            <Card className='skillcard' style={{ backgroundColor: '#ebebe17e' }}><a href='https://www.tutorialspoint.com/typescript/typescript_overview.htm' target='blank'><FaTenge className='typelogo'/></a>TypeScript</Card>
                        </Col>
                        
                        <Col>
                            <Card className='skillcard' style={{ backgroundColor: '#ebebe17e' }}><a href='https://www.heroku.com/about' target='blank'><FaHeading className='hlogo'/></a>Heroku</Card>
                        </Col>
                        <Col>
                            <Card className='skillcard' style={{ backgroundColor: '#ebebe17e' }}><a href='https://firebase.google.com/' target='blank'><FaFire className='firelogo'/></a>FireBase</Card>
                        </Col>
                        
                    </Row>
                </Container>
                
            </div>
        </div>

    )
}
export default Skills;
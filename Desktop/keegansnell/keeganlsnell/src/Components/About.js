import React from 'react';
import { Card } from 'reactstrap';
import { Container, Row, Col } from 'react-grid-system';


const About = () => {
    return (
        <div className='aboutdiv'>
            <h1 className='welcome'>-About Me-</h1>
            <br />
            <Card className='bigbox'>
            <Container>
                <Row>
                    <Col className='about'>
                                <p>I am a full stack web developer, who recently graduated from Eleven Fifty Academy's Web Developer program in December of 2021.</p>
                                <br />
                                <p>I decided to start my coding career after I got out of the United States Marine Corps (2009-2021). There I served as an Infantry Assaultman, and Platoon Sergeant, rose to the rank of Staff Sergeant, and completed six deployments overseas. It was in the Marines that I learned many of the values I still hold true to today such as integrity, discipline, cooperation, commitment, and loyalty.</p>
                                <br />
                                <p>I currently live in Indianapolis with my wife, and two dogs (both unique mutts with big personalities).</p>
                    </Col>
 
                    <Col className='picture'>
                        <Card >
                            <div></div>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </Card>
           
        </div>

    )
}

export default About;
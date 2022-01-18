import React from 'react';
import { Card } from 'reactstrap';
import { Container, Row, Col } from 'react-grid-system';/*npm install react-grid-system*/
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'; /*npm i pure-react-carousel*/
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const Projects = () => {
    return (
        <div className='project'>
            <div >
                <h1 className='h1titles'>-Projects-</h1>
                <p>Some of the projects I have completed, or are still working on developing.</p>
            </div>
            <div className='cards'>
                <CarouselProvider
                    className='carousel'
                    naturalSlideWidth={50}
                    naturalSlideHeight={75}
                    interval={5000}
                    step={1}
                    visibleSlides={1}
                    totalSlides={6}>

                    <Container className='container'>

                        <br />
                        <ButtonBack className='backbutton'><FaAngleLeft className='backarrow' /></ButtonBack>
                        <br />
                        <ButtonNext className='nextbutton'><FaAngleRight className='frontarrow' /></ButtonNext>
                        <br />
                        <Slider>
                            <Row>

                                <Slide index={0}>
                                    <Col md={50}>
                                        <a href='https://klsnell.github.io/static-layout-starwars-wd104/' target='blank'><Card className='projectCard1' style={{ border: '2px solid #ca7300' }, { backgroundColor: '#D8B199' }}  >


                                            <p className='cardtext'>My first project was to re-create a static Star Wars website using only HTML and CSS with no functionality. Deployed via Git Hub.</p>


                                        </Card></a>
                                    </Col>
                                </Slide>

                                <Slide index={1}>
                                    <Col md={40}>
                                        <a href='https://codepen.io/klsnell0351/pen/YzQMPvw' target='blank'>
                                            <Card className='projectCard2' style={{ backgroundColor: '#D8B199' }}>

                                                <p className='cardtextcss'>This CSS file was created for me to expirement with different CSS animations.</p>

                                            </Card>
                                        </a>
                                    </Col>
                                </Slide>

                                <Slide index={2}>
                                    <Col md={40}>
                                        <a href='https://klsnell.github.io/Pokemon-arena/' target='blank'>
                                            <Card className='projectCard3' style={{ backgroundColor: '#D8B199' }}>

                                                <p className='cardtext'>This project was my first API fetching project. Deployed via Git Hub.</p>
                                            </Card></a>
                                    </Col>
                                </Slide>
                                
                                <Slide index={3}>
                                    <Col md={40}>
                                        <a href='https://klsnell.github.io/NYT-API/' target='blank'>
                                            <Card className='projectCard6' style={{ backgroundColor: '#D8B199' }}>

                                                <p className='cardtext'>A simple API from the New York Times that allows the user to search a topic, and set the dates for the search</p>
                                            </Card></a>
                                    </Col>
                                </Slide>
{/* 
                                <Slide index={4}>
                                    <Col md={40}>
                                        <a href='https://klsnell.github.io/lifeCycleComponents/' target='blank'>
                                            <Card className='projectCard3' style={{ backgroundColor: '#D8B199' }}>

                                                <p className='cardtext'>A TypeScript app demonstrating lifecycle methods that display a clock with the local time of the user.</p>
                                            </Card></a>
                                    </Col>
                                </Slide> */}

                                <Slide index={4}>
                                    <Col md={40}>
                                        <a href='https://kls-api2.firebaseapp.com/' target='blank'>
                                            <Card className='projectCard4' style={{ backgroundColor: '#D8B199' }}>

                                                <p className='cardtext'>This was done shortly after creating my Pokemon API fetch project, and is designed to generate a random Gif. Deployed via Fire Base.</p>
                                            </Card></a>
                                    </Col>
                                </Slide>

                                <Slide index={5}>
                                    <Col md={40}>
                                        <a href='https://homeownerhelpclient.herokuapp.com/' target='blank'>
                                            <Card className='projectCard5' style={{ backgroundColor: '#D8B199' }}>

                                                <p className='cardtexthoh'>This was my final project at Eleven Fifty Academy. An app designed to aid home owners with finding contractors to repair defeciencies with their home. I developed the front and back end. Front-end was developed using React and TypeScript with Class Components. The back-end contains three associated data tables. This is a V1 product and is still in refinement. Deployed via Heroku.</p>
                                            </Card></a>
                                    </Col>
                                </Slide>



                            </Row>
                        </Slider>


                    </Container>

                </CarouselProvider>

            </div>

        </div>
    )
};
export default Projects;
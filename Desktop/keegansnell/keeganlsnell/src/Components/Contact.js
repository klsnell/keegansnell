import React from 'react';
import { Input, Card, Row, Col, Container } from 'reactstrap';
import { FaLinkedin, FaPaperclip, FaGithubSquare } from 'react-icons/fa'




const DownloadButton = (props) => {
    const downloadFile = () => {
        window.location.href = "./src/assets/Resume.pdf"
    }
    return(
        <button onClick={downloadFile}/>
    )
}

const ContactMe = () => {
    return (
        <div className='contact'>
            <h1 className='h1titles'>-Contact me-</h1>
            <Card className='contactcard'>
                <form action='mailto:klsnell0351@gmail.com' method='post' enctype='text/plain'>

                <h2>Let me know what you think. . .</h2>
                
                <a href='mailto:klsnell0351@gmail.com'><button type='submit' value='submit' className='contactbtn'>Send Me a Message!</button></a>
                </form>
                <Container>
                <Card className='socialmedia'>
                    <Row>
                        <Col>
                            <Card className='contactlogocard1'><a href='/src/assets/Resume.pdf' download ><FaPaperclip className='contactlogo' /></a><p>Resume{DownloadButton}</p></Card>
                            
                        </Col>
                        <Col>
                            <Card className='contactlogocard2'><a href='https://www.linkedin.com/in/keegan-snell-675015219/' target='blank'><FaLinkedin className='contactlogo' /></a><p>Linked In</p></Card>
                        </Col>
                        <Col>
                            <Card className='contactlogocard3'><a href='https://github.com/klsnell' target='blank'><FaGithubSquare className='contactlogo' /></a><p>GitHub</p></Card>
                        </Col>
                    </Row>
                </Card>
                </Container>
            </Card>
            

        </div>
    )
};

export default ContactMe


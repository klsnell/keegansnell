import React from 'react';
import './App.css';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import About from './Components/About';
import ContactMe from './Components/Contact';
import Home from './Components/Home';
// import {FaCog } from 'react-icons/fa';
import Particles from 'react-tsparticles';
import Header from './Components/Header';
import { Col, Row, Container } from 'reactstrap';


function App() {
  return (
    <div className="App" >
      <div className='nav'>
        <Container className='navbar'>
          <Col>
            <a className='navitem' href='#title'><button className='navbutton'>Title</button></a>
            <a className='navitem' href='#skills'><button className='navbutton'>Skills</button></a>
            <a className='navitem' href='#projects'><button className='navbutton'>Projects</button></a>
            <a className='navitem' href='#about'><button className='navbutton'>About</button></a>
            <a className='navitem' href='#contact'><button className='navbutton'>Contact</button></a>
          </Col>
        </Container>
      </div>

      {/* <Header/> */}
      <Particles
        style={{ width: 200, height: 200 }}
        className='particles'
        options={{
          background: {
            color: {
              value: '#ececcf',
            },
          },
          fullScreen: { enable: false },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 10,
              },
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 50,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#b65959dc", //changes color of lines
              distance: 200,
              enable: true,
              opacity: 1,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: true,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 1,
            },
          },
        }} />
      <div id='title'>
        <Home />
      </div>

      <div id='skills'>
        <Skills />
      </div>

      <div id='projects'>
        <Projects />
      </div>

      <div id='about'>
        <About />
      </div>

      <div id='contact'>
        <ContactMe id='contact' />
      </div>

      <Footer />

    </div>
  );
}

export default App;
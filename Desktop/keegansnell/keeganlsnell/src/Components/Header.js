import React from 'react';
import About from './About';
import ContactMe from './Contact';
import Projects from './Projects';
import Skills from './Skills';

const Header = () => {
    return(
        <div id='header'>
            <div>
                {/* <a href={<About/>}><button className='headerbutton1'>About</button></a> */}
                <a href='#header'><button className='headerbutton1'>About</button></a>
                
                {/* <a href={<Projects/>}><button className='headerbutton'>Projects</button></a> */}
                <a href='#project'><button className='headerbutton'>Projects</button></a>
                
                <a href={<ContactMe/>}><button className='headerbutton'>Contact Me</button></a>
                
                <a href={<Skills/>}><button className='headerbutton'>Skills</button></a>
                
            </div>
        </div>
    )
}
export default Header;
import React from "react";
import './MyNavbar.css'

const MyNavbar = ({scrollToSection}) =>{
    return(
        <div className="nav">
            <div class="topnav">
                <a href="#about" onClick={() => scrollToSection('about')}>About</a>
                <a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a>
                <a href="#experience">Experience</a>
                <a href="#project">Project</a>
                <a href="#interest">Interest</a>
                <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
            </div>
        </div>
    );
}

export default MyNavbar;
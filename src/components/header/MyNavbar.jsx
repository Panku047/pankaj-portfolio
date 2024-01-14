import React from "react";
import './MyNavbar.css'

const MyNavbar = ({scrollToSection}) =>{
    return(
        <div className="nav">
            <div class="topnav">
                <a onClick={() => scrollToSection('about')}>About</a>
                <a onClick={() => scrollToSection('skills')}>Skills</a>
                <a href="#contact">Experience</a>
                <a href="#about">Project</a>
                <a href="#contact">Interest</a>
                <a onClick={() => scrollToSection('contact')}>Contact</a>
            </div>
        </div>
    );
}

export default MyNavbar;
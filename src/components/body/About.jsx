import React from "react";
import Home from "./Home";
import './About.css'

const About = ({scrollToSection}) =>{
    return(
        <div id="about">
            <Home scrollToSection={scrollToSection} />
            <div>
                About
            </div>
        </div>
    );
}

export default About;
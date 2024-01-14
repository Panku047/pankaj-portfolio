import React from "react";
import Home from "./Home";
import './About.css'

const About = ({scrollToSection}) =>{
    return(
        <div id="about">
            <Home scrollToSection={scrollToSection} />
            <div className="abt-me">
                <h1 className="abtme-inner">About Me</h1>
                <p className="more-details">
                    I am Pankaj Kumar, a 28 year old web developer with 5+ years of experience in IT.<br />
                    Have completed BE degree in 2018. Currently contributing to H&M Group, I specialize <br />
                     in crafting visually appealing and user-friendly interfaces.Hailing <br />
                    from Madhubani, Bihar, known for its Mithila painting. <br />
                    I infuse creativity and attention to detail into my work. <br />
                    Let's connect and elevate digital experiences together!
                </p>
            </div>
        </div>
    );
}

export default About;
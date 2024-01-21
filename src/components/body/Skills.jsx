import React from "react";

import './Skills.css'

import ReactIcon from '../assets/skills-img/react.png';
import NextIcon from '../assets/skills-img/nextjs.png';
import JavaScript from '../assets/skills-img/js.png';
import ReduxIcon from '../assets/skills-img/redux.png';
import CSSIcon from '../assets/skills-img/css.png';
import HTMLIcon from '../assets/skills-img/html-5.png';
import JIRAIcon from '../assets/skills-img/jira.png';
import GitHubIcon from '../assets/skills-img/github-sign.png';
import PostgreIcon from '../assets/skills-img/postgre.png';
import BootstrapIcon from '../assets/skills-img/bootstrap.png';
import VSDIcon from '../assets/skills-img/vsd.png';

const Skills = () =>{
    return(
        <div id="skills" className="skills-main">
            <div>
                <h1 className="skills">
                    Skills
                </h1>
                <div className="tech-icons">
                    <div className="react">
                        {/* <div className="react-name">React JS</div> */}
                        <img className="icon-size" src={ReactIcon} alt="React JS"/>
                    </div>
                    <div className="next">
                        {/* <div className="next-name">Next JS</div> */}
                        <img style={{background: 'white', borderRadius: '5px'}} className="icon-size" src={NextIcon} alt="Next JS"/>
                    </div>
                    <div className="javaScript">
                        {/* <div className="java-script">JavaScript</div> */}
                        <img className="icon-size" src={JavaScript} alt="JavaScript"/>
                    </div>
                    <div className="redux">
                        {/* <div className="redux-name">Redux</div> */}
                        <img className="icon-size" src={ReduxIcon} alt="Redux"/>
                    </div>
                </div>
                <div className="tech-icons2">
                    <div className="html">
                        <img className="icon-size" src={HTMLIcon} alt="HTML"/>
                    </div>
                    <div className="CSS">
                        <img className="icon-size" src={CSSIcon} alt="CSS"/>
                    </div>
                    <div className="jira">
                        {/* <div className="jira-name">JIRA</div> */}
                        <img className="icon-size-jira" src={JIRAIcon} alt="JIRA"/>
                    </div>
                </div>
                <div className="tech-icons3">
                    <div className="github">
                        <img className="icon-size" src={GitHubIcon} alt="gitHub"/>
                    </div>
                    <div className="postgre">
                        <img className="icon-size" src={PostgreIcon} alt="postgre"/>
                    </div>
                    <div className="bootstrap">
                        <img className="icon-size" src={BootstrapIcon} alt="bootstrap"/>
                    </div>
                    <div className="confluence">
                        <img className="icon-size" src={VSDIcon} alt="VSD"/>
                    </div>
                </div>
 
            </div>
        </div>
    );
}

export default Skills;
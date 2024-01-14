import React from "react";

import './Skills.css'

import ReactIcon from '../assets/skills-img/react.png';
import NextIcon from '../assets/skills-img/nextjs.png';
import JavaScript from '../assets/skills-img/js.png'
import ReduxIcon from '../assets/skills-img/redux.png'

const Skills = () =>{
    return(
        <div id="skills" className="skills-main">
            <div>
                <h1 className="skills">
                    Skills
                </h1>
                <div className="tech-icons">
                    <div className="react">
                        <div className="react-name">React JS</div>
                        <img className="icon-size" src={ReactIcon} alt="React JS"/>
                    </div>
                    <div className="next">
                        <div className="next-name">Next JS</div>
                        <img className="icon-size" src={NextIcon} alt="Next JS"/>
                    </div>
                    <div className="javaScript">
                        <div className="java-script">JavaScript</div>
                        <img className="icon-size" src={JavaScript} alt="JavaScript"/>
                    </div>
                    <div className="redux">
                        <div className="redux-name">Redux</div>
                        <img className="icon-size" src={ReduxIcon} alt="Redux"/>
                    </div>
                </div>
                <div className="tech-icons1">
                    <div className="react">
                        <div className="react-name">React JS</div>
                        <img className="icon-size" src={ReactIcon} alt="React JS"/>
                    </div>
                    <div className="next">
                        <div className="next-name">Next JS</div>
                        <img className="icon-size" src={NextIcon} alt="Next JS"/>
                    </div>
                    <div className="javaScript">
                        <div className="java-script">JavaScript</div>
                        <img className="icon-size" src={JavaScript} alt="Next JS"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
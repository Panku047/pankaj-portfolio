import React, {useState, useEffect} from "react";

import Button from '@mui/material/Button';


import './Home.css'
import MyPic from '../assets/pankaj.JPG'

const HELLO = 'Hello...'
const MY_NAME = 'My name is Pankaj Kumar'
const MY_DETAILS = 'I am a front-end Developer'

const Home = ({scrollToSection}) =>{
    const [hello, setHello] = useState('');
    const [myName, setMyName] = useState('');
    const [myDetails, setMyDetails] = useState('');
    const [displayContactBtn, setDisplayContactBtn] = useState(false)
    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            if (index <= HELLO.length) {
                setHello(HELLO.slice(0, index));
              index++;
            } else {
              clearInterval(intervalId);
            }
          }, 30);
        // return () => {
        //   clearInterval(intervalId);
        // };
    }, []);
    useEffect(() => {
        let index = 0;
        setTimeout(() =>{
            const intervalId = setInterval(() => {
                if (index <= MY_NAME.length) {
                  setMyName(MY_NAME.slice(0, index));
                  index++;
                } else {
                  clearInterval(intervalId);
                }
              }, 30);
        },500)
        // return () => {
        //   clearInterval(intervalId);
        // };
    }, []);
    useEffect(() => {
        let index = 0;
        setTimeout(() =>{
            const intervalId = setInterval(() => {
                if (index <= MY_DETAILS.length) {
                  setMyDetails(MY_DETAILS.slice(0,index))
                  index++;
                } else {
                  clearInterval(intervalId);
                }
              }, 30);
        }, 1000)
    }, []);

    useEffect(() =>{
        setTimeout(() =>{
            setDisplayContactBtn(true)
        },1500)
    },[])

    return(
        <div className="main-home">
            <div className="home-left">
                <h1 className="namaste">{hello}</h1>
                <h1 className="namaste">{myName}</h1>
                <h1 className="my-details">{myDetails}</h1>
                {displayContactBtn ?
                    <Button
                        onClick={() => scrollToSection('contact')}
                        className="contact-btn" 
                        variant="contained">
                        Contact Me
                    </Button> : '' 
                }
            </div>
            <div className="home-right">
                <img className="my-pic" src={MyPic} alt="My Pic"/>
            </div>
        </div>
    );
}

export default Home;
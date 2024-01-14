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
    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            if (index <= HELLO.length) {
                setHello(HELLO.slice(0, index));
              index++;
            } else {
              clearInterval(intervalId);
            }
          }, 100);
        // return () => {
        //   clearInterval(intervalId);
        // };
    }, [HELLO]);
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
              }, 100);
        },1000)
        // return () => {
        //   clearInterval(intervalId);
        // };
    }, [MY_NAME]);
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
              }, 100);
        }, 3500)
    }, [MY_DETAILS]);

    return(
        <div className="main-home">
            <div className="home-left">
                <h1 className="namaste">{HELLO}</h1>
                <h1 className="namaste">{MY_NAME}</h1>
                <h1 className="my-details">{MY_DETAILS}</h1>
                <Button 
                    // onClick={sendClicked}
                    // disabled={isSendDisabled} 
                    onClick={() => scrollToSection('contact')}
                    className="contact-btn" 
                    variant="contained">
                    Contact Me
                </Button>
            </div>
            <div className="home-right">
                <img className="my-pic" src={MyPic} />
            </div>
        </div>
    );
}

export default Home;
import React, {useState} from "react";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import './Contact.css'

const Contact = () =>{
    const [isSendDisabled, setIsSendDisabled] = useState(true);
    const [message, setMessage] = useState('')
    const handleChange = (event) =>{
        if(event.target.value !== ''){
            setMessage(event.target.value)
            setIsSendDisabled(false)
        }else{
            setMessage('')
            setIsSendDisabled(true)
        }
    }
    const sendClicked = () =>{
        console.log("your message is-->",message)
        setMessage('');
        setIsSendDisabled(true)
    }
    return(
        <div id='contact' className="cont-main">
            <div className="cont-head">
                <h1 className="cont-me">
                    Contact Me
                </h1>
            </div>
            <div className="input-field">
               <div className="name-email">
                    <TextField
                        className="name-field"
                        required
                        id="outlined-required"
                        label="Name"
                    />
                <div className="field-gap"></div>
                    <TextField
                        className="email-field"
                        required
                        id="outlined-required"
                        label="Email"
                    />
               </div>
                <TextField 
                    multiline
                    maxRows={1}
                    id="outlined-basic" 
                    label="Write your Message" 
                    variant="outlined" 
                    value={message}
                    onChange={handleChange}
                /> <br />
                <Button 
                    onClick={sendClicked}
                    disabled={isSendDisabled} 
                    className="send-btn" 
                    variant="contained">
                    Send
                </Button>
            </div>
        </div>
    );
}

export default Contact;
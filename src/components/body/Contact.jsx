import React, {useState, useEffect} from "react";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import './Contact.css'

const Contact = () =>{
    const [isSendDisabled, setIsSendDisabled] = useState(true);
    const [message, setMessage] = useState('')
    const handleChange = (event) =>{
        if(event.target.value.length > 0){
            setIsSendDisabled(false)
            setMessage(event.target.value)
        }else{
            setIsSendDisabled(true)
        }
    }
    const sendClicked = () =>{
        console.log("your message is-->",message)
        setMessage('');
        setIsSendDisabled(true)
    }
    return(
        <div id='contact'>
            <TextField
                    required
                    id="outlined-required"
                    label="Name"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                /><br />
                <TextField 
                    multiline
                    maxRows={1}
                    id="outlined-basic" 
                    label="Feel like reaching out? Drop me a line with your message" 
                    variant="outlined" 
                    value={message}
                    onChange={handleChange}
                /> <br />
                <Button 
                    onClick={sendClicked}
                    disabled={isSendDisabled} 
                    className="contact-btn" 
                    variant="contained">
                    Send
                </Button>
        </div>
    );
}

export default Contact;
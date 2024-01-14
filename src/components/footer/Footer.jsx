import React from "react";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import './Footer.css'

const Footer = () =>{
    return(
        <div className="footer-main">
            Footer
            <div className="social-media">
                <div>Available on</div>
                <div className="social-media-inner">
                    <LinkedInIcon style={{color: '#0077B5'}} />
                    <TwitterIcon style={{color:'#1DA1F2'}}/>
                    <FacebookIcon style={{color:'#1877f2'}}/>
                    <InstagramIcon/>
                </div>
            </div>
        </div>
    );
}

export default Footer;
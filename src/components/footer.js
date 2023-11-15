import React from 'react'
import "../components style/footer.css";
import Container from 'react-bootstrap/Container';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebookF,faXTwitter,faInstagram,faLinkedinIn);

function Footer() {
  return (
    <section className='Footer-Section'>
        <Container>
            <h3>MINI DIGI</h3>
            <p>Stay ahead of the curve with exclusive updates and offers—sign up for our newsletter today!</p>

            <div className='input-feild'>
                <input type='email' placeholder='Enter Email'/>
                <button>Subscribe</button>
            </div>
            <div className='social-links'>
                <a href='#'><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></a>
                <a href='#'><FontAwesomeIcon icon="fa-brands fa-x-twitter" /></a>
                <a href='#'><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                <a href='#'><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></a>
            </div>
        </Container>
        <hr/>
        <div className='bottom-footer'>
            <p>© Copyright MINI DIGI. All Rights Reserved</p>
            <p>Designed by Karthi</p>
        </div>
    </section>
  )
}

export default Footer;

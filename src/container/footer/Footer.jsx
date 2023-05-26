import React from 'react';
import logo from '../../logo.jpg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Please leave a feedback/ message here! <break/> Thanks!</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p><a href="https://forms.gle/PLyi6VtNDuMU1sLf8" target="_blank" rel="noreferrer">Leave a Message</a> </p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={logo} alt="gpt3_logo" />
        <p>The creator does not permit use of any content of this website <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Institution Links</h4>
        <p><a href="https://www.iitrpr.ac.in/" target="_blank" rel="noreferrer">IIT Ropar</a></p>
        <p><a href="https://school.careers360.com/schools/dav-senior-secondary-public-school-dehra-kangra" target="_blank" rel="noreferrer">D A V Dehra</a></p>
        
        
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Socials</h4>
        <p><a href="https://www.instagram.com/anshikabhatia13/" target="_blank" rel="noreferrer">Instagram</a></p>
        <p><a href="https://www.linkedin.com/in/anshika-637865238/" target="_blank" rel="noreferrer">LinkedIn</a></p>
        <p><a href="https://github.com/anshikabhatia13" target="_blank" rel="noreferrer">Github</a></p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Dehra, Kangra, Himachal Pradesh</p>
        <p>809109918</p>
        <p>anshika150903@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 AB. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
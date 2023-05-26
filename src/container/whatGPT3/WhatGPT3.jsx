import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';
import iitrpr from '../../assets/iitrpr.jpg';
import dav from '../../assets/dav.jpg';
import ten from '../../assets/ten.jpg';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Education "  />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">"They know enough who know how to learn..." </h1>
      
      
    </div>
    <div className="gpt3__whatgpt3-container">

     <img src={iitrpr} />
      <Feature title="B.Tech CSE (2021-2025)" text="I am pursuing a Bachelors in Technology in Computer Science and Engineering from Indian Institute of Technology Ropar." />
      <img src={dav} />
      <Feature title="Class XII (2021)" text="I got 96.6% marks in CBSE Board Higher Secondary School Examination and stood first in my school DAV Sr. Sec. Public School Dehra, Kangra, HP." />
      
      {/* <div class="gpt3__whatgpt3-container-a"> */}
      <img src={ten} />
      <Feature title="Class X (2019)" text="I completed class 10th with an unbelievable score of 98.8% from DAV Sr. Sec. Public School Dehra, Kangra, HP. I stood first in my state of Himachal Pradesh." />
      
      {/* </div> */}
      
      
    </div>
      
  </div>
);

export default WhatGPT3;
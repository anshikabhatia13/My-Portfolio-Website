import React from 'react';

import ai from '../../assets/ai.jpg';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Hello, I'm Anshika. Welcome to my Website!</h1>
      <h2>"You are what you love"</h2>
      <p>   <b >Set in the lap of the Himalayas, I have spent my childhood and school years in a small town Dehra Gopipur in district Kangra of Himachal Pradesh. One thing about me is that I am a learner. I love having complete and precise knowledge about things, no matter which field they belong to. My interests include Literature, Poetry, Songwriting, Music, Singing, Reading, Sketching, Painting, Graphic Designing, Web Development, Android Development, AI through Python and problem solving through Data Structures and Algorithms.</b></p>

      {/* <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div> */}

      {/* <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
      
    </div>
  </div>
);

export default Header;
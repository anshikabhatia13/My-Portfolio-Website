import React from 'react';
import a from '../../assets/a.jpg';
import b from '../../assets/b.jpg';
import c from '../../assets/c.jpg';
import d from '../../assets/d.jpg';
import e from '../../assets/ten.jpg';
import f from '../../assets/f.jpg';
import g from '../../assets/g.jpg';
import SimpleImageSlider from "react-simple-image-slider";
import './possibility.css';
const images = [
  {url:  a },
  { url: b },
  {url:  c },
  {url : d },
  { url: e },
  { url: f},
  { url: g },
];
const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
    <SimpleImageSlider
        width={680}
        height={430}
        images={images}
        showBullets={true}
        showNavs={true}
      />

    </div>
    <div className="gpt3__possibility-content">
      <h4>Anything worth doing is worth doing badly for the first time!</h4>
      <h1 className="gradient__text">Learn to Grow  <br /> Grow to Learn</h1>
      <p> No matter what, Never stop trying!!</p>
      <h4>Here are some photos and videos that I think define my personality</h4>
    </div>
  </div>
);

export default Possibility;
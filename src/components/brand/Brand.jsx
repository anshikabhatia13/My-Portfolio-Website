import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      {/* <img src={google} /> */}
      <a href=" " target="_blank" rel="noreferrer">
          <img
            src={google}
            alt="Facebook"
          />
        </a>
    </div>
    <div>
      {/* <img src={slack} /> */}
      <a href=" " target="_blank" rel="noreferrer">
          <img
            src={slack}
            alt="Twitter"
          />
        </a>
    </div>
    <div>
      {/* <img src={atlassian} /> */}
      <a href="https://www.linkedin.com/in/anshika-637865238/" target="_blank" rel="noreferrer">
          <img
            src={atlassian}
            alt="LinkedIn"
          />
        </a>
    </div>
    <div>
      {/* <img src={dropbox} /> */}
      <a href="https://www.instagram.com/anshikabhatia13/" target="_blank" rel="noreferrer">
          <img
            src={dropbox}
            alt="Instagram"
          />
        </a>
    </div>
    <div>
      {/* <img src={shopify} /> */}
      <a href="https://github.com/anshikabhatia13" target="_blank" rel="noreferrer">
          <img
            src={shopify}
            alt="Github"
          />
        </a>
    </div>
  </div>
);

export default Brand;
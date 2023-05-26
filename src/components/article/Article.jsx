import React from 'react';
import './article.css';

const Article = ({link, imgUrl, date, text }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
    <a href={link} target="_blank" rel="noreferrer">
          <img src={imgUrl}
          />
        </a>
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read more..</p>
    </div>
  </div>
);

export default Article;
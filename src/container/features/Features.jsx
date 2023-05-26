import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'The Music that runs in background of life..',
    text: <b>'As an appreciator of good music, my music taste is unbounded. From folk to pop, I love listen as much as I love to sing. The top Albums for me right now are Midnights-Taylor Swift, Harry's House-Harry Styles, Walls-Louis Tomlinson, Jab We Met-Pritam.'</b>,
  },
  {
    title: 'The Voice that comes out of you and the Voices you absorb ',
    text: <b>'I am a reader and I love to read books. Older classics like <i>Pride and Prejudice</i>  and <i>Wuthering Heights</i> enchant me as equally if not more, as <i>Conversations With Friends</i> and <i>The Alchemist</i> do. Besides that I'm a writer. I write verses for my own happiness.'</b>,
  },
  {
    title: 'Painting the Flowers green and skies Purple',
    text:<b>'Though amateur, I love to paint and sketch. There is a peace and satisfaction that comes with freedom to create whatever you want. That is what I live for'</b> ,
  },
  {
    title: 'Technology that evolves with the speed of light',
    text: <b>'Technology presents an infinite number of opportunities for the society and world to grow. As much as I am passionate to be well familiar and equipped with all the tools available to develop the technologies present now, I am equally interested in understanding them deeply and work in research and development of tecnology .  '</b>,
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.</h1>
      <p></p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
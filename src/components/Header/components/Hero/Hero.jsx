import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import './hero.scss';
import hero from './img/header.png';
import AudioPlayer from '../../../AudioPlayer/AudioPlayer';

const Hero = () => {
  const {
    allEpisodesJson: { nodes: allEpisodes },
  } = useStaticQuery(graphql`
    {
      allEpisodesJson {
        nodes {
          title
          audio {
            publicURL
          }
          date(formatString: "MMM D, YYYY")
          tags
          text
          season
          image {
            publicURL
          }
        }
      }
    }
  `);

  return (
    <>
      <div className="hero">
        <div className="orange-text">
          <span>Trending Episode</span>
        </div>
        <h1>Episode 1 : Behind-The-Scenes With The Co-Founders</h1>
        <p>
        If you’ve ever wondered how India’s first online-only school came into existence then join Riya Mary Kurian and Akanksha SK in episode one as they interview the co-founders Mr. Yeshwanth Raj Parasmal and Mr. Santosh Kumar of 21K School. Experience, Advice, Educational Evolution, Overcoming Setbacks and Motivation! Hear it all,
         right here in an entertaining conversation between the co-founders and the students from the school that they founded.
        </p>
        <AudioPlayer audio={allEpisodes[0].audio.publicURL} />
      </div>
      <img alt="hero" src={hero} className="big-image" />
    </>
  );
};

export default Hero;

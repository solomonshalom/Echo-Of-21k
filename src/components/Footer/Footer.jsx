/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF, faInstagram, faLinkedinIn, faSkype,
} from '@fortawesome/free-brands-svg-icons';

import Logo from '../Logo/Logo';

import google from './img/google-podcasts.png';
import apple from './img/apple-podcasts.png';
import spotify from './img/spotify.png';

import './footer.scss';

const Footer = () => (
  <>
    <section className="footer">
      <div className="footer-top">
        <div className="branding">
          <Logo />
          <p>
          For the Students. By the Students. Of the Students
          It's a student-led podcast, conceptualized, coordinated, and conducted by the Students of 21K School.
          </p>
          Socials
          <div className="socials">
            <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiXppL-_KH3AhX4ZmwGHUOtD3oQFnoECA4QAQ&url=https%3A%2F%2Fwww.facebook.com%2F21Kschool%2F&usg=AOvVaw0HagzH4hT1CN9hM0oQP4PZ">
              <FontAwesomeIcon icon={faFacebookF} className="fa" />
            </a>
            <a href="https://www.instagram.com/21kschool/?hl=en">
              <FontAwesomeIcon icon={faInstagram} className="fa" />
            </a>
            <a href="https://anchor.fm/the-echo-of-21k/episodes/Episode-3--Behind-The-Scenes-With-The-Principal-e1euoes">
              <FontAwesomeIcon icon={faSpotify} className="fa" />
            </a>
            <a href="https://twitter.com/21Kschool">
              <FontAwesomeIcon icon={faTwitter} className="fa" />
            </a>
          </div>
        </div>
        <div id="pages" className="footer-column">
          Pages
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/episodes">Episode</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div id="episodes" className="footer-column">
          Recent Episodes
          <ul>
            <li>
              <a href="#">Episode 1</a>
            </li>
            <li>
              <a href="#">Episode 2</a>
            </li>
            <li>
              <a href="#">Episode 3</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          Listen Our Podcasts In
          <ul>
            <li>
              <a href="https://open.spotify.com/show/5Ef0nSedU4l2DoFeSYLtIp">
                <img alt="spotify" src={spotify} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-botom">
        @2020 Solomon Shalom Lijo All Rights Reserved | Design By : Solomon Lijo / Zaid Ajani
      </div>
    </section>
  </>
);

export default Footer;

/* eslint-disable jsx-a11y/anchor-is-valid */
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import Slider from '../../components/Slider/Slider';
import Subscribe from '../../components/Subscribe/Subscribe';

import './about.scss';

export default () => (
  <PageLayout title="About Us" page>
    <section className="about">
      <div className="about-text">
        <h2>Hello There! We Are The Echo Of 21K</h2>

        <p>
        For the Students. By the Students. Of the Students 
        It's a student-led podcast, conceptualized, coordinated, and conducted by the Students of 21K School.
        </p>
      </div>
      <img src="#" alt="" className="me" />
    </section>

  {/*  <section className="featured">
      <h2>We Have Been Featured in</h2>
      <ul className="brands">
        <li>
          <a href="#">
            <img src="/images/amara.svg" alt="amara" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/aven.svg" alt="aven" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/circle.svg" alt="circle" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/earth-2.0.svg" alt="earth" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/fox-hub.svg" alt="fox-hub" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/goldline.svg" alt="goldline" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/kanba.svg" alt="kanba" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/kyan.svg" alt="kyan" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/muzica.svg" alt="muzica" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/nirastate.svg" alt="nirastate" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/treva.svg" alt="treva" />
          </a>
        </li>
      </ul>
    </section>
*/}
    <Subscribe
      title="Directly Into Your Inbox Every Monday"
      subtitle="Wanna know something exciting every monday? maybe how we do it or how you can!"
    />
  </PageLayout>
);

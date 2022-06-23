import React from 'react';
import Episodes from '../components/Episodes/Episodes';

import './home.scss';

import Slider from '../components/Slider/Slider';
import Carousel from '../components/Carousel/Carousel';
import Subscribe from '../components/Subscribe/Subscribe';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default () => (
  <>
    <Header hero />
    <Episodes title="Latest Episodes" latest />
    <Carousel />
    <Subscribe
      title="Directly Into Your Inbox Every Monday"
      subtitle="Wanna know something exciting every monday? maybe how we do it or how you can!"
    />
    <Footer />
  </>
);

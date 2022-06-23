import React from 'react';
import Contact from '../../components/Contact/Contact';
import PageLayout from '../../components/PageLayout/PageLayout';
import Subscribe from '../../components/Subscribe/Subscribe';

import './contact.scss';

export default () => (
  <PageLayout title="Contact">
    <section className="contact-container">
      <h2>Get In Touch</h2>
      <Contact />
    </section>
    <Subscribe
      title="Directly Into Your Inbox Every Monday"
      subtitle="Wanna know something exciting every monday? maybe how we do it or how you can!"
    />
  </PageLayout>
);

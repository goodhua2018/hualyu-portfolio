import React from 'react';
import Contacts from './Contacts';
import Clear from './Clear';


export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-main">
        
        <section className="about-me">
          <h3 id="aboutme">About Me</h3>
          < Clear />
          <p>I am a Software Engineer and I am fasinated with problem-solving. Based on my scientific background, System Admin and Web develop experience and application and system management experience, I am able to pick up any tech stack quickly and ready to learn new skills. </p>
        </section>
        <section>
          <h3 id="contact">Contact </h3>
          < Clear />
          <p>Email: hualyu.2018@gmail.com</p>
          <p>Mobile: 0411898634</p>
          <p>Location: Adelaide, Australia</p>
          < Contacts />
          < Clear />
        </section>
      
      </div>
    </div>
  );
}

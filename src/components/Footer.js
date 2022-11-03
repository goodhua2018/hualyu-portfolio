import React from 'react'
import Contacts from './Contacts'
import Clear from './Clear'


export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-main">
        <section></section>
        <section>
          <h3 id="aboutme">About Me</h3>
          < Clear />
          <p>I am a Software Engineer and I am fasinated with problem-solving. I am lucky to find coding and programming as my new career based on my data management experience in the Health field and years' System Administration experience as well as my scientific background.  </p>
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
        <section></section>
      </div>
    </div>
  )
}

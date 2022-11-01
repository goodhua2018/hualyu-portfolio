import React from 'react'
import Contacts from './Contacts'
import Clear from './Clear'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-main">
        <section>

        </section>
      <section>
        <h2>Previous</h2>
        <p>* I was a Scientist</p>
        <p>* I made plans for expreiments</p>
        <p>* I </p>
      </section>

      <section>
        <h2>Future</h2>
        <p>I will be a Software Developer</p>
        <p>I will make plans to solve problems</p>
      </section>
    
      <section>
        <h2>Contact </h2>
        <p>Email: hualyu.2018@gmail.com</p>
        <p>Mobile: 0411898634</p>
        < Contacts />
        < Clear />
      </section>
      
      </div>
      
      
      
    </div>
  )
}

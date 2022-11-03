import {  BsGithub } from 'react-icons/bs'
import { AiOutlineMail, AiFillLinkedin } from 'react-icons/ai'
import {  MdOutlineEmail } from 'react-icons/md'



import React from 'react'

export default function Contacts() {
  return (
    <div className="contact-icon">
      
      
      <a href="https://www.linkedin.com/in/hualyu-hualyu" target="_blank">< AiFillLinkedin size={36} color={'#1366C2'}/> </a>
      <a href="https://github.com/goodhua2018" target="_blank">< BsGithub size={32} color={'black'} /></a>
      {/* < MdOutlineEmail size={36}/> */}

      <div> </div>
      <div> </div>
      <div> </div>
      <div> </div>
    </div>
  )
}

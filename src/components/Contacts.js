import {  BsGithub } from 'react-icons/bs'
import { AiOutlineMail, AiFillLinkedin } from 'react-icons/ai'
import {  GrDocumentText } from 'react-icons/gr'
import {  MdOutlineEmail } from 'react-icons/md'



import React from 'react'

export default function Contacts() {
  return (
    <div className="contact-icon">
      
      
      < AiFillLinkedin size={36} color={'#1366C2'}/>
      < BsGithub size={32} color={'black'}/>
      < MdOutlineEmail size={36}/>
      {/* < GrDocumentText size={30}/> */}
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

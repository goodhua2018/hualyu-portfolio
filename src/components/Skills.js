import React from 'react'
import { FaReact, FaNodeJs, FaBootstrap, FaSass } from 'react-icons/fa'
import { DiRubyRough } from 'react-icons/di'
import { SiJest, SiCss3 } from 'react-icons/si'
import { TbBrandJavascript } from 'react-icons/tb'
import { AiOutlineHtml5 } from 'react-icons/ai'



export default function Skills() {
  return (
    <div className="skills">
      < FaReact size={40}/>
      < FaNodeJs size={40}/>
      < AiOutlineHtml5 size={40}/>
      < SiCss3 size={40}/>
      < TbBrandJavascript size={40}/>
      < SiJest size={40}/>
      < FaBootstrap size={40}/>
      < DiRubyRough size={40}/>
    </div>
  )
}
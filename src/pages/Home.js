import React from 'react'
import HeaderNav from '../components/HeaderNav'
import Slide from '../components/Slides'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Bottom from '../components/Bottom'

export default function Home() {
  return (
    <div>
      < HeaderNav />
      < Slide />
      < Projects />
      < Footer />
      < Bottom />
    </div>
  )
}

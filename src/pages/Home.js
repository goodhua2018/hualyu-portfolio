import React from 'react';
import HeaderNav from '../components/HeaderNav';
import Slide from '../components/Slides';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Games from '../components/Games';
import Skills from '../components/Skills';
import Clear from '../components/Clear';
import Bottom from '../components/Bottom';

export default function Home() {
  return (
    <div>
      < HeaderNav />
      < Slide />
      < Skills />
      < Projects />
      < Games />
      < Footer />
      < Clear />
      < Clear />
      < Bottom />
      < Clear />
    </div>
  )
}

import React from 'react'

import './app.css';

import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Services } from './components/services/Services';
import { Qualification } from './components/qualification/Qualification';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { Scrollup } from './components/scrollup/Scrollup';


export const PortfolioApp = () => {
  return (
    <>
      <Header/>
      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
        <Contact/>
        <Footer/>
        <Scrollup/>
      </main>
    </>
  )
}


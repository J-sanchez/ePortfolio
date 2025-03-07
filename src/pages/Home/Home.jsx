import React, { useState, useEffect, useRef } from 'react';
import Hero from '../../components/Hero';
import AboutPage from '../About/About';
import AboutMe from '../../components/AboutMe/AboutMe';
import Portfolio from '../../components/Portfolio';


const HomePage = () => {
    const wrapperRef = useRef(null);
    return (

    <div className='relative z-0 bg-gradient-to-b from-emerald-950 to-slate-900'>
    <div className='wrapper' ref={wrapperRef}>
      <div id="hero" className='z-auto'>
        <Hero scrollContainer={wrapperRef} />
            </div>
        </div>
        
            <AboutMe />
            <div className='pb-12'>
            <Portfolio />
            </div>

    </div>
)
}
export default HomePage;

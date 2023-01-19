import { useEffect, useState } from 'react';

import SliderCarousel from './components/SliderCarousel';
import HeaderNav from './components/HeaderNav';
import PromoContent from './components/PromoContent';


import close from './assets/icon-close.svg';
// import bgDesktop from './assets/bg-simplify-section-desktop.svg';
// import bgMobile from './assets/bg-simplify-section-mobile.svg';
// import bgTabletPattern from './assets/bg-tablet-pattern.svg';
import illustrationIntro from './assets/illustration-intro.svg';

import Footer from './components/Footer';

function App() { 
  return (
    <div className="text-dark-blue">
      <HeaderNav/>
      <PromoContent/>

      {/* <article className='flex flex-col gap-12 py-8'>
        <h3 className='font-bold text-3xl text-center'>What they’ve said</h3>
        <SliderCarousel/>
        <a className='text-very-light-gray self-center mt-6 sm:mt-0 font-medium text-xs bg-bright-red px-8 py-3 rounded-full cursor-pointer' href="">Get Started</a>
      </article>       */}

      <article className='flex flex-col gap-8 items-center content-center px-8 py-20 bg-[url(./assets/bg-simplify-section-mobile.svg)] bg-left bg-no-repeat bg-auto bg-bright-red'>
        <h1 className='text-very-light-gray text-4xl text-center font-bold leading-tight'>Simplify how your team works today.</h1>
        <a className='text-bright-red font-bold text-xs bg-very-light-gray px-8 py-3 rounded-full cursor-pointer' href="">Get Started</a>
      </article>

      <Footer/>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/Saga-sanga" target="_blank">Reckson Khiangte</a>.
      </div>
    </div>
  )
}

export default App

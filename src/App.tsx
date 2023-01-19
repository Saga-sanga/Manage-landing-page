import HeaderNav from './components/HeaderNav';
import PromoContent from './components/PromoContent';

// import bgDesktop from './assets/bg-simplify-section-desktop.svg';
// import bgMobile from './assets/bg-simplify-section-mobile.svg';
// import bgTabletPattern from './assets/bg-tablet-pattern.svg';

import Footer from './components/Footer';

function App() { 
  return (
    <div className="text-dark-blue">
      <HeaderNav/>
      <PromoContent/>

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

import logo from '../assets/logo.svg';
import hamburger from '../assets/icon-hamburger.svg';
import close from '../assets/icon-close.svg';
import illustrationIntro from '../assets/illustration-intro.svg';
import { useState } from 'react';

export default function HeaderNav() {
  const [imgSrc, setImgSrc] = useState(hamburger);
  const [divPos, setDivPos] = useState("translate-y-[-50%]");
  const [visibility, setVisibility] = useState("hidden");
  // let bodyOveflow = document.body.style.overflow;

  function handleClick() {
    if (imgSrc === hamburger) {
      setImgSrc(close);
      setDivPos("translate-y-[110%]");
      setVisibility('');
      document.body.classList.add('overflow-hidden');
    } else {
      setImgSrc(hamburger);
      setDivPos("translate-y-[-50%]");
      setVisibility('hidden');
      document.body.classList.remove('overflow-hidden');
    }
    
    // imgSrc === hamburger ? setImgSrc(close) : setImgSrc(hamburger);
    // divPos === "translate-y-[-50%]" ? setDivPos("translate-y-[110%]") : setDivPos("translate-y-[-50%]");
    // visibility === 'hidden' ? setVisibility('') : setVisibility('hidden');
  }

  return (
    <div className='bg-[url(./assets/bg-tablet-pattern.svg)] bg-no-repeat bg-cover bg-[3rem_-5rem] px-4 pb-4'>
      <div className={`${visibility} fixed w-screen h-screen modal-overlay scale-110 z-20`}></div>
      <nav className='flex relative justify-between items-end px-2 py-10 z-30'>
        <img className='w-28' src={logo} alt="Manage Logo" />
        <div id='mobile-nav' className={`absolute left-2/4 ${divPos} ml-[-45vw] md:flex transition-transform duration-300`}>
          <ul className='flex flex-col items-center gap-6 w-[90vw] bg-white rounded p-12 font-bold'>
            <li>Pricing</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Community</li>
          </ul>
        </div>

        <a className='hidden md:block' href="">Get Started</a>
        <div className='md:hidden'><img src={imgSrc} alt="menu/close icon" style={{height: '1.25rem'}} onClick={handleClick} /></div>
      </nav>
      <img className='w-full' src={illustrationIntro} alt="charts and percentages image" />
    </div>
  )
}
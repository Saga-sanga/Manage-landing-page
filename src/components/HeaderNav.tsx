import logo from '../assets/logo.svg';
import hamburger from '../assets/icon-hamburger.svg';
import close from '../assets/icon-close.svg';
import { useState } from 'react';

export default function HeaderNav() {
  const [imgSrc, setImgSrc] = useState(hamburger);
  const [divPos, setDivPos] = useState("translate-y-[-50%]");
  const [visibility, setVisibility] = useState("hidden");

  function handleClick() {
    if (imgSrc === hamburger) {
      setImgSrc(close);
      setDivPos("translate-y-[110%]");
      setVisibility('');
      document.body.classList.add('overflow-hidden');
    } 
    if (imgSrc === close) {
      setImgSrc(hamburger);
      setDivPos("translate-y-[-50%]");
      setVisibility('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  }

  return (
    <div className='bg-[url(./assets/bg-tablet-pattern.svg)] bg-no-repeat bg-cover bg-[3rem_-5rem] px-4'>
      <div onClick={handleClick} className={`${visibility} fixed w-screen h-screen modal-overlay scale-110 z-20`}></div>
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

        <a className='hidden md:block text-very-light-gray font-medium text-xs mt-6 bg-bright-red px-8 py-3 rounded-full cursor-pointer' href="">Get Started</a>
        <div className='md:hidden '><img src={imgSrc} alt="menu/close icon" style={{height: '1.25rem'}} onClick={handleClick} /></div>
      </nav>
    </div>
  )
}
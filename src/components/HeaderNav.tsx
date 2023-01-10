import logo from '../assets/logo.svg';
import hamburger from '../assets/icon-hamburger.svg';
import close from '../assets/icon-close.svg';
import { useState } from 'react';

export default function HeaderNav() {
  const [imgSrc, setImgSrc] = useState(hamburger);
  const [divPos, setDivPos] = useState("translate-y-[-65%]");
  const [visibility, setVisibility] = useState("hidden");

  function handleClick() {
    if (imgSrc === hamburger) {
      setImgSrc(close);
      setDivPos("translate-y-[65%]");
      setVisibility('');
      document.body.classList.add('overflow-hidden');
    } 
    if (imgSrc === close) {
      setImgSrc(hamburger);
      setDivPos("translate-y-[-65%]");
      setVisibility('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  }
  // className='bg-[url(./assets/bg-tablet-pattern.svg)] bg-no-repeat bg-cover bg-[3rem_-5rem]'

  return (
    <div className='px-4 absolute w-full'>
      <div onClick={handleClick} className={`${visibility} fixed w-screen h-screen modal-overlay scale-110 z-20`}></div>
      <nav className='flex relative justify-between items-center px-2 py-10 z-30'>
        <img className='w-28' src={logo} alt="Manage Logo" />
        <div id='mobile-nav' className={`absolute md:static md:ml-0 md:translate-y-0 left-2/4 ${divPos} ml-[-45vw] transition-transform duration-300`}>
          <ul className='flex flex-col items-center gap-6 md:gap-8 w-[90vw] md:flex-row md:p-0 md:w-auto md:bg-transparent md:text-xs bg-white rounded p-12 font-bold'>
            <li>Pricing</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Community</li>
          </ul>
        </div>

        <a className='hidden md:block text-very-light-gray font-medium text-xs bg-bright-red px-8 py-3 rounded-full cursor-pointer' href="">Get Started</a>
        <div className='md:hidden '><img src={imgSrc} alt="menu/close icon" style={{height: '1.25rem'}} onClick={handleClick} /></div>
      </nav>
    </div>
  )
}
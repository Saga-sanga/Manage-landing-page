import facebookLogo from '../assets/icon-facebook.svg';
import youtubeLogo from '../assets/icon-youtube.svg';
import twitterLogo from '../assets/icon-twitter.svg';
import pinterestLogo from '../assets/icon-pinterest.svg';
import instagramLogo from '../assets/icon-instagram.svg';
import logoDark from '../assets/logo-dark.svg';

export default function Footer() {
  return(
    <footer className='bg-very-dark-blue text-very-light-gray flex flex-col items-center gap-12 py-10'>
      <div className='flex gap-3 justify-center'>
        <input className='px-7 py-2 rounded-full w-4/6 placeholder:text-sm text-dark-blue' type="text" placeholder='Updates in your inbox…'/>
        <button className='rounded-full px-7 py-2 bg-bright-red text-very-light-gray text-xs font-bold'>GO</button>
      </div>
      <div className='w-full flex justify-around text-sm'>
        <ul>
          <li className='py-2'><a href="">Home</a></li>
          <li className='py-2'><a href="">Pricing</a></li>
          <li className='py-2'><a href="">Products</a></li>
          <li className='py-2'><a href="">About Us</a></li> 
        </ul>
        <ul>
          <li className='py-2'><a href="">Careers</a></li>
          <li className='py-2'><a href="">Community</a></li>
          <li className='py-2'><a href="">Privacy Policy</a></li>
        </ul>
      </div>
      <div className='w-full flex flex-col items-center gap-12'>
        <div className='w-full flex justify-evenly'>
          <img width={32} src={facebookLogo} alt="facebook logo" />
          <img width={32} src={youtubeLogo} alt="youtube logo" />
          <img width={32} src={twitterLogo} alt="twitter logo" />
          <img width={32} src={pinterestLogo} alt="pinterest logo" />
          <img width={32} src={instagramLogo} alt="instagram logo" />
        </div>
        <div><img className='fill-very-light-gray' src={logoDark} alt="Manage Logo" /></div>
      </div>
      <div className='text-xs text-dark-grayish-blue'>Copyright 2020. All Rights Reserved</div>
    </footer>
  ) 
}
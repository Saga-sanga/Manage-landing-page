import logo from '../assets/logo.svg';
import hamburger from '../assets/icon-hamburger.svg';
import illustrationIntro from '../assets/illustration-intro.svg';

export default function HeaderNav() {
  return (
    <div className='bg-[url(./assets/bg-tablet-pattern.svg)] bg-no-repeat bg-cover bg-[3rem_-5rem] px-4 pb-4'>
        <nav className='flex relative justify-between items-center px-2 py-10'>
          <img className='w-28' src={logo} alt="Manage Logo" />
          <div className='absolute left-2/4 top-24 ml-[-45vw] md:flex'>
            <ul className='flex flex-col items-center gap-6 w-[90vw] bg-white rounded p-12 font-bold'>
              <li>Pricing</li>
              <li>Product</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Community</li>
            </ul>
          </div>

          <a className='hidden md:block' href="">Get Started</a>
          <div className='md:hidden'><a href=""><img src={hamburger} alt="menu icon" /></a></div>
        </nav>
        <img className='w-full' src={illustrationIntro} alt="charts and percentages image" />
      </div>
  )
}
import { useEffect, useState } from 'react';

import SliderCarousel from './components/SliderCarousel'

import logo from './assets/logo.svg';
import logoDark from './assets/logo-dark.svg';
import hamburger from './assets/icon-hamburger.svg';
import close from './assets/icon-close.svg';
// import bgDesktop from './assets/bg-simplify-section-desktop.svg';
// import bgMobile from './assets/bg-simplify-section-mobile.svg';
// import bgTabletPattern from './assets/bg-tablet-pattern.svg';
import illustrationIntro from './assets/illustration-intro.svg';
import facebookLogo from './assets/icon-facebook.svg';
import youtubeLogo from './assets/icon-youtube.svg';
import twitterLogo from './assets/icon-twitter.svg';
import pinterestLogo from './assets/icon-pinterest.svg';
import instagramLogo from './assets/icon-instagram.svg';
import chevronLeft from './assets/chevron-left.svg';
import chevronRight from './assets/chevron-right.svg';

import anishaAvatar from './assets/avatar-anisha.png';
import aliAvatar from './assets/avatar-ali.png';
import richardAvatar from './assets/avatar-richard.png';
import shanaiAvatar from './assets/avatar-shanai.png';

function App() { 
  // const scrollWrapper = document.querySelector('.scrollWrapper');

  // const rectWidth = scrollWrapper?.getBoundingClientRect().width;

  // const [widthScroll, setWidth] = useState(rectWidth);
  // // document.querySelector(".carousel")?.style.width = scrollWrapperWidth * 4;

  // useEffect(() => {
    
    
  //   console.log(rectWidth);
  // }, [rectWidth]);

  // const update = () => {
  //   console.log(widthScroll);
  //   setWidth(rectWidth);
  // }

  // document.addEventListener('scroll', update);

  return (
    <div className="text-dark-blue">
      <div className='bg-[url(./assets/bg-tablet-pattern.svg)] bg-no-repeat bg-cover bg-[3rem_-5rem] px-4 pb-4'>
        <nav className='flex justify-between items-center px-2 py-10'>
          <img className='w-28' src={logo} alt="Manage Logo" />
          <ul className='hidden md:flex'>
            <li>Pricing</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Community</li>
          </ul>

          <a className='hidden md:block' href="">Get Started</a>
          <div className='md:hidden'><a href=""><img src={hamburger} alt="menu icon" /></a></div>
        </nav>
        <img className='w-full' src={illustrationIntro} alt="charts and percentages image" />
      </div>

      <main >
        <article className='flex flex-col items-center text-center bg-[url(./assets/bg-tablet-pattern.svg)] bg-no-repeat bg-[length:85%] bg-[430%_25%] px-7 gap-24'>
          <div className='flex flex-col items-center gap-2'>
            <h1 className='text-4xl font-bold leading-tight'>Bring everyone together to build better products.</h1>
            <p className='text-dark-grayish-blue font-normal leading-7'>
              Manage makes it simple for software teams to plan day-to-day
              tasks while keeping the larger team goals in view.
            </p>
            <a className='text-very-light-gray font-medium text-xs mt-6 bg-bright-red px-8 py-3 rounded-full cursor-pointer' href="">Get Started</a>
          </div>

          <div className='flex flex-col items-center gap-4'>
            <h2 className='text-3xl font-bold leading-normal'>What’s different about Manage?</h2>
            <p className='text-dark-grayish-blue text-sm leading-7'>
              Manage provides all the functionality your team needs, without
              the complexity. Our software is tailor-made for modern digital
              product teams.
            </p>
          </div>
        </article>

        <div className='my-12 text-sm flex flex-col gap-10'>
          <div className='ml-4'>
            <h3 className='font-bold flex gap-4 items-center bg-very-pale-red relative z-10'>
              <span className='before:content-[""] before:z-[-1] before:absolute before:top-0 before:left-[-2rem] before:w-12 before:h-full before:bg-white relative text-very-light-gray bg-bright-red px-6 py-2 rounded-full'>01</span>
              Track company-wide progress
            </h3>
            <p className='text-dark-grayish-blue text-sm leading-7 mt-3'>
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
          <div className='ml-4'>
            <h3 className='font-bold flex gap-4 items-center bg-very-pale-red relative z-10'>
              <span className='before:content-[""] before:z-[-1] before:absolute before:top-0 before:left-[-2rem] before:w-12 before:h-full before:bg-white relative text-very-light-gray bg-bright-red px-6 py-2 rounded-full'>02</span>
              Advanced built-in reports
            </h3>
            <p className='text-dark-grayish-blue text-sm leading-7 mt-3'>
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
          <div className='ml-4'>
            <h3 className='font-bold flex gap-4 items-center bg-very-pale-red relative z-10'>
              <span className='before:content-[""] before:z-[-1] before:absolute before:top-0 before:left-[-2rem] before:w-12 before:h-full before:bg-white relative text-very-light-gray bg-bright-red px-6 py-2 rounded-full'>03</span>
              Everything you need in one place
            </h3>
            <p className='text-dark-grayish-blue text-sm leading-7 mt-3'>
              Stop jumping from one service to another to communicate, store files,
              track tasks and share documents. Manage offers an all-in-one team
              productivity solution.
            </p>
          </div>
        </div>
      </main>

      <article className='flex flex-col gap-12 py-8'>
        <h3 className='font-bold text-3xl text-center'>What they’ve said</h3>
        {/* <div className='relative scrollWrapper overflow-scroll w-full snap-x snap-mandatory'>
          <div className='carousel flex gap-6 text-center'>

            <div id='1' className='relative px-8 pb-10 pt-16 mt-10 w-full bg-very-light-gray flex flex-col gap-4 items-center snap-center'>
              <img className='absolute top-[-36px]' width={72} src={anishaAvatar} alt="Anisha's Avatar Image" />
              <h3 className='font-bold'>Anisha Li</h3>
              <p className='text-dark-grayish-blue text-sm leading-7 min-w-[30ch]'>
                “Manage has supercharged our team’s workflow. The ability to maintain
                visibility on larger milestones at all times keeps everyone motivated.”
              </p>
            </div>

            <div id='2' className='relative px-8 pb-10 pt-16 mt-10 w-full bg-very-light-gray flex flex-col gap-4 items-center snap-center'>
              <img className='absolute top-[-36px]' width={72} src={aliAvatar} alt="Ali's Avatar Image" />
              <h3 className='font-bold'>Ali Bravo</h3>
              <p className='text-dark-grayish-blue text-sm leading-7 min-w-[30ch]'>
                “We have been able to cancel so many other subscriptions since using
                Manage. There is no more cross-channel confusion and everyone is much
                more focused.”
              </p>
            </div>

            <div id='3' className='relative px-8 pb-10 pt-16 mt-10 w-full bg-very-light-gray flex flex-col gap-4 items-center snap-center'>
              <img className='absolute top-[-36px]' width={72} src={richardAvatar} alt="Richard's Avatar Image" />
              <h3 className='font-bold'>Richard Watts</h3>
              <p className='text-dark-grayish-blue text-sm leading-7 min-w-[30ch]'>
                “Manage allows us to provide structure and process. It keeps us organized
                and focused. I can’t stop recommending them to everyone I talk to!”
              </p>
            </div>

            <div id='4' className='relative px-8 pb-10 pt-16 mt-10 w-full bg-very-light-gray flex flex-col gap-4 items-center snap-center'>
              <img className='absolute top-[-36px]' width={72} src={shanaiAvatar} alt="Shanai's Avatar Image" />
              <h3 className='font-bold'>Shanai Gough</h3>
              <p className='text-dark-grayish-blue text-sm leading-7 min-w-[30ch]'>
                “Their software allows us to track, manage and collaborate on our projects
                from anywhere. It keeps the whole team in-sync without being intrusive.”
              </p>
            </div>

          </div>

        </div> */}
        <SliderCarousel/>

        <a className='text-very-light-gray self-center mt-6 sm:mt-0 font-medium text-xs bg-bright-red px-8 py-3 rounded-full cursor-pointer' href="">Get Started</a>
      </article>
      
      {/* <div>
        <h3 className='font-bold text-3xl text-center'>What they’ve said</h3>
        <SliderCarousel/>
        <a className='text-very-light-gray font-medium text-xs bg-bright-red px-8 py-3 rounded-full cursor-pointer' href="">Get Started</a>
      </div> */}
      

      <article className='flex flex-col gap-8 items-center content-center px-8 py-20 bg-[url(./assets/bg-simplify-section-mobile.svg)] bg-left bg-no-repeat bg-auto bg-bright-red'>
        <h1 className='text-very-light-gray text-4xl text-center font-bold leading-tight'>Simplify how your team works today.</h1>
        <a className='text-bright-red font-bold text-xs bg-very-light-gray px-8 py-3 rounded-full cursor-pointer' href="">Get Started</a>
      </article>

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

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/Saga-sanga" target="_blank">Reckson Khiangte</a>.
      </div>
    </div>
  )
}

export default App

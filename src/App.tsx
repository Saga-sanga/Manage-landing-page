import { useState } from 'react';
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

import anishaAvatar from './assets/avatar-anisha.png';
import aliAvatar from './assets/avatar-ali.png';
import richardAvatar from './assets/avatar-richard.png';
import shanaiAvatar from './assets/avatar-shanai.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-dark-blue">
      <div className='bg-[url(./assets/bg-tablet-pattern.svg)] bg-no-repeat bg-cover'>
        <nav className='flex justify-between'>
          <div>
            <img src={logo} alt="Manage Logo" />
          </div>
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

      <section >
        <article className='flex flex-col items-center text-center bg-[url(./assets/bg-tablet-pattern.svg)] bg-no-repeat bg-cover'>
          <div>
            <h1 className='text-4xl font-bold leading-tight'>Bring everyone together to build better products.</h1>
            <p className='text-dark-grayish-blue font-normal'>
              Manage makes it simple for software teams to plan day-to-day
              tasks while keeping the larger team goals in view.
            </p>
            <a className='text-very-light-gray font-medium text-xs bg-bright-red px-8 py-3 rounded-full cursor-pointer' href="">Get Started</a>
          </div>

          <div>
            <h2 className='text-3xl font-bold leading-tight'>What’s different about Manage?</h2>
            <p className='text-dark-grayish-blue text-sm'>
              Manage provides all the functionality your team needs, without
              the complexity. Our software is tailor-made for modern digital
              product teams.
            </p>
          </div>
        </article>

        <div>
          <h3 className='font-bold'>
            <span>01</span>
            Track company-wide progress
          </h3>
          <p className='text-dark-grayish-blue text-sm'>
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </p>
          <h3 className='font-bold'>
            <span>02</span>
            Advanced built-in reports
          </h3>
          <p className='text-dark-grayish-blue text-sm'>
            Set internal delivery estimates and track progress toward company
            goals. Our customisable dashboard helps you build out the reports
            you need to keep key stakeholders informed.
          </p>
          <h3 className='font-bold'>
            <span>03</span>
            Everything you need in one place
          </h3>
          <p className='text-dark-grayish-blue text-sm'>
            Stop jumping from one service to another to communicate, store files,
            track tasks and share documents. Manage offers an all-in-one team
            productivity solution.
          </p>
        </div>
      </section>

      <div className='flex flex-col items-center'>
        <h3 className='font-bold text-3xl text-center'>What they’ve said</h3>
        <div className='flex overflow-hidden text-center'>
          <div className='relative bg-very-light-gray flex flex-col items-center'>
            <img className='absolute' width={64} src={anishaAvatar} alt="Anisha's Avatar Image" />
            <h3 className='font-bold'>Anisha Li</h3>
            <p className='text-dark-grayish-blue text-sm'>
              “Manage has supercharged our team’s workflow. The ability to maintain
              visibility on larger milestones at all times keeps everyone motivated.”
            </p>
          </div>
          <div className='relative bg-very-light-gray flex flex-col items-center'>
            <img className='absolute' width={64} src={aliAvatar} alt="Ali's Avatar Image" />
            <h3 className='font-bold'>Ali Bravo</h3>
            <p className='text-dark-grayish-blue text-sm'>
              “We have been able to cancel so many other subscriptions since using
              Manage. There is no more cross-channel confusion and everyone is much
              more focused.”
            </p>
          </div>
          <div className='relative bg-very-light-gray flex flex-col items-center'>
            <img className='absolute' width={64} src={richardAvatar} alt="Richard's Avatar Image" />
            <h3 className='font-bold'>Richard Watts</h3>
            <p className='text-dark-grayish-blue text-sm'>
              “Manage allows us to provide structure and process. It keeps us organized
              and focused. I can’t stop recommending them to everyone I talk to!”
            </p>
          </div>
          <div className='relative bg-very-light-gray flex flex-col items-center'>
            <img className='absolute' width={64} src={shanaiAvatar} alt="Shanai's Avatar Image" />
            <h3 className='font-bold'>Shanai Gough</h3>
            <p className='text-dark-grayish-blue text-sm'>
              “Their software allows us to track, manage and collaborate on our projects
              from anywhere. It keeps the whole team in-sync without being intrusive.”
            </p>
          </div>
        </div>
        <a className='text-very-light-gray font-medium text-xs bg-bright-red px-8 py-3 rounded-full cursor-pointer' href="">Get Started</a>
      </div>

      <div className='flex flex-col gap-8 items-center content-center px-8 py-20 bg-[url(./assets/bg-simplify-section-mobile.svg)] bg-left bg-no-repeat bg-auto bg-bright-red'>
        <h1 className='text-very-light-gray text-4xl text-center font-bold leading-tight'>Simplify how your team works today.</h1>
        <a className='text-bright-red font-bold text-xs bg-very-light-gray px-8 py-3 rounded-full cursor-pointer' href="">Get Started</a>
      </div>

      <footer className='bg-very-dark-blue text-very-light-gray'>
        <div><input type="text" placeholder='Updates in your inbox…'/> <button>Go</button></div>
        <div>
          <ul>
            <li>Home</li>
            <li>Pricing</li>
            <li>Products</li>
            <li>About Us</li> 
          </ul>
          <ul>
            <li>Careers</li>
            <li>Community</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <div className='flex justify-between'>
            <img width={32} src={facebookLogo} alt="facebook logo" />
            <img width={32} src={youtubeLogo} alt="youtube logo" />
            <img width={32} src={twitterLogo} alt="twitter logo" />
            <img width={32} src={pinterestLogo} alt="pinterest logo" />
            <img width={32} src={instagramLogo} alt="instagram logo" />
          </div>
          <div><img className='fill-very-light-gray' src={logoDark} alt="Manage Logo" /></div>
        </div>
        <div>Copyright 2020. All Rights Reserved</div>
      </footer>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/Saga-sanga" target="_blank">Reckson Khiangte</a>.
      </div>
    </div>
  )
}

export default App

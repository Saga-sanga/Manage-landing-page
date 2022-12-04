import { useState } from 'react';
import logo from './assets/logo.svg';
import logoDark from './assets/logo-dark.svg';
import hamburger from './assets/icon-hamburger.svg';
import close from './assets/icon-close.svg';
import bgDesktop from './assets/bg-simplify-section-desktop.svg';
import bgMobile from './assets/bg-simplify-section-mobile.svg';
import bgTabletPattern from './assets/bg-tablet-pattern.svg';
import illustrationIntro from './assets/illustration-intro.svg';
import facebookLogo from './assets/icon-facebook.svg';
import youtubeLogo from './assets/icon-youtube.svg';
import twitterLogo from './assets/icon-twitter.svg';
import pinterestLogo from './assets/icon-pinterest.svg';
import instagramLogo from './assets/icon-instagram.svg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <div className=''>
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
      </div>

      <div >
        <div className='bg-[url(./assets/bg-tablet-pattern.svg)] bg-no-repeat bg-cover'>
          <img className='w-full' src={illustrationIntro} alt="charts and percentages image" />
          <h1 className='text-4xl font-bold leading-tight text-center'>Bring everyone together to build better products.</h1>
          <p>
            Manage makes it simple for software teams to plan day-to-day
            tasks while keeping the larger team goals in view.
          </p>
          <a href="">Get Started</a>
        </div>
        <div>
          <h2>What’s different about Manage?</h2>
          <p>
            Manage provides all the functionality your team needs, without
            the complexity. Our software is tailor-made for modern digital
            product teams.
          </p>
          <h3>
            <span>01</span>
            Track company-wide progress
          </h3>
          <p>
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </p>
          <h3>
            <span>02</span>
            Advanced built-in reports
          </h3>
          <p>
            Set internal delivery estimates and track progress toward company
            goals. Our customisable dashboard helps you build out the reports
            you need to keep key stakeholders informed.
          </p>
          <h3>
            <span>03</span>
            Everything you need in one place
          </h3>
          <p>
            Stop jumping from one service to another to communicate, store files,
            track tasks and share documents. Manage offers an all-in-one team
            productivity solution.
          </p>
        </div>
      </div>

      <div>
        <h3>What they’ve said</h3>
        <div>
          Anisha Li
          “Manage has supercharged our team’s workflow. The ability to maintain
          visibility on larger milestones at all times keeps everyone motivated.”
        </div>
        <div>
          Ali Bravo
          “We have been able to cancel so many other subscriptions since using
          Manage. There is no more cross-channel confusion and everyone is much
          more focused.”
        </div>
        <div>
          Richard Watts
          “Manage allows us to provide structure and process. It keeps us organized
          and focused. I can’t stop recommending them to everyone I talk to!”
        </div>
        <div>
          Shanai Gough
          “Their software allows us to track, manage and collaborate on our projects
          from anywhere. It keeps the whole team in-sync without being intrusive.”
          Get Started
        </div>
      </div>

      <div className='bg-[url(./assets/bg-simplify-section-mobile.svg)] bg-no-repeat bg-contain bg-bright-red'>
        <h1>Simplify how your team works today.</h1>
        <a href="">Get Started</a>
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

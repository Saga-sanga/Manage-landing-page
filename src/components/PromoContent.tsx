import illustrationIntro from '../assets/illustration-intro.svg';
import SliderCarousel from '../components/SliderCarousel';

export default function PromoContent() {
  return (
    <main className='bg-[url(./assets/bg-tablet-pattern.svg)] bg-no-repeat bg-[length:85%] bg-[430%_25%] md:mb-32'>
      <section className='flex flex-col items-center pt-28'>
        <article className='flex flex-col items-center text-center gap-24 md:my-20 max-w-6xl'>
          <div className='flex flex-col items-center gap-4 md:flex-row-reverse'>
            <img className='w-full px-4 flex-1 md:px-0' src={illustrationIntro} alt="charts and percentages image" />

            <div className='flex flex-col flex-1 items-center gap-2 px-7 md:px-0 md:items-start md:text-left'>
              <h1 className='text-4xl md:text-5xl font-bold leading-tight'>Bring everyone together to build better products.</h1>
              <p className='text-dark-grayish-blue font-normal leading-7 md:max-w-[32ch]'>
                Manage makes it simple for software teams to plan day-to-day
                tasks while keeping the larger team goals in view.
              </p>
              <a className='text-very-light-gray font-medium text-xs mt-6 bg-bright-red px-8 py-3 rounded-full cursor-pointer' href="">Get Started</a>
            </div>
          </div>

          <div className='flex flex-col gap-4 md:flex-row'>
            <div className='flex flex-col flex-1 items-center gap-4 px-7 md:px-0 md:items-start md:text-left'>
              <h2 className='text-3xl md:text-4xl md:max-w-[17ch] font-bold leading-normal'>What’s different about Manage?</h2>
              <p className='text-dark-grayish-blue text-sm leading-7 md:text-base md:max-w-[32ch]'>
                Manage provides all the functionality your team needs, without
                the complexity. Our software is tailor-made for modern digital
                product teams.
              </p>
            </div>

            <div className='my-12 text-sm md:text-base flex flex-col flex-1 gap-10 text-left md:my-0'>
              <div className='ml-4'>
                <h3 className='font-bold flex gap-4 md:gap-8 items-center bg-very-pale-red md:bg-transparent relative z-10'>
                  <span className='before:content-[""] before:z-[-1] before:absolute before:top-0 before:left-[-2rem] before:w-12 before:h-full before:bg-white relative text-very-light-gray bg-bright-red px-6 py-2 rounded-full'>01</span>
                  Track company-wide progress
                </h3>
                <p className='text-dark-grayish-blue text-sm leading-7 mt-3 md:text-base md:ml-24'>
                  See how your day-to-day tasks fit into the wider vision. Go from
                  tracking progress at the milestone level all the way done to the
                  smallest of details. Never lose sight of the bigger picture again.
                </p>
              </div>
              <div className='ml-4'>
                <h3 className='font-bold flex gap-4 md:gap-8 items-center bg-very-pale-red md:bg-transparent relative z-10'>
                  <span className='before:content-[""] before:z-[-1] before:absolute before:top-0 before:left-[-2rem] before:w-12 before:h-full before:bg-white relative text-very-light-gray bg-bright-red px-6 py-2 rounded-full'>02</span>
                  Advanced built-in reports
                </h3>
                <p className='text-dark-grayish-blue text-sm leading-7 mt-3 md:text-base md:ml-24'>
                  Set internal delivery estimates and track progress toward company
                  goals. Our customisable dashboard helps you build out the reports
                  you need to keep key stakeholders informed.
                </p>
              </div>
              <div className='ml-4'>
                <h3 className='font-bold flex gap-4 md:gap-8 items-center bg-very-pale-red md:bg-transparent relative z-10'>
                  <span className='before:content-[""] before:z-[-1] before:absolute before:top-0 before:left-[-2rem] before:w-12 before:h-full before:bg-white relative text-very-light-gray bg-bright-red px-6 py-2 rounded-full'>03</span>
                  Everything you need in one place
                </h3>
                <p className='text-dark-grayish-blue text-sm leading-7 mt-3 md:text-base md:ml-24'>
                  Stop jumping from one service to another to communicate, store files,
                  track tasks and share documents. Manage offers an all-in-one team
                  productivity solution.
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <article className='flex flex-col gap-12 py-8 md:mt-8'>
        <h3 className='font-bold text-3xl text-center'>What they’ve said</h3>
        <SliderCarousel/>
        <a className='text-very-light-gray self-center mt-6 sm:mt-0 font-medium text-xs bg-bright-red px-8 py-3 rounded-full cursor-pointer' href="">Get Started</a>
      </article>  
    </main>
  )
}
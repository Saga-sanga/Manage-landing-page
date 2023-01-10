import illustrationIntro from '../assets/illustration-intro.svg';

export default function PromoContent() {
  return (
    <main className='pt-28'>
        <article className='flex flex-col items-center text-center bg-[url(./assets/bg-tablet-pattern.svg)] bg-no-repeat bg-[length:85%] bg-[430%_25%] px-7 gap-24'>
          <img className='w-full' src={illustrationIntro} alt="charts and percentages image" />

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
  )
}
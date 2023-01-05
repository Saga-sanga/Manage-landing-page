import Slider from 'react-slick';
import anishaAvatar from '../assets/avatar-anisha.png';
import aliAvatar from '../assets/avatar-ali.png';
import richardAvatar from '../assets/avatar-richard.png';
import shanaiAvatar from '../assets/avatar-shanai.png';

export default function SliderCarousel() {
  const settings = {
    // className: "slider variable-width",
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    adaptiveHeight: true,
    variableWidth: true,
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     dots: false
      //   }
      // },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          variableWidth: false,
          dots: true
        }
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //     dots: true,
      //     variableWidth: false
      //   }
      // }
    ]
  };

  return (
    <Slider {...settings}>
      <div>
        <div id='1' className='relative px-6 pb-10 pt-16 mt-10 sm:w-[30rem] mx-4 bg-very-light-gray flex flex-col gap-4 items-center snap-center'>
          <img className='absolute top-[-36px]' width={72} src={anishaAvatar} alt="Anisha's Avatar Image" />
          <h3 className='font-bold'>Anisha Li</h3>
          <p className='text-dark-grayish-blue text-sm text-center leading-7'>
            “Manage has supercharged our team’s workflow. The ability to maintain
            visibility on larger milestones at all times keeps everyone motivated.”
          </p>
        </div>
      </div>

      <div>
        <div id='2' className='relative px-6 pb-10 pt-16 mt-10 sm:w-[30rem] mx-4 bg-very-light-gray flex flex-col gap-4 items-center snap-center'>
          <img className='absolute top-[-36px]' width={72} src={aliAvatar} alt="Ali's Avatar Image" />
          <h3 className='font-bold'>Ali Bravo</h3>
          <p className='text-dark-grayish-blue text-sm text-center leading-7'>
            “We have been able to cancel so many other subscriptions since using
            Manage. There is no more cross-channel confusion and everyone is much
            more focused.”
          </p>
        </div>
      </div>

      <div>
        <div id='3' className='relative px-6 pb-10 pt-16 mt-10 sm:w-[30rem] mx-4 bg-very-light-gray flex flex-col gap-4 items-center snap-center'>
          <img className='absolute top-[-36px]' width={72} src={richardAvatar} alt="Richard's Avatar Image" />
          <h3 className='font-bold'>Richard Watts</h3>
          <p className='text-dark-grayish-blue text-sm text-center leading-7'>
            “Manage allows us to provide structure and process. It keeps us organized
            and focused. I can’t stop recommending them to everyone I talk to!”
          </p>
        </div>
      </div>

      <div>
        <div id='4' className='relative px-6 pb-10 pt-16 mt-10 sm:w-[30rem] mx-4 bg-very-light-gray flex flex-col gap-4 items-center snap-center'>
          <img className='absolute top-[-36px]' width={72} src={shanaiAvatar} alt="Shanai's Avatar Image" />
          <h3 className='font-bold'>Shanai Gough</h3>
          <p className='text-dark-grayish-blue text-sm text-center leading-7'>
            “Their software allows us to track, manage and collaborate on our projects
            from anywhere. It keeps the whole team in-sync without being intrusive.”
          </p>
        </div>
      </div>
    </Slider>
  );
}
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { BsArrowRight } from 'react-icons/bs';

const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Netflix',
          path: '/N.jpg',
          link: 'https://netflix-jfs.netlify.app/auth',
        },
        {
          title: 'Costs',
          path: '/C.png',
        },
        {
          title: 'Pokemon',
          path: '/P.jpg',
          link: 'https://pokemon-jfs.netlify.app/pokemon/1',
        },
        {
          title: 'RickAndMorty',
          path: '/R.jpg',
          link: 'https://rick-and-morty-api-sigma-nine.vercel.app/',
        },
      ],
    },
    {
      images: [
        {
          title: 'Spotify',
          path: '/Spotify.png',
          link: 'https://spotify-project-seven.vercel.app/'
        },
      ],
    },
  ],
};


const WorkSlider = () => {
  const handleImageClick = (link) => {
    window.location.href = link;
  };

  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,

      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
      >
        {workSlides.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
             <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => { 
                return (
                // eslint-disable-next-line react/jsx-key
                <div className='relative rounded-lg overflow-hidden 
                  flex items-center justify-center group'>
                  <div className='flex items-center justify-center relative 
                    overflow-hidden group'
                  key={index}
                  onClick={() => handleImageClick(image.link)}
                  >
                    {/* image */}
                    <Image src={image.path} width={500} height={300} alt='' />
                    <div className='absolute inset-0 bg-gradient-to-l from-transparent 
                     via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all 
                      duration-700'></div>
                      <div className='absolute bottom-0 translate-y-full 
                      group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          <div className='delay-100'>
                            Ver
                          </div>
                          <div className='translate-y-[500%] group-hover:translate-y-0 
                          transition-all duration-300 delay-150'>
                            Deploy
                          </div>
                          <div className='translate-y-[500%] group-hover:translate-y-0 
                            transition-y-0 transition-all duration-300 delay-200'>
                          <BsArrowRight />
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                );
              })}
             </div>
            </SwiperSlide>
          );
        })}  
    </Swiper>
  )
};

export default WorkSlider;

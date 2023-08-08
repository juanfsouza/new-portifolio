import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';


const serviceData = [
  {
    icon: <RxCrop />,
    title: 'NextJs',
    description: 'Ser programador mais experiente em NextJs onde posso ter domínio do framework.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design UI/UX',
    description: 'Como eu gosto de design passo horas criando artes e sempre quero torna melhor.',
  },
  {
    icon: <RxDesktop />,
    title: 'Dev Senior',
    description: 'Ser dev não e fácil, passar dia digitando e algo que gosto sempre esforço para ser melhor.',
  },
  {
    icon: <RxReader />,
    title: 'Code Clean',
    description: 'Algo que sempre presto ateção nos dev senior ser um porgramador mais organizado.',
  },
]

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
      >
        {serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 
                flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer 
                hover:bg-[rgba(89,65,169,0,15)] transition-all duration-300'
              >
                  {/* icon */}
                <div className='text-4xl text-accent mb-4'>{item.icon}</div>
                  {/* title e desc */}
                <div className='mb-8'>
                  <div className='mb-2 text-lg'>{item.title}</div>
                  <p className='max-w-[350px] leading-normal'>
                    {item.description}
                  </p>
                </div>
                  {/* arrow */} 
                <div className='text-3xl'>
                  <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent 
                    transition-all duration-300' />
                </div>
            </div>
            </SwiperSlide>
          );
        })}  
    </Swiper>
  )
};

export default ServiceSlider;

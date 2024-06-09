'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperNavigation from './swiper/SwiperNavigaton';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCards,
  EffectFade,
} from 'swiper/modules';
import { useState, useRef } from 'react';

import Testimonial from './Testimonial';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

type TestimonialsData = {
  id: number;
  text: string;
  author: string;
  cite: string;
};

type dataProps = {
  data: TestimonialsData[];
};

export default function Testimonials(props: dataProps) {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <>
      <section
        className={` text-white flex items-center py-20 lg:py-40 transition-all  ${
          activeIndex === props.data.length
            ? 'bg-black text-center '
            : 'bg-black'
        }`}
      >
        <div className='container'>
          <div
            className={`w-full flex justify-end mb-4 ${
              activeIndex === props.data.length ? 'opacity-0' : ''
            }`}
          >
            <svg
              width='89'
              height='76'
              viewBox='0 0 89 76'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M20.4 75.6C15.4 75.6 10.9 73.9 6.9 70.5C2.9 66.9 0.900001 62.7 0.900001 57.9C0.900001 55.7 1.1 53.8 1.5 52.2C1.9 50.4 2.5 48.5 3.3 46.5L21 0.599987H37.5L23.4 37.2C28 38 31.8 40.2 34.8 43.8C38 47.4 39.6 51.6 39.6 56.4C39.6 61.8 37.7 66.4 33.9 70.2C30.1 73.8 25.6 75.6 20.4 75.6ZM69.3 75.6C64.3 75.6 59.8 73.9 55.8 70.5C51.8 66.9 49.8 62.7 49.8 57.9C49.8 55.7 50 53.8 50.4 52.2C50.8 50.4 51.4 48.5 52.2 46.5L69.9 0.599987H86.4L72.3 37.2C76.9 38 80.7 40.2 83.7 43.8C86.9 47.4 88.5 51.6 88.5 56.4C88.5 61.8 86.6 66.4 82.8 70.2C79 73.8 74.5 75.6 69.3 75.6Z'
                fill='white'
              />
            </svg>
          </div>
          <Swiper
            className='swiper-testimonials '
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex + 1);
            }}
          >
            {props.data.map((testimonial: TestimonialsData) => (
              <SwiperSlide key={testimonial.id}>
                <Testimonial
                  key={testimonial.id}
                  text={testimonial.text}
                  cite={testimonial.cite}
                />
              </SwiperSlide>
            ))}
            <SwiperNavigation
              key={activeIndex}
              activeIndex={activeIndex}
              author={props.data[activeIndex - 1].author}
              length={props.data.length}
            />
          </Swiper>
        </div>
      </section>
    </>
  );
}

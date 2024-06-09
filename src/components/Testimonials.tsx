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
        <div className='container '>
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

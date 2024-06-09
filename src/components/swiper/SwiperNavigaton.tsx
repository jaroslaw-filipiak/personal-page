import { useSwiper } from 'swiper/react';

type swiperNavigationProps = {
  activeIndex: number;
  author: string;
  length: number;
};

export default function SwiperNavigation(props: swiperNavigationProps) {
  const swiper = useSwiper();
  return (
    <div
      className='flex items-center justify-start gap-5'
      onClick={() => swiper.slideNext()}
    >
      <div className='flex items-center gap-4'>
        <div className='w-10 bg-white h-[1px]'></div>
        {props.activeIndex} / {props.length}{' '}
        <div className='w-10 bg-white h-[1px]'></div>
      </div>
      {props.author}
    </div>
  );
}

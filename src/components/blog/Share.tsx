'use client';

import { useParams } from 'next/navigation';

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share';

const formattedText = (text: string) => {
  const title = text.split('-').join(' ');
  return title[0].toUpperCase() + title.slice(1);
};

export default function Share() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const params = useParams();

  return (
    <div className='share pt-10 flex items-center gap-6'>
      <div className='p-0 m-0 text-sm'>Podziel się tym wpisem:</div>
      <div className='flex items-center justify-start gap-3'>
        <FacebookShareButton url={`${BASE_URL}/blog/${params.slug}`}>
          <FacebookIcon size={46} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={`${BASE_URL}/blog/${params.slug}`}
          title={`${formattedText(params.slug)}`}
        >
          <TwitterIcon size={46} round />
        </TwitterShareButton>

        <LinkedinShareButton url={`${BASE_URL}/blog/${params.slug}`}>
          <LinkedinIcon size={46} round />
        </LinkedinShareButton>
      </div>
    </div>
  );
}

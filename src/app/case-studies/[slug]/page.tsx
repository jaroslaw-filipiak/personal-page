'use client';

import Nav from '@/components/Nav';
import Link from 'next/link';
import Cta from '@/components/Cta';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Nav />
      <section id='start' className='pt-72 pb-72 bg-white h-screen'>
        <div className='flex items-center justify-center'>
          <div className='container flex flex-col items-start'>
            <div>
              <h1 className='text-5xl text-balance pb-24 '>
                Single case study
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-white pt-20 pb-20'>
        <div className='container '>
          <h2 className='text-3xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            inventore dolor assumenda, ipsa, deserunt voluptatum quidem
            laudantium ducimus omnis optio unde veritatis?
          </h2>
          <p className='text-lg mt-20 mb-20'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nisi
            dolorem ab totam quod nihil, tempore repellendus, atque fugiat sed
            laboriosam impedit voluptate maiores voluptatum eum ut dolores rem
            quaerat facilis quos laborum sunt dolore? Quasi, sunt esse,
            accusamus ducimus nihil fugiat delectus, asperiores distinctio magni
            obcaecati inventore illum minus magnam iusto doloremque libero nemo
            impedit non. Veniam, hic tempore. Eum commodi perferendis laborum
            illo sed, itaque vitae cum impedit culpa sapiente officiis ab
            officia voluptas vel maiores! Temporibus adipisci voluptatem vitae?
            Harum sed vitae inventore, accusamus modi perspiciatis ab
            praesentium eos libero ipsam consequuntur molestias tenetur eum
            veniam odio.
          </p>
          <p className='text-lg mb-10'>Zakres pracy:</p>
          <div className='flex w-full lg:w-10/12 gap-10 text-md mb-20'>
            <div>
              <h2>
                Znamy narzędzia branżowe, jeśli chodzi o tworzenie dedykowanych
                aplikacji (mobilnych i webowych). Oferujemy znacznie więcej niż
                tylko umiejętności.
              </h2>
            </div>
            <div>
              Znamy narzędzia branżowe, jeśli chodzi o tworzenie dedykowanych
              aplikacji (mobilnych i webowych). Oferujemy znacznie więcej niż
              tylko umiejętności.
            </div>
          </div>
          <Image
            src='/img/img.jpg'
            width={1422}
            height={822}
            alt='image'
            className='mb-20'
          ></Image>
          <Image
            src='/img/img.jpg'
            width={1422}
            height={822}
            alt='image'
          ></Image>
        </div>
      </section>

      <section className='bg-white pt-20 pb-20'>
        <div className='container'>
          <h2 className='text-3xl'>Podsumowanie</h2>
          <p className='text-lg mt-10 mb-32'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nisi
            dolorem ab totam quod nihil, tempore repellendus, atque fugiat sed
            laboriosam impedit voluptate maiores voluptatum eum ut dolores rem
            quaerat facilis quos laborum sunt dolore? Quasi, sunt esse,
            accusamus ducimus nihil fugiat delectus, asperiores distinctio magni
            obcaecati inventore illum minus magnam iusto doloremque libero nemo
            impedit non. Veniam, hic tempore. Eum commodi perferendis laborum
            illo sed, itaque vitae cum impedit culpa sapiente officiis ab
            officia voluptas vel maiores! Temporibus adipisci voluptatem vitae?
            Harum sed vitae inventore, accusamus modi perspiciatis ab
            praesentium eos libero ipsam consequuntur molestias tenetur eum
            veniam odio.
          </p>
        </div>
      </section>

      <section className='bg-lightGray pt-20 pb-20'>
        <div className='container flex items-center justify-center'>
          <div className='prev'>prev</div>
          <div className='title flex-1 text-center text-lg'>
            Następny projekt: <strong>Lorem, ipsum dolor.</strong>
          </div>
          <div className='next'>next</div>
        </div>
      </section>
    </>
  );
}

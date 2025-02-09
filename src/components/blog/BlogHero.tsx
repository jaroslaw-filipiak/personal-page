'use client';

import { motion } from 'framer-motion';
export default function BlogHero() {
  return (
    <section
      id='start'
      className='pt-32 lg:pt-40 2xl:pt-72 pb-40 lg:pb-40 2xl:pb-72  '
    >
      <div className='flex items-center justify-center'>
        <div>
          <h1 className='text-5xl text-balance pb-10'>
            Blog o tworzeniu nowoczesnych stron internetowych WordPress,
            Node.js, Vue.js, Next.js
          </h1>
          <h2 className='text-xl max-w-6xl'>
            Porady i nowinki dla osób zainteresowanych Tworzeniem stron
            internetowych. Automatyzacje procesów firmowych, ciekawe narzędzia a
            także najlepsze praktyki SEO i UX. Optymalizacja stron pod kątem
            szybkości ładowania i bezpieczeństwa oraz o wiele więcej.
          </h2>
        </div>
      </div>
    </section>
  );
}

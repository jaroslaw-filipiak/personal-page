import Nav from '@/components/Nav';
import BlogHero from '@/components/blog/BlogHero';
import BlogPosts from '@/components/blog/BlogPosts';
import { Blog, WithContext, Person } from 'schema-dts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Blog o tworzeniu nowoczesnych stron internetowych WordPress, Node.js, Vue.js, Next.js - j-filipiak.pl',
  description:
    'Tworzenie stron internetowych WordPress, Vue.js, Automatyzacja procesw firmowych, praktyki SEO oraz o wiele więcej',
  keywords: [
    'projektowanie stron www w Figmie',
    'projektowanie stron internetowych',
    'auktorskie kodowanie stron www , html, js, css, sass, webpack, vite.js, next.js, vue.js, wordpress, node.js, dedykowane oprogramowanie dla firm, aplikacje webowe spa, aplikacje webowe pwa, aplikacje webowe ssr, szybkie strony internetowe',
    'Webpack',
    'Next.js',
    'Node.js',
    'WordPress',
    'Google Lighthouse',
    'Dedykowane oprogramowanie dla firm',
    'Aplikacje webowe SPA',
    'Aplikacje webowe PWA',
    'Aplikacje webowe SSR',
    'Szybkie strony internetowe',
  ],
  generator: 'Next.js',
  openGraph: {
    type: 'website',
    url: 'https://j-filipiak.pl/blog',
    title:
      'Blog o tworzeniu nowoczesnych stron internetowych WordPress, Node.js, Vue.js, Next.js - j-filipiak.pl',
    description:
      'Tworzenie stron internetowych WordPress, Vue.js, Automatyzacja procesw firmowych, praktyki SEO oraz o wiele więcej',
    images: ['ogimage-contact.jpg'],
    // TODO: og images per page
  },
};

export default function blogPage() {
  const blogSchema: WithContext<Blog> = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog o tworzeniu nowoczesnych stron internetowych WordPress, Node.js, Vue.js, Next.js',
    url: 'https://j-filipiak.pl/blog',
    description:
      'Porady i nowinki dla osób zainteresowanych Tworzeniem stron internetowych. Automatyzacje procesów firmowych, ciekawe narzędzia a także najlepsze praktyki SEO i UX. Optymalizacja stron pod kątem szybkości ładowania i bezpieczeństwa oraz o wiele więcej.',
    author: {
      '@type': 'Person',
      name: 'Jarosław Filipiak',
      url: 'https://j-filipiak.pl/about-me',
      sameAs: [
        'https://www.facebook.com/jfilipiakpl',
        'https://www.linkedin.com/showcase/j-filipiak-pl',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Professional',
        telephone: '+48 663 568 828',
        email: 'info@j-filipiak.pl',
        areaServed: 'PL',
        availableLanguage: ['Polish'],
        url: 'https://j-filipiak.pl/kontakt',
      },
    },
  };

  return (
    <div className='blog'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(blogSchema),
          }}
        />
      </head>
      <Nav />
      <BlogHero />
      <BlogPosts />
    </div>
  );
}

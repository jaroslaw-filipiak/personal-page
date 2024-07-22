import Nav from '@/components/Nav';
import BlogHero from '@/components/blog/BlogHero';
import BlogPosts from '@/components/blog/BlogPosts';
import { Blog, WithContext } from 'schema-dts';

export default function blogPage() {
  const blogSchema: WithContext<Blog> = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog o tworzeniu nowoczesnych stron internetowych WordPress, Node.js, Vue.js, Next.js',
    url: 'https://j-filipiak.pl/blog',
    description:
      'Porady i nowinki dla osób zainteresowanych Tworzeniem stron internetowych. Automatyzacje procesów firmowych, ciekawe narzędzia a także najlepsze praktyki SEO i UX. Optymalizacja stron pod kątem szybkości ładowania i bezpieczeństwa oraz o wiele więcej.',
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

import Nav from '@/components/Nav';
import BlogHero from '@/components/blog/BlogHero';
import BlogPosts from '@/components/blog/BlogPosts';

export default function blogPage() {
  return (
    <>
      <Nav />
      <BlogHero />
      <BlogPosts />
    </>
  );
}

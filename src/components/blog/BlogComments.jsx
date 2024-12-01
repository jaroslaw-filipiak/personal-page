'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BlogComments(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);

    const data = {
      author_name: formData.get('name'),
      author_email: formData.get('email'),
      content: formData.get('comment'),
      author_url: formData.get('www'),
      date: new Date().toISOString(),
      post: props.postId,
    };

    try {
      const response = await fetch(
        `https://j-filipiak.pl/api/wp-json/wp/v2/comments?post={props.postId}&content=${data.content}&author_name=${data.author_name}&author_email=${data.author_email}&author_url=${data.author_url}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
            'Accept-Encoding': 'gzip, deflate, br',
            Connection: 'keep-alive',
          },
          body: JSON.stringify(data),
          credentials: 'include',
        }
      );

      console.log(response);

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Reset form
      e.currentTarget.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id='comments' className='w-full'>
      <div className=' pt-16'>
        <motion.div
          initial={{ opacity: 0, top: 30 }}
          whileInView={{ opacity: 1, top: 0 }}
          exit={{ opacity: 0 }}
          transition={{ type: 'spring', duration: 1 }}
          className='flex flex-col items-start'
        >
          <div className='w-full'>
            <h5 className='text-3xl'>Komentarze</h5>
            <h6 className='text-lg'>Dodaj komentarz</h6>
            {error && (
              <div className='text-red-500 text-sm'>To jest error: {error}</div>
            )}

            <form
              onSubmit={handleSubmit}
              className='flex w-full flex-col items-start justify-start gap-2 mt-10'
            >
              {/* komentarz */}
              <div className='w-full'>
                <label htmlFor='comment' className='block text-sm font-medium'>
                  Komentarz
                </label>
                <textarea
                  id='comment'
                  name='comment'
                  required
                  className='border border-gray pt-5 pb-5 pr-10 pl-10 w-full'
                  placeholder='Komentarz'
                  rows='8'
                />
              </div>
              {/* nazwa */}
              <div className='w-full'>
                <label htmlFor='name' className='block text-sm font-medium'>
                  Nazwa
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  className='border border-gray pt-5 pb-5 pr-10 pl-10 w-full'
                  placeholder='Nazwa'
                />
              </div>
              {/* email */}
              <div className='w-full'>
                <label htmlFor='email' className='block text-sm font-medium'>
                  E-mail
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  required
                  className='border border-gray pt-5 pb-5 pr-10 pl-10 w-full'
                  placeholder='E-mail'
                />
              </div>

              {/* www */}
              <div className='w-full'>
                <label htmlFor='name' className='block text-sm font-medium'>
                  www
                </label>
                <input
                  type='text'
                  id='www'
                  name='www'
                  required
                  className='border border-gray pt-5 pb-5 pr-10 pl-10 w-full'
                  placeholder='www'
                />
              </div>

              <button
                type='submit'
                disabled={loading}
                className='bg-dark hover:opacity-80 transition-all text-white block pt-5 pb-5 pr-10 pl-10  items-center justify-center text-center'
              >
                {loading ? 'Wysyłanie...' : 'Dodaj komentarz'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

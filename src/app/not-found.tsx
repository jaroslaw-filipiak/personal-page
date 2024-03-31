import Link from 'next/link';

export default function NotFound() {
  return (
    <section
      id='err404'
      className='pt-72 pb-72 flex items-center justify-start h-screen bg-white'
    >
      <div className='container'>
        <h1 className='text-5xl text-balance pb-24 text-left'>
          Upss... taka strona nie istnieje
        </h1>
        <div className='flex justify-end'>
          <Link
            href='/'
            className='underline underline-offset-[10px] text-right pt-32'
          >
            wróć na stronę główną
          </Link>
        </div>
      </div>
    </section>
  );
}

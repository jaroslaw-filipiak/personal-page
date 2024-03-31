import Nav from '@/components/Nav';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <Nav />
      <section
        id='kontakt'
        className='h-screen border flex items-center justify-center'
      >
        <div className='container'>
          <h1 className='text-5xl text-balance'>
            Czas na nowy projekt? Potrzebujesz stałego, konkretnego partnera do
            współpracy projektowej? napisz do mnie na&nbsp;
            <Link href='mailto: info@j-filipiak.pl'>info@j-filipiak.pl</Link>,
            zadzwoń <Link href='tel:663 568 828'>663 568 828</Link> lub
            umów&nbsp;
            <Link href='https://calendly.com/jaroslaw-filipiak'>
              rozmowę online klikając tutaj
            </Link>
          </h1>
        </div>
      </section>
    </>
  );
}

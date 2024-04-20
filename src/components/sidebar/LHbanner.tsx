import Image from 'next/image';

export default function LHbanner() {
  return (
    <div>
      <Image
        src='img/sidebar/lh-rabat.jpg'
        width={490}
        height={228}
        alt='Hosting Mango od lh.pl - Najlepszy start dla Ciebie i Twojej strony!'
      ></Image>
    </div>
  );
}

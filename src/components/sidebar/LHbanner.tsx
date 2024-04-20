import Image from 'next/image';

export default function LHbanner() {
  return (
    <div>
      <Image
        src='img/sidebar/lh-promo.jpg'
        width={410}
        height={190}
        alt='Hosting Mango od lh.pl - Najlepszy start dla Ciebie i Twojej strony!'
      ></Image>
    </div>
  );
}

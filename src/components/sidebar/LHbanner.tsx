import Image from 'next/image';

export default function LHbanner() {
  return (
    <div>
      <Image
        src='img/sidebar/hosting_mango_1080x1350.png'
        width={1080}
        height={1350}
        alt='Hosting Mango od lh.pl - Najlepszy start dla Ciebie i Twojej strony!'
      ></Image>
    </div>
  );
}

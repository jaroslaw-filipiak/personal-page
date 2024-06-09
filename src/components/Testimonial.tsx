type TestimonialsProps = {
  text: string;
  cite: string;
};

export default function Testimonial(props: TestimonialsProps) {
  return (
    <article
      key={props.text}
      className='mb-20 xl:mb-32 flex items-center justify-center'
    >
      <blockquote cite={props.cite}>
        <p className='text-3xl '>{props.text}</p>
      </blockquote>
    </article>
  );
}

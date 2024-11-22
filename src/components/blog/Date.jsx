export default function DateFormatter(props) {
  const date = new Date(props.dateString);
  const formattedDate = date.toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return <div>{formattedDate}</div>;
}

'use client';

export default function ddgro({ src, width, quality }) {
  return `https://j-filipiak.pl/${src}?w=${width}&q=${quality || 90}`;
}

'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Nav from '@/components/Nav';

export default function GsapPlayground() {
  const headerRef = useRef(null);
  const boxesRef = useRef<HTMLDivElement[]>([]);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    // Header animation
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
    });

    // Staggered boxes animation
    gsap.from(boxesRef.current, {
      scrollTrigger: {
        trigger: boxesRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        markers: true,
      },
      x: -100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
    });

    // Circle motion path
    gsap.to(circleRef.current, {
      duration: 3,
      repeat: -1,
      ease: 'none',
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: 100, y: -100 },
          { x: 200, y: 0 },
          { x: 100, y: 100 },
          { x: 0, y: 0 },
        ],
        curviness: 1.5,
      },
    });

    // Text reveal animation
    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
        markers: true,
      },
      y: 50,
      opacity: 0,
      duration: 1,
    });

  }, []);

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-white p-8">
        <h1 
          ref={headerRef}
          className="text-6xl font-bold mb-20 pt-32"
        >
          GSAP Playground
        </h1>

        {/* Staggered boxes */}
        <div className="flex gap-4 mb-32">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              ref={(el) => (boxesRef.current[index] = el!)}
              className="w-32 h-32 bg-blue-500 rounded-lg"
            />
          ))}
        </div>

        {/* Motion path animation */}
        <div className="relative h-[400px] mb-32 border border-gray-200 rounded-lg">
          <div
            ref={circleRef}
            className="absolute w-16 h-16 bg-green-500 rounded-full"
          />
        </div>

        {/* Text reveal */}
        <div 
          ref={textRef}
          className="max-w-2xl mx-auto text-xl leading-relaxed"
        >
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </>
  );
}

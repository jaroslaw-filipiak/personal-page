'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

export default function GsapTest() {
  const boxRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    // Basic animation with ScrollTrigger
    gsap.to(boxRef.current, {
      x: 500,
      duration: 2,
      scrollTrigger: {
        trigger: boxRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        markers: true,
      },
    });

    // Motion path animation
    gsap.to(circleRef.current, {
      duration: 5,
      repeat: -1,
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: 100, y: 100 },
          { x: 200, y: 0 },
          { x: 0, y: 0 },
        ],
        curviness: 1.5,
      },
    });
  }, []);

  return (
    <div className="min-h-[200vh] p-20">
      <h1 className="text-4xl mb-20">GSAP Test Page</h1>
      
      <div className="mb-40">
        <h2 className="text-2xl mb-10">ScrollTrigger Test</h2>
        <div
          ref={boxRef}
          className="w-32 h-32 bg-blue-500"
        />
      </div>

      <div>
        <h2 className="text-2xl mb-10">MotionPath Test</h2>
        <div className="relative h-[300px]">
          <div
            ref={circleRef}
            className="absolute w-16 h-16 rounded-full bg-green-500"
          />
        </div>
      </div>
    </div>
  );
}

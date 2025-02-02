'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

export default function Wp() {
  const iconRef = useRef(null);
  const triggerRef = useRef(null);
  const whiteRef = useRef(null);
  const yellowRef = useRef(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Register GSAP plugins once
    if (!gsap.registerPlugin) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    // Create the animation
    const createAnimation = () => {
      // Kill previous timeline if it exists
      if (timelineRef.current) {
        timelineRef.current.kill();
      }

      const tl = gsap.timeline();
      timelineRef.current = tl;

      // Store ScrollTrigger instances
      const triggers: ScrollTrigger[] = [];

      // Icon animation
      tl.to(iconRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1,
        rotate: '90deg',
        ease: 'power2.out',
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top 90%',
          end: 'bottom center',
          scrub: 1,
          toggleActions: 'play none none reverse',
          markers: false,
          onEnter: (self) => triggers.push(self),
        },
      });

      // White circle animation
      tl.to(whiteRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: whiteRef.current,
          start: 'top 90%',
          end: 'bottom center',
          scrub: 1,
          toggleActions: 'play none none reverse',
          markers: false,
          onEnter: (self) => triggers.push(self),
        },
      });

      // Yellow circle animation
      tl.to(yellowRef.current, {
        opacity: 1,
        scale: 0.4,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: yellowRef.current,
          start: 'top 90%',
          end: 'bottom center',
          scrub: 1,
          toggleActions: 'play none none reverse',
          markers: false,
          onEnter: (self) => triggers.push(self),
        },
      });

      // Store cleanup function
      return () => {
        // Kill timeline
        if (timelineRef.current) {
          timelineRef.current.kill();
          timelineRef.current = null;
        }

        // Kill specific triggers
        triggers.forEach((trigger) => {
          if (trigger) trigger.kill();
        });
      };
    };

    // Create animation and store cleanup
    const cleanup = createAnimation();

    // Return cleanup function
    return () => {
      cleanup();
      // Clear any remaining ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      // Clear any remaining GSAP tweens
      gsap.killTweensOf([iconRef.current, whiteRef.current, yellowRef.current]);
    };
  }, []);

  return (
    <div ref={triggerRef} className='icon-wrapper'>
      <svg
        ref={iconRef}
        style={{ scale: 0.8 }}
        width='153'
        height='153'
        viewBox='0 0 153 153'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='opacity-0' // Start hidden
      >
        <circle
          ref={whiteRef}
          cx='76.5'
          cy='76.5'
          r='75.5'
          stroke='white'
          strokeWidth='2'
          className='scale-75'
        />
        <circle
          style={{ opacity: 1, scale: 0.1 }}
          ref={yellowRef}
          cx='76.5'
          cy='76.5'
          r='48.5'
          fill='#FFD40B'
        />
      </svg>
    </div>
  );
}

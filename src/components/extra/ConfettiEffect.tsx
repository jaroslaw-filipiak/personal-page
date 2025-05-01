import { useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function ConfettiEffect() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Only create one canvas that will be reused
    if (!canvasRef.current) {
      // Create canvas only once
      const canvas = document.createElement('canvas');
      canvas.style.position = 'fixed';
      canvas.style.zIndex = '9999999';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.pointerEvents = 'none';
      
      document.body.appendChild(canvas);
      canvasRef.current = canvas;
    }

    // Create confetti instance
    const myConfetti = confetti.create(canvasRef.current, {
      resize: true,
      useWorker: true,
    });

    // Fire a realistic, celebratory confetti pattern
    const end = Date.now() + 3000; // 3 seconds

    // Launch some confetti from the left edge
    myConfetti({
      particleCount: 100,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.6 }
    });

    // And launch some from the right edge
    myConfetti({
      particleCount: 100,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.6 }
    });

    // Keep launching confetti until the animation duration ends
    const timer = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(timer);
        return;
      }

      // Random confetti bursts
      myConfetti({
        particleCount: 50,
        angle: 90,
        spread: 70,
        origin: { x: Math.random(), y: 0.3 }
      });
    }, 250);

    // When component unmounts, remove the canvas
    return () => {
      clearInterval(timer);
      
      // We don't remove the canvas on unmount to prevent multiple creations
      // This will be handled by the Form component's showConfetti state
    };
  }, []);

  return null;
}

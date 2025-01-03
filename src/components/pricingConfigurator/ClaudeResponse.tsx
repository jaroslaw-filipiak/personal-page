import React, { useEffect, useState, useCallback, useRef } from 'react';

export interface ClaudeMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ClaudeResponseProps {
  messages: ClaudeMessage[];
  model?: string;
  maxTokens?: number;
  onResponseReceived?: (response: string) => void;
  onError?: (error: string) => void;
  className?: string;
  loadingText?: string;
}

export const ClaudeResponse: React.FC<ClaudeResponseProps> = ({
  messages,
  model = 'claude-3-opus-20240229',
  maxTokens = 2000,
  onResponseReceived,
  onError,
  className = 'claude-response p-4',
  loadingText = 'Generuję odpowiedź...',
}) => {
  const [response, setResponse] = useState<string>('');
  const [displayText, setDisplayText] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const animationRef = useRef<number>();
  const textRef = useRef<string>('');
  const isAnimatingRef = useRef(false);

  const animateText = useCallback((text: string) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const startAnimation = () => {
      let start: number | null = null;
      let currentIndex = 0;
      textRef.current = text;

      const animate = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;

        // Calculate how many characters should be shown based on time
        const shouldShowChars = Math.floor(progress / 16); // ~60fps

        if (shouldShowChars > currentIndex && currentIndex < text.length) {
          currentIndex = shouldShowChars;
          if (textRef.current === text) {
            setDisplayText(text.slice(0, currentIndex));
          }
          animationRef.current = requestAnimationFrame(animate);
        } else if (currentIndex < text.length) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          isAnimatingRef.current = false;
        }
      };

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      // Reset display text before starting animation
      setDisplayText('');
      animationRef.current = requestAnimationFrame(animate);
    };

    // Add a small delay before starting the animation
    setTimeout(startAnimation, 100);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      isAnimatingRef.current = false;
    };
  }, []);

  useEffect(() => {
    const generateResponse = async () => {
      if (messages.length === 0) return;

      console.log(messages);

      setIsLoading(true);
      setError(null);
      setDisplayText('');
      isAnimatingRef.current = false;

      try {
        const res = await fetch(
          'https://claude-proxy-muq7.onrender.com/api/claude',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              model,
              messages,
              max_tokens: maxTokens,
            }),
          }
        );

        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          throw new Error(errorData.message || `Error! status: ${res.status}`);
        }

        const data = await res.json();
        const content = data.content[0]?.text || '';
        setResponse(content);

        // Start animation after a short delay
        animateText(content);

        if (onResponseReceived) {
          onResponseReceived(content);
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred';
        setError(errorMessage);
        if (onError) {
          onError(errorMessage);
        }
      } finally {
        setIsLoading(false);
      }
    };

    generateResponse();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      isAnimatingRef.current = false;
    };
  }, [messages, model, maxTokens, onResponseReceived, onError, animateText]);

  if (isLoading) {
    return <div className='animate-pulse p-4'>{loadingText}</div>;
  }

  if (error) {
    return <div className='text-red-500 p-4'>Błąd: {error}</div>;
  }

  return (
    <div className={className}>
      <div className='whitespace-pre-wrap'>{displayText}</div>
    </div>
  );
};

export default ClaudeResponse;

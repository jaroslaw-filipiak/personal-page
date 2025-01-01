import React, { useEffect, useState } from 'react';

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

export const ClaudeResponse = ({
  messages,
  model = 'claude-3-opus-20240229',
  maxTokens = 1000,
  onResponseReceived,
  onError,
  className = 'claude-response p-4',
  loadingText = 'Generuję odpowiedź...',
}: ClaudeResponseProps) => {
  const [fullResponse, setFullResponse] = useState<string>('');
  const [displayedResponse, setDisplayedResponse] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle typewriter effect
  useEffect(() => {
    if (!fullResponse || currentIndex >= fullResponse.length) return;

    const timer = setTimeout(() => {
      setDisplayedResponse((prev) => prev + fullResponse[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, 30);

    return () => clearTimeout(timer);
  }, [fullResponse, currentIndex]);

  // Generate response
  useEffect(() => {
    const generateResponse = async () => {
      if (messages.length === 0) return;

      setIsLoading(true);
      setError(null);
      setFullResponse('');
      setDisplayedResponse('');
      setCurrentIndex(0);

      try {
        const res = await fetch('/api/claude', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model,
            max_tokens: maxTokens,
            messages,
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || 'Failed to generate response');
        }

        setIsLoading(false);
        setFullResponse(data.content || '');

        if (onResponseReceived) {
          onResponseReceived(data.content);
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred';
        console.error('Error generating response:', error);
        setError(errorMessage);
        setIsLoading(false);

        if (onError) {
          onError(errorMessage);
        }
      }
    };

    generateResponse();
  }, [JSON.stringify(messages), model, maxTokens]);

  if (isLoading && !displayedResponse) {
    return <div className='animate-pulse p-4'>{loadingText}</div>;
  }

  if (error) {
    return <div className='text-red-500 p-4'>Błąd: {error}</div>;
  }

  return <div className={className}>{displayedResponse}</div>;
};

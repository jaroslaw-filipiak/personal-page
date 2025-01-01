import React, { useEffect, useState, useCallback } from 'react';

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
  retryCount?: number;
}

export const ClaudeResponse: React.FC<ClaudeResponseProps> = ({
  messages,
  model = 'claude-3-opus-20240229',
  maxTokens = 1000,
  onResponseReceived,
  onError,
  className = 'claude-response p-4',
  loadingText = 'Generuję odpowiedź...',
  retryCount = 3,
}) => {
  const [fullResponse, setFullResponse] = useState<string>('');
  const [displayedResponse, setDisplayedResponse] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const generateResponse = useCallback(
    async (retries = retryCount) => {
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

        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || `HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        if (!data.content) {
          throw new Error('No content in response');
        }

        setFullResponse(data.content);
        setIsLoading(false);

        if (onResponseReceived) {
          onResponseReceived(data.content);
        }
      } catch (error) {
        console.error('Error generating response:', error);
        const errorMessage =
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred';

        if (retries > 0) {
          console.log(`Retrying... ${retries} attempts left`);
          setTimeout(() => generateResponse(retries - 1), 1000);
          return;
        }

        setError(errorMessage);
        setIsLoading(false);

        if (onError) {
          onError(errorMessage);
        }
      }
    },
    [messages, model, maxTokens, onResponseReceived, onError, retryCount]
  );

  useEffect(() => {
    generateResponse();
  }, [generateResponse]);

  useEffect(() => {
    if (!fullResponse || currentIndex >= fullResponse.length) return;

    const timer = setTimeout(() => {
      setDisplayedResponse((prev) => prev + fullResponse[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, 30);

    return () => clearTimeout(timer);
  }, [fullResponse, currentIndex]);

  if (isLoading && !displayedResponse) {
    return <div className='animate-pulse p-4'>{loadingText}</div>;
  }

  if (error) {
    return (
      <div className='text-red-500 p-4'>
        <div>Błąd: {error}</div>
        <button
          onClick={() => generateResponse()}
          className='mt-2 px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200'
        >
          Spróbuj ponownie
        </button>
      </div>
    );
  }

  return <div className={className}>{displayedResponse}</div>;
};

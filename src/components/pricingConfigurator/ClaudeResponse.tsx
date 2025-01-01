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
  const [response, setResponse] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const generateResponse = async () => {
      if (messages.length === 0) return;

      console.log('Starting to generate response');
      setIsLoading(true);
      setError(null);
      setResponse('');

      try {
        console.log('Sending API request');
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
        console.log('Received API response:', data);

        if (!res.ok) {
          throw new Error(data.error || 'Failed to generate response');
        }

        console.log('Setting response state');
        setResponse(data.content || '');
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
        setError(errorMessage);
        setIsLoading(false);

        if (onError) {
          onError(errorMessage);
        }
      }
    };

    generateResponse();
  }, [JSON.stringify(messages), model, maxTokens]);

  console.log('Current state:', {
    isLoading,
    error,
    responseLength: response.length,
  });

  if (isLoading) {
    return <div className='animate-pulse p-4'>{loadingText}</div>;
  }

  if (error) {
    return <div className='text-red-500 p-4'>Błąd: {error}</div>;
  }

  return <div className={className}>{response}</div>;
};

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

export const ClaudeResponse: React.FC<ClaudeResponseProps> = ({
  messages,
  model = 'claude-3-opus-20240229',
  maxTokens = 1000,
  onResponseReceived,
  onError,
  className = 'claude-response p-4',
  loadingText = 'Generuję odpowiedź...',
}) => {
  const [response, setResponse] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const generateResponse = async () => {
      if (messages.length === 0) return;

      setIsLoading(true);
      setError(null);
      setResponse('');

      try {
        const res = await fetch(
          'https://node-api-helper.vercel.app/api/claude',
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
  }, [messages, model, maxTokens, onResponseReceived, onError]);

  if (isLoading) {
    return <div className='animate-pulse p-4'>{loadingText}</div>;
  }

  if (error) {
    return <div className='text-red-500 p-4'>Błąd: {error}</div>;
  }

  return <div className={className}>{response}</div>;
};

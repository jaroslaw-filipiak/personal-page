import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

const isHtmlResponse = (contentType: string | null): boolean => {
  return contentType?.includes('text/html') || false;
};

const handleErrorResponse = async (response: Response) => {
  const contentType = response.headers.get('content-type');

  if (isHtmlResponse(contentType)) {
    // If we get HTML back, return a more useful error message
    const htmlContent = await response.text();
    console.error('Received HTML error response:', htmlContent);
    return {
      error: 'Internal server error',
      details: 'The server returned an HTML error page instead of JSON',
    };
  }

  try {
    const errorData = await response.json();
    return errorData;
  } catch (e) {
    console.error('Failed to parse error response:', e);
    return {
      error: `HTTP error! status: ${response.status}`,
      details: 'Failed to parse error response',
    };
  }
};

export async function POST(request: NextRequest) {
  try {
    // Validate request
    const body = await request.json().catch(() => ({}));
    console.log('Request body:', body);

    if (!body.messages || !Array.isArray(body.messages)) {
      return NextResponse.json(
        { error: 'Invalid request: messages array is required' },
        { status: 400 }
      );
    }

    // Validate API key
    if (!process.env.ANTHROPIC_API_KEY) {
      console.error('ANTHROPIC_API_KEY is not set');
      return NextResponse.json(
        { error: 'API key configuration error' },
        { status: 500 }
      );
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: body.model || 'claude-3-opus-20240229',
        max_tokens: body.max_tokens || 1000,
        messages: body.messages,
      }),
    });

    if (!response.ok) {
      const errorData = await handleErrorResponse(response);
      console.error('API error:', errorData);
      return NextResponse.json(errorData, { status: response.status });
    }

    const contentType = response.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      console.error('Unexpected response type:', contentType);
      return NextResponse.json(
        { error: 'Unexpected response type from API' },
        { status: 500 }
      );
    }

    const responseData = await response.json();
    console.log('Anthropic API response:', responseData);

    if (!responseData.content || !Array.isArray(responseData.content)) {
      return NextResponse.json(
        { error: 'Invalid response format from API' },
        { status: 500 }
      );
    }

    const content = responseData.content[0]?.text;
    console.log('Extracted content:', content);

    return NextResponse.json({ content: content || '' });
  } catch (error) {
    console.error('Claude API error:', error);
    return NextResponse.json(
      {
        error: 'Failed to generate response',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

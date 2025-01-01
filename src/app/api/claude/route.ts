import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Request body:', body);

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY || '',
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: body.model || 'claude-3-opus-20240229',
        max_tokens: body.max_tokens || 1000,
        messages: body.messages,
      }),
    });

    const responseData = await response.json();
    console.log('Anthropic API response:', responseData);

    if (!response.ok) {
      console.error('API error:', responseData);
      return NextResponse.json(
        {
          error:
            responseData.error?.message ||
            `HTTP error! status: ${response.status}`,
        },
        { status: response.status }
      );
    }

    const content = responseData.content?.[0]?.text;
    console.log('Extracted content:', content);

    // Make sure we're sending a string response
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

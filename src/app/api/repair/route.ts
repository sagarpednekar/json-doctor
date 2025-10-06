import model from '@/lib/gemini-client';
import { fixJsonPrompt } from '@/prompts';
function extractJsonFromMarkdown(markdown: string): any | null {
  const match = markdown.match(/```json\s*([\s\S]*?)\s*```/);
  if (match && match[1]) {
    try {
      return JSON.parse(match[1]);
    } catch (e) {
      return null;
    }
  }
  // Try to parse as plain JSON if no code block
  try {
    return JSON.parse(markdown);
  } catch {
    return null;
  }
}
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { json } = body;

    if (!json) {
      return new Response(
        JSON.stringify({ error: 'No JSON provided in the request body' }),
        { status: 400 },
      );
    }

    const userPrompt = `${fixJsonPrompt}
    Here is the JSON data that needs to be repaired:
    ${json}
    Please respond ONLY with a valid JSON object containing the following keys: "repaired", "schema", and "explanation". Do not include Markdown formatting or code blocks.

    `;

    const result = await model.generateContent(userPrompt);
    const text = result.response.text();
    let parsedResponse = extractJsonFromMarkdown(text);
    console.log('Parsed response:', parsedResponse);
    if (!parsedResponse) {
      return new Response(
        JSON.stringify({
          error: 'Failed to extract valid JSON from model response',
          modelResponse: text,
        }),
        { status: 500 },
      );
    }

    return new Response(JSON.stringify(parsedResponse), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Error in /api/repair:', error);
    return new Response(
      JSON.stringify({
        error: 'Internal server error',
        details: error.message,
      }),
      { status: 500 },
    );
  }
}

// Netlify Function: proxy server-side verso Groq.
// La chiave resta su Netlify (GROQ_API_KEY) e non arriva mai al browser.
const DEFAULT_MODEL = 'openai/gpt-oss-120b';

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export default async (req) => {
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return json({ error: 'Missing GROQ_API_KEY on server' }, 500);

  let messages;
  try {
    ({ messages } = await req.json());
  } catch {
    return json({ error: 'Invalid JSON body' }, 400);
  }
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > 50) {
    return json({ error: 'Invalid messages' }, 400);
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || DEFAULT_MODEL,
        messages,
        max_completion_tokens: 1024,
        reasoning_effort: 'low',
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      console.error('Groq error', response.status, data);
      return json({ error: data.error?.message || 'Groq request failed' }, response.status);
    }
    return json(data);
  } catch (err) {
    console.error('Groq fetch failed', err);
    return json({ error: 'Upstream error' }, 502);
  }
};

export const config = { path: '/api/chat' };

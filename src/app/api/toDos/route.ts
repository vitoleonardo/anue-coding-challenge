import { handleGetLSItem } from '@/utils/ls';

export async function GET(request: Request): Promise<Response> {
  try {
    const todos = await handleGetLSItem('myKey');

    return new Response(JSON.stringify(todos), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in /api/toDos:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch todos' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

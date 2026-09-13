interface Env {
  DB: D1Database;
}

interface LogSearchPayload {
  query: string;
  category?: string;
  scenario?: string;
  urgent?: boolean;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  let body: LogSearchPayload;
  try {
    body = await context.request.json();
  } catch {
    return new Response('Invalid JSON', { status: 400 });
  }

  if (!body.query || typeof body.query !== 'string') {
    return new Response('Missing query', { status: 400 });
  }

  await context.env.DB.prepare(
    'INSERT INTO searches (query, category, scenario, urgent) VALUES (?, ?, ?, ?)'
  )
    .bind(body.query.slice(0, 2000), body.category ?? null, body.scenario ?? null, body.urgent ? 1 : 0)
    .run();

  return new Response(null, { status: 204 });
};

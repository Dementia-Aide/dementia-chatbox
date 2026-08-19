import { useState, useRef, useEffect, type FormEvent } from 'react';
import { analyzeCareQuery, type AICareResponse } from './lib/ai';
import './App.css';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  query?: string;
  response?: AICareResponse;
}

const SUGGESTED_QUERIES = [
  'wandering at night',
  'refusing to eat',
  'aggressive behavior',
  'won\'t take medication',
  'caregiver burnout',
];

function AssistantBubble({ response }: { response: AICareResponse }) {
  if (response.notCovered) {
    return (
      <div className="bubble assistant">
        <div className="not-covered">
          <strong>{response.notCovered.title}</strong>
          <p>{response.notCovered.message}</p>
          <a
            className="discord-link"
            href={response.notCovered.discordUrl}
            target="_blank"
            rel="noreferrer"
          >
            Join CareVillage on Discord
          </a>
        </div>
        <p className="disclaimer">{response.disclaimer}</p>
      </div>
    );
  }

  return (
    <div className="bubble assistant">
      {response.urgentNotice && (
        <div className="urgent-notice">
          <strong>{response.urgentNotice.title}</strong>
          <p>{response.urgentNotice.message}</p>
          <ul>
            {response.urgentNotice.actions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ul>
        </div>
      )}

      <span className="category-tag">{response.category}</span>
      <p className="explanation">{response.explanation}</p>

      {response.tips.length > 0 && (
        <div className="section">
          <h4>Tips</h4>
          <ul>
            {response.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>
      )}

      {response.matchedResources.length > 0 && (
        <div className="section">
          <h4>Related guides</h4>
          <ul className="link-list">
            {response.matchedResources.map((resource) => (
              <li key={resource.title}>
                <a href={resource.url} target="_blank" rel="noreferrer">
                  {resource.title}
                </a>
                <span className="muted"> — {resource.summary}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {response.trustedSources.length > 0 && (
        <div className="section">
          <h4>Trusted sources</h4>
          <ul className="link-list">
            {response.trustedSources.map((source) => (
              <li key={source.title}>
                <a href={source.url} target="_blank" rel="noreferrer">
                  {source.title}
                </a>
                <span className="muted"> — {source.publisher}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="disclaimer">{response.disclaimer}</p>
    </div>
  );
}

function App() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const runQuery = async (query: string) => {
    const trimmed = query.trim();
    if (!trimmed || loading) return;

    const userMessage: ChatMessage = { id: crypto.randomUUID(), role: 'user', query: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await analyzeCareQuery(trimmed);
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: 'assistant', response },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    runQuery(input);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>DementiaAide Assistant</h1>
        <p>Ask a caregiving question and get plain-language next steps.</p>
      </header>

      <main className="chat">
        {messages.length === 0 && (
          <div className="empty-state">
            <p>Try asking about:</p>
            <div className="suggestions">
              {SUGGESTED_QUERIES.map((q) => (
                <button key={q} type="button" onClick={() => runQuery(q)}>
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((message) =>
          message.role === 'user' ? (
            <div className="bubble user" key={message.id}>
              {message.query}
            </div>
          ) : (
            <AssistantBubble key={message.id} response={message.response!} />
          )
        )}

        {loading && <div className="bubble assistant loading">Thinking…</div>}
        <div ref={endRef} />
      </main>

      <form className="composer" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What do you need help with?"
          aria-label="Ask a caregiving question"
        />
        <button type="submit" disabled={loading || !input.trim()}>
          Send
        </button>
      </form>
    </div>
  );
}

export default App;

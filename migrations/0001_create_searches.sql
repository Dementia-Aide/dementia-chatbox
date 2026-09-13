CREATE TABLE IF NOT EXISTS searches (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  query TEXT NOT NULL,
  category TEXT,
  scenario TEXT,
  urgent INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_searches_created_at ON searches (created_at);
CREATE INDEX IF NOT EXISTS idx_searches_category ON searches (category);

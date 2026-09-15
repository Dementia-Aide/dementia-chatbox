// Splits a query into searchable words and expands them with known synonyms.
import { querySynonyms } from '../knowledge/synonyms';

export function tokenize(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((token) => token.length > 2);
}

export function expandQueryTokens(tokens: string[]) {
  return Array.from(new Set(tokens.flatMap((token) => [token, ...(querySynonyms[token] || [])])));
}

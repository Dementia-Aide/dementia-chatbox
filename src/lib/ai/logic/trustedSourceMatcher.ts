// Picks up to 3 trusted outside sources for a category/scenario, checking
// the more specific scenario mapping before falling back to the category one.
import type { AITrustedSource } from '../types';
import { trustedCareSources } from '../knowledge/trustedSources';
import { sourceKeysByCategory, sourceKeysByScenario } from '../knowledge/sourceMapping';

export function getTrustedSources(category: string, scenario: string): AITrustedSource[] {
  const keys = sourceKeysByScenario[scenario] || sourceKeysByCategory[category] || sourceKeysByCategory.general;
  return Array.from(new Set(keys)).map((key) => trustedCareSources[key]).filter(Boolean).slice(0, 3);
}

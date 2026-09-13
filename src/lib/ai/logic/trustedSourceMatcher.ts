import type { AITrustedSource } from '../types';
import { trustedCareSources } from '../knowledge/trustedSources';
import { sourceKeysByCategory, sourceKeysByScenario } from '../knowledge/sourceMapping';

export function getTrustedSources(category: string, scenario: string): AITrustedSource[] {
  const keys = sourceKeysByScenario[scenario] || sourceKeysByCategory[category] || sourceKeysByCategory.general;
  return Array.from(new Set(keys)).map((key) => trustedCareSources[key]).filter(Boolean).slice(0, 3);
}

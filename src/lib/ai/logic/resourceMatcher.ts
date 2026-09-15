// Scores and ranks DementiaAide resource-library entries against a query,
// returning the top matches (or featured resources if nothing scores).
import { getResourceUrl, resources, type Resource } from '../../resources';
import type { AIResourceRecommendation } from '../types';
import { resourceCategoryBoosts } from '../knowledge/resourceBoosts';
import { expandQueryTokens, tokenize } from './tokenize';

function scoreResource(resource: Resource, queryTokens: string[], category: string, scenario: string) {
  const searchableText = [
    resource.title,
    resource.summary,
    resource.category,
    ...resource.tags,
  ].join(' ').toLowerCase();

  let score = 0;

  for (const token of queryTokens) {
    if (searchableText.includes(token)) score += 2;
  }

  if (resource.featured) score += 1;

  if (resourceCategoryBoosts[category]?.includes(resource.category)) score += 4;

  const scenarioKeywords = scenario.replace(/_/g, ' ').split(' ');
  for (const keyword of scenarioKeywords) {
    if (keyword.length > 2 && searchableText.includes(keyword)) score += 3;
  }

  return score;
}

export function findMatchedResources(query: string, category: string, scenario: string): AIResourceRecommendation[] {
  const queryTokens = expandQueryTokens(tokenize(query));

  const matches = resources
    .map((resource) => ({
      resource,
      score: scoreResource(resource, queryTokens, category, scenario),
    }))
    .filter((match) => match.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);

  const fallback =
    matches.length > 0
      ? matches
      : resources
          .filter((resource) => resource.featured)
          .slice(0, 4)
          .map((resource) => ({ resource, score: 1 }));

  return fallback.map(({ resource }) => ({
    title: resource.title,
    summary: resource.summary,
    category: resource.category,
    url: getResourceUrl(resource),
  }));
}

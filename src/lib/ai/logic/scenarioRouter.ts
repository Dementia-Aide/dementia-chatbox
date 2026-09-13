import { scenarioRoutingRules } from '../knowledge/scenarioRouting';

// Enhanced keyword-based category and scenario detection
export function detectCategoryAndScenario(query: string): { category: string; scenario: string } {
  const lowerQuery = query.toLowerCase();

  for (const rule of scenarioRoutingRules) {
    if (lowerQuery.match(rule.pattern)) {
      return { category: rule.category, scenario: rule.scenario };
    }
  }

  return { category: 'general', scenario: 'general' };
}

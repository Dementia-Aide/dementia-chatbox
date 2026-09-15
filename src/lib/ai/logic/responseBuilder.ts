// Assembles the final AICareResponse: canned copy for the matched scenario/
// category, plus matched resources and trusted sources pulled in from the
// other logic modules.
import type { AICareResponse } from '../types';
import { scenarioResponses } from '../knowledge/scenarios';
import { categoryFallbacks } from '../knowledge/categories';
import { STANDARD_DISCLAIMER } from '../knowledge/constants';
import type { UrgentNoticeRule } from '../knowledge/urgentNotices';
import { findMatchedResources } from './resourceMatcher';
import { getTrustedSources } from './trustedSourceMatcher';

const RELATED_TOPICS = [
  'Caregiver Support and Self-Care',
  'Daily Care Routines and Schedules',
  'Communication Strategies and Tips',
  'Safety Measures and Prevention',
  'Behavior Management Techniques',
  'Activities and Engagement',
  'Memory Care Strategies',
  'Legal and Financial Planning'
];

export function buildCareResponse(
  query: string,
  category: string,
  scenario: string,
  urgentNotice: UrgentNoticeRule | undefined
): AICareResponse {
  const specificResponse = scenarioResponses[scenario];
  const baseResponse = specificResponse || categoryFallbacks[category] || categoryFallbacks.general;

  const searchSuggestions = specificResponse
    ? [
        query,
        `${scenario.replace(/_/g, ' ')} dementia care tips`,
        `managing ${scenario.replace(/_/g, ' ')} alzheimer's`,
        `${baseResponse.category.toLowerCase()} strategies dementia`,
        'caregiver support resources'
      ]
    : [
        query,
        `${baseResponse.category.toLowerCase()} strategies in dementia care`,
        `managing dementia ${category}`,
        'evidence-based dementia care approaches',
        'professional dementia care resources'
      ];

  const matchedResources = findMatchedResources(query, category, scenario);

  // An urgent notice overrides which trusted sources are cited (e.g. a stroke
  // warning cites stroke/hospital sources rather than the matched scenario's).
  const trustedSources = getTrustedSources(category, urgentNotice?.id ?? scenario);

  const resourceContext =
    matchedResources.length > 0
      ? ` Ana has related DementiaAide guides on ${matchedResources
          .slice(0, 2)
          .map((resource) => resource.title)
          .join(' and ')}, which can give more practical next steps.`
      : '';

  return {
    explanation: `${baseResponse.explanation}${resourceContext}`,
    tips: baseResponse.tips,
    searchSuggestions: searchSuggestions.slice(0, 5),
    relatedTopics: RELATED_TOPICS.slice(0, 6),
    category: baseResponse.category,
    matchedResources,
    trustedSources,
    urgentNotice: urgentNotice?.notice,
    disclaimer: STANDARD_DISCLAIMER
  };
}

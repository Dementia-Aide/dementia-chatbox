// Main entry point for Ask Aide's rule-based response pipeline: routes a
// query to a category/scenario, checks for emergencies, and builds the
// final response. No LLM call happens here — it's deterministic keyword matching.
import type { AICareResponse } from './types';
import { CAREVILLAGE_DISCORD_URL, STANDARD_DISCLAIMER } from './knowledge/constants';
import { detectCategoryAndScenario } from './logic/scenarioRouter';
import { detectUrgentNotice } from './logic/urgentDetector';
import { buildCareResponse } from './logic/responseBuilder';
import { findMatchedResources } from './logic/resourceMatcher';
import { getTrustedSources } from './logic/trustedSourceMatcher';

export type { AICareResponse, AIResourceRecommendation, AITrustedSource } from './types';

// Fire-and-forget: never let logging failures affect the chat response.
function logSearch(query: string, category: string, scenario: string, urgent: boolean): void {
  fetch('/api/log-search', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, category, scenario, urgent }),
  }).catch(() => {});
}

export async function analyzeCareQuery(query: string): Promise<AICareResponse> {
  try {
    // Detect category and specific scenario from keywords
    const { category: detectedCategory, scenario } = detectCategoryAndScenario(query);
    const urgentNotice = detectUrgentNotice(query);

    logSearch(query, detectedCategory, scenario, Boolean(urgentNotice));

    // Query matched no category or scenario at all (the final fallthrough in
    // detectCategoryAndScenario) - don't guess with a generic canned answer,
    // point the caregiver to real humans instead.
    if (!urgentNotice && detectedCategory === 'general' && scenario === 'general') {
      return {
        explanation: "We don't have this specific topic covered yet.",
        tips: [],
        searchSuggestions: [query],
        relatedTopics: [],
        category: 'General',
        matchedResources: [],
        trustedSources: [],
        notCovered: {
          title: "This topic isn't covered yet",
          message:
            "Our assistant doesn't have a specific answer for this. For personalized help, talk with real caregivers in CareVillage, DementiaAide's Discord community.",
          discordUrl: CAREVILLAGE_DISCORD_URL,
        },
        disclaimer: STANDARD_DISCLAIMER,
      };
    }

    return buildCareResponse(query, detectedCategory, scenario, urgentNotice);
  } catch (error) {
    console.error('Error analyzing care query:', error);
    return {
      explanation: "I'm here to help with your dementia care questions. Please describe the situation you're facing, and I'll provide relevant advice and resources.",
      tips: ["Be specific about the situation", "Mention any recent changes", "Note the time of day when issues occur"],
      searchSuggestions: ["dementia care basics", "caregiver support"],
      relatedTopics: ["dementia care", "caregiver support", "dementia symptoms"],
      category: "General",
      matchedResources: findMatchedResources(query, 'general', 'general'),
      trustedSources: getTrustedSources('general', 'general'),
      disclaimer: STANDARD_DISCLAIMER
    };
  }
}

export async function categorizeContent(content: string): Promise<string[]> {
  try {
    const { category } = detectCategoryAndScenario(content);

    const categoryNames: { [key: string]: string } = {
      behavior: 'Behavior',
      safety: 'Safety',
      daily: 'Daily Care',
      communication: 'Communication',
      activities: 'Activities',
      health: 'Health',
      planning: 'Care Planning',
      support: 'Caregiver Support',
      general: 'General'
    };

    return [categoryNames[category] || 'General', 'Dementia Care'];
  } catch (error) {
    console.error('Error categorizing content:', error);
    return ['Dementia Care'];
  }
}

export async function enhanceSearchQuery(query: string): Promise<string> {
  try {
    const { category } = detectCategoryAndScenario(query);

    const categoryKeywords: { [key: string]: string[] } = {
      activities: ['engagement', 'activities', 'stimulation'],
      communication: ['talking', 'understanding', 'connection'],
      behavior: ['managing', 'coping', 'strategies'],
      safety: ['prevention', 'security', 'protection'],
      daily: ['routine', 'care', 'assistance'],
      health: ['medical', 'treatment', 'wellness'],
      planning: ['planning', 'resources', 'future care'],
      support: ['caregiver', 'support', 'respite'],
      general: ['support', 'guide', 'help']
    };

    const keywords = categoryKeywords[category] || categoryKeywords.general;
    const enhancedQuery = `${query} ${keywords.join(' ')} dementia care`;

    return enhancedQuery;
  } catch (error) {
    console.error('Error enhancing search query:', error);
    return query;
  }
}

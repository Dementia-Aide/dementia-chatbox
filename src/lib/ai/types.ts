export interface AIResourceRecommendation {
  title: string;
  summary: string;
  category: string;
  url: string;
}

export interface AITrustedSource {
  title: string;
  publisher: string;
  summary: string;
  url: string;
}

export interface AICareResponse {
  explanation: string;
  tips: string[];
  searchSuggestions: string[];
  relatedTopics: string[];
  category: 'Behavior' | 'Safety' | 'Daily Care' | 'Communication' | 'Activities' | 'Health' | 'General';
  matchedResources: AIResourceRecommendation[];
  trustedSources: AITrustedSource[];
  urgentNotice?: {
    title: string;
    message: string;
    actions: string[];
  };
  notCovered?: {
    title: string;
    message: string;
    discordUrl: string;
  };
  disclaimer: string;
}

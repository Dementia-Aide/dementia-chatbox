// Which DementiaAide resource categories to favor when the detected question
// category is one of these — helps the right guides bubble to the top.
export const resourceCategoryBoosts: Record<string, string[]> = {
  safety: ['Safety & Crisis'],
  daily: ['Daily Care'],
  behavior: ['Behavior & Emotions'],
  communication: ['Connection'],
  activities: ['Connection'],
  health: ['Start Here', 'Care Planning', 'Daily Care', 'Safety & Crisis'],
  planning: ['Care Planning', 'Caregiver Support'],
  support: ['Caregiver Support', 'Care Planning'],
  general: ['Start Here', 'Caregiver Support'],
};

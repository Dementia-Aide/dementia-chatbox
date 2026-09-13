// Which trusted-source keys (see trustedSources.ts) to cite for a given
// scenario. Checked before the category-level fallback below.
export const sourceKeysByScenario: Record<string, string[]> = {
  wandering_night: ['wandering', 'homeSafety', 'agitation'],
  wandering: ['wandering', 'homeSafety', 'niaCaregiving'],
  bathing_resistance: ['bathing', 'dailyPlan', 'alzCaregiving'],
  incontinence: ['dailyPlan', 'niaCaregiving', 'alzCaregiving'],
  physical_aggression: ['agitation', 'behavior', 'niaCaregiving'],
  verbal_aggression: ['agitation', 'behavior', 'communication'],
  sundowning: ['agitation', 'dailyPlan', 'niaCaregiving'],
  sleep: ['agitation', 'dailyPlan', 'niaCaregiving'],
  repetitive: ['communication', 'behavior', 'dailyPlan'],
  delusions: ['behavior', 'communication', 'niaCaregiving'],
  driving: ['homeSafety', 'alzCaregiving', 'niaCaregiving'],
  recognition: ['communication', 'alzCaregiving', 'niaCaregiving'],
  depression: ['niaCaregiving', 'dailyPlan', 'alzCaregiving'],
  falls: ['homeSafety', 'niaCaregiving', 'alzCaregiving'],
  medication_refusal: ['niaCaregiving', 'dailyPlan', 'alzCaregiving'],
  sudden_confusion: ['niaCaregiving', 'homeSafety', 'alzCaregiving'],
  wants_to_go_home: ['communication', 'behavior', 'dailyPlan'],
  shadowing: ['behavior', 'communication', 'dailyPlan'],
  rummaging: ['behavior', 'homeSafety', 'communication'],
  financial_safety: ['homeSafety', 'alzCaregiving', 'niaCaregiving'],
  kitchen_safety: ['homeSafety', 'dailyPlan', 'niaCaregiving'],
  caregiver_burnout: ['alzCaregiving', 'niaCaregiving', 'alzheimersGovTips'],
  family_conflict: ['alzCaregiving', 'niaCaregiving', 'alzheimersGovTips'],
  care_transition: ['alzCaregiving', 'niaCaregiving', 'alzheimersGovTips'],
  stroke_warning: ['strokeSigns', 'hospital', 'niaCaregiving'],
  missing_person: ['wandering', 'homeSafety', 'alzCaregiving'],
  dangerous_aggression: ['agitation', 'behavior', 'alzCaregiving'],
  medication_emergency: ['hospital', 'niaCaregiving', 'homeSafety'],
  fire_or_gas: ['homeSafety', 'hospital', 'alzCaregiving'],
  head_injury: ['hospital', 'homeSafety', 'niaCaregiving'],
};

// Fallback trusted-source keys by broad category, used when the scenario
// isn't in the map above (e.g. generic "general" scenarios).
export const sourceKeysByCategory: Record<string, string[]> = {
  safety: ['homeSafety', 'alzCaregiving', 'niaCaregiving'],
  daily: ['dailyPlan', 'alzheimersGovTips', 'alzCaregiving'],
  behavior: ['behavior', 'agitation', 'communication'],
  communication: ['communication', 'alzCaregiving', 'niaCaregiving'],
  activities: ['dailyPlan', 'alzheimersGovTips', 'alzCaregiving'],
  health: ['niaCaregiving', 'alzCaregiving', 'alzheimersGovTips'],
  planning: ['alzCaregiving', 'niaCaregiving', 'alzheimersGovTips'],
  support: ['alzCaregiving', 'niaCaregiving', 'alzheimersGovTips'],
  general: ['alzCaregiving', 'niaCaregiving', 'alzheimersGovTips'],
};

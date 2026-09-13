// Keyword rules Ask Aide uses to figure out what a caregiver is asking about.
// Checked in order (most specific scenarios first, broad category fallbacks
// last) and the first pattern that matches the question wins.
export interface ScenarioRoutingRule {
  category: string;
  scenario: string;
  pattern: RegExp;
}

export const scenarioRoutingRules: ScenarioRoutingRule[] = [
  { category: 'support', scenario: 'caregiver_burnout', pattern: /burnout|exhaust|overwhelm|can'?t do this|tired|resent|need a break/ },
  { category: 'behavior', scenario: 'shadowing', pattern: /follow.*me|following.*me|follows.*me|shadow|clingy|won'?t.*leave.*alone|always.*behind|panics.*leave|panic.*leave/ },
  { category: 'behavior', scenario: 'rummaging', pattern: /rummag|hide|hiding|lost.*things|steal|stole|stolen|accus|searching|looking.*for/ },
  { category: 'safety', scenario: 'falls', pattern: /hit.*head|head injury|fell.*head|fall.*head|falls.*head|unconscious|passed out|can'?t get up|broken bone|severe pain/ },
  { category: 'health', scenario: 'medication_refusal', pattern: /overdose|took too many|double dose|wrong medication|poison|medication|medicine|meds|pill|refuse.*med|won'?t.*med|won'?t.*pill|forget.*med/ },

  // Wandering
  { category: 'safety', scenario: 'wandering_night', pattern: /wander.*night|night.*wander|leave.*night|walk.*night|nocturnal/ },
  { category: 'safety', scenario: 'wandering', pattern: /wander|walk away|leaving|getting lost|escape|door|exit/ },

  // Eating / nutrition
  { category: 'daily', scenario: 'refusing_food', pattern: /won'?t eat|refuse.*eat|not eating|loss.*appetite|skip.*meal|won'?t.*food/ },
  { category: 'health', scenario: 'swallowing', pattern: /chok|swallow|cough.*eat|aspiration/ },

  // Bathing / hygiene
  { category: 'daily', scenario: 'bathing_resistance', pattern: /won'?t.*bath|will not.*bath|not.*bath|refuse.*bath|won'?t.*shower|will not.*shower|not.*shower|refuse.*shower|afraid.*water|hate.*bath|hate.*shower/ },
  { category: 'daily', scenario: 'incontinence', pattern: /incontin|accident|urinat|bowel|diaper|toilet/ },
  { category: 'daily', scenario: 'dressing', pattern: /dress|clothes|clothing|outfit|won'?t.*wear|refuse.*wear/ },

  // Aggression
  { category: 'behavior', scenario: 'physical_aggression', pattern: /hit|punch|kick|violent|physical.*aggress|strike|attack/ },
  { category: 'behavior', scenario: 'verbal_aggression', pattern: /yell|scream|shout|curse|swear|verbal.*aggress|angry.*words/ },

  { category: 'behavior', scenario: 'sundowning', pattern: /sundown|evening.*worse|afternoon.*worse|late.*day|worse.*night/ },
  { category: 'health', scenario: 'sleep', pattern: /sleep|insomnia|awake.*night|won'?t.*sleep|up all night|restless.*night/ },
  { category: 'behavior', scenario: 'repetitive', pattern: /repeat|same.*question|asking.*again|over and over|repetitive/ },
  { category: 'behavior', scenario: 'delusions', pattern: /seeing.*things|hallucin|delusion|imagin|not real|false belief/ },
  { category: 'safety', scenario: 'driving', pattern: /driv|car|vehicle|license/ },
  { category: 'communication', scenario: 'recognition', pattern: /doesn'?t.*recogni|forget.*who|not.*know.*me|memory.*loss/ },
  { category: 'health', scenario: 'depression', pattern: /depress|sad|withdraw|isolat|won'?t.*talk|uninterested/ },

  { category: 'safety', scenario: 'falls', pattern: /fall|falls|fell|falling|trip|balance|unsteady|mobility/ },
  { category: 'health', scenario: 'sudden_confusion', pattern: /sudden.*confus|confus.*sudden|uti|infection|delirium|rapid.*decline|sudden.*worse/ },
  { category: 'communication', scenario: 'wants_to_go_home', pattern: /go home|want.*home|take me home|not.*my house|where.*home/ },
  { category: 'safety', scenario: 'financial_safety', pattern: /scam|money|bank|credit card|financial|bills|phone call|fraud/ },
  { category: 'safety', scenario: 'kitchen_safety', pattern: /stove|oven|burner|cook|cooking|kitchen|microwave|fire/ },
  { category: 'support', scenario: 'family_conflict', pattern: /family.*fight|sibling|brother|sister|family.*conflict|arguing.*family|won'?t help/ },
  { category: 'planning', scenario: 'care_transition', pattern: /hospice|palliative|end of life|late stage|adult day|assisted living|nursing home|care home|facility|hire.*help|home care/ },

  // Broad category fallbacks (scenario 'general') - checked last
  { category: 'behavior', scenario: 'general', pattern: /aggress|angry|agitat|stubborn|resist|refus|pacing|confusion|paranoid|accusat/ },
  { category: 'safety', scenario: 'general', pattern: /safe|danger|fall|lock|alarm|emergency|accident|risk|secure|protect|lost/ },
  { category: 'daily', scenario: 'general', pattern: /bath|dress|cloth|shower|hygiene|grooming|personal care/ },
  { category: 'communication', scenario: 'general', pattern: /talk|speak|communicate|understand|conversation|language|words|express|respond/ },
  { category: 'activities', scenario: 'general', pattern: /activit|game|music|exercise|hobby|engage|entertain|bored|stimulat|occupy/ },
  { category: 'health', scenario: 'general', pattern: /health|doctor|medicin|symptom|pain|sick|ill|hospital|treatment|diagnosis/ },
  { category: 'planning', scenario: 'general', pattern: /care plan|help at home|respite|legal|power of attorney|placement|care option|future/ },
];

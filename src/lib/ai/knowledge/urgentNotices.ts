// Emergency triggers: if a caregiver's message matches one of these patterns,
// Ask Aide shows an urgent notice pointing to real emergency help instead of
// (or alongside) its normal care tips. Checked in order, first match wins.
export interface UrgentNoticeRule {
  id: string;
  pattern: RegExp;
  notice: {
    title: string;
    message: string;
    actions: string[];
  };
}

export const urgentNoticeRules: UrgentNoticeRule[] = [
  {
    id: 'stroke_warning',
    pattern:
      /stroke|face droop|arm weakness|slurred speech|trouble speaking|sudden.*weak|weak.*one side|sudden.*vision|severe headache|sudden.*confus|sudden.*dizz|loss of balance/,
    notice: {
      title: 'Possible Medical Emergency',
      message:
        'Some symptoms you mentioned can overlap with stroke or another urgent medical problem. The CDC recommends calling 911 right away for sudden confusion, trouble speaking, weakness on one side, vision changes, severe headache, dizziness, or loss of balance.',
      actions: [
        'Call 911 now if symptoms are sudden, severe, one-sided, or rapidly worsening.',
        'Note the time symptoms started and share it with emergency responders.',
        'Tell responders the person has dementia and describe what is different from baseline.',
      ],
    },
  },
  {
    id: 'missing_person',
    pattern: /missing|cannot find|can't find|wandered away|lost outside|left the house|hasn'?t come back|gone for hours/,
    notice: {
      title: 'Wandering Emergency',
      message:
        'If a person with dementia is missing or may be outside unsupervised, treat it as urgent. Wandering can become dangerous quickly, especially with heat, cold, traffic, water, or nighttime conditions.',
      actions: [
        'Call 911 or local emergency services if you cannot locate them immediately.',
        'Share a recent photo, clothing description, medical needs, and likely destinations.',
        'Check nearby hazards first: roads, water, parked cars, yards, garages, and familiar routes.',
      ],
    },
  },
  {
    id: 'dangerous_aggression',
    pattern: /hit me|attacked me|weapon|knife|gun|threaten|threatening|violent right now|won'?t calm down|unsafe right now/,
    notice: {
      title: 'Immediate Safety Risk',
      message:
        'If anyone is in immediate danger, prioritize distance and emergency help. NIA and Alzheimer’s Association guidance both emphasize safety first during severe aggression.',
      actions: [
        'Move yourself and others to a safe place if you can do so without escalating.',
        'Call 911 in an emergency and tell responders the person has dementia.',
        'Do not try to restrain, argue with, or corner the person.',
      ],
    },
  },
  {
    id: 'medication_emergency',
    pattern: /overdose|took too many|double dose|wrong medication|poison|swallowed.*chemical|ate.*chemical/,
    notice: {
      title: 'Medication or Poisoning Concern',
      message:
        'Wrong doses, double doses, overdose, or possible poisoning can be urgent. Dementia can make it hard to know exactly what happened, so professional guidance matters.',
      actions: [
        'Call Poison Control at 1-800-222-1222 in the U.S. or call 911 if symptoms are serious.',
        'Keep the medication or product container nearby for responders.',
        'Do not wait for symptoms if the dose or substance could be dangerous.',
      ],
    },
  },
  {
    id: 'fire_or_gas',
    pattern: /fire|smoke|gas smell|left.*stove|burner.*on|carbon monoxide|co alarm/,
    notice: {
      title: 'Home Safety Emergency',
      message:
        'Fire, smoke, gas smell, carbon monoxide alarms, or stove hazards need immediate safety action before dementia-care strategies.',
      actions: [
        'Leave the area and call emergency services if there is smoke, fire, gas smell, or a carbon monoxide alarm.',
        'Do not re-enter the home until it is cleared by professionals.',
        'After the immediate danger is handled, consider disabling stove knobs or adding automatic shutoff tools.',
      ],
    },
  },
  {
    id: 'head_injury',
    pattern: /hit.*head|head injury|fell.*head|unconscious|passed out|can'?t get up|broken bone|severe pain/,
    notice: {
      title: 'Fall or Injury Concern',
      message:
        'A fall with head injury, loss of consciousness, severe pain, possible broken bone, or inability to get up needs prompt medical attention.',
      actions: [
        'Call 911 if they hit their head, lost consciousness, have severe pain, or cannot get up safely.',
        'Do not move them if you suspect a serious injury unless they are in immediate danger.',
        'Tell responders what changed from their usual dementia baseline.',
      ],
    },
  },
];

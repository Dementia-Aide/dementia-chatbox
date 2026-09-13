import type { AICareResponse } from '../types';

export interface ScenarioContent {
  category: AICareResponse['category'];
  explanation: string;
  tips: string[];
}

// Ask Aide's answer for each specific situation it recognizes (see
// scenarioRouting.ts for how a question gets matched to one of these keys).
export const scenarioResponses: Record<string, ScenarioContent> = {
  wandering_night: {
    category: 'Safety',
    explanation: 'Nighttime wandering is one of the most concerning behaviors in dementia care. It often occurs due to confusion about time, disrupted sleep patterns, or unmet needs. The key is to create a safe environment while addressing the underlying causes of nighttime restlessness.',
    tips: [
      'Install door alarms or motion sensors to alert you when they get up',
      'Use nightlights throughout the home to reduce confusion',
      'Keep a consistent bedtime routine to regulate their sleep cycle',
      'Ensure they use the bathroom before bed to reduce nighttime trips',
      'Remove car keys and secure exit doors without making it obvious',
      'Consider a GPS tracking device or medical alert system',
      'Increase daytime physical activity to promote better sleep',
      'Limit caffeine and fluids in the evening hours',
      'Keep their bedroom comfortable and familiar',
      'Address any pain or discomfort that might wake them'
    ]
  },
  wandering: {
    category: 'Safety',
    explanation: 'Wandering is a common behavior in dementia, often stemming from confusion, boredom, searching for something familiar, or trying to fulfill a past routine. While it\'s important to ensure safety, try to understand what they\'re seeking and address those needs.',
    tips: [
      'Install door alarms, locks, or safety gates on exits',
      'Ensure they wear an ID bracelet with your contact information',
      'Consider a GPS tracking device for additional security',
      'Keep recent photos available for identification if needed',
      'Inform neighbors and local police about the situation',
      'Place STOP signs or dark mats at doors (may appear as barriers)',
      'Redirect their attention when you notice wandering behavior',
      'Create a safe walking path inside or outside your home',
      'Increase engaging activities to reduce restlessness',
      'Register with local safe return programs like MedicAlert'
    ]
  },
  refusing_food: {
    category: 'Daily Care',
    explanation: 'Refusing to eat can be caused by many factors: loss of appetite, difficulty swallowing, medication side effects, depression, or not recognizing food. It\'s crucial to identify the cause and make eating as easy and enjoyable as possible while monitoring their nutrition.',
    tips: [
      'Offer favorite foods and familiar dishes they\'ve always enjoyed',
      'Serve smaller, more frequent meals throughout the day',
      'Make food visually appealing with colorful, contrasting plates',
      'Eat meals together to model eating behavior',
      'Offer finger foods that are easy to eat independently',
      'Ensure dentures fit properly and mouth is healthy',
      'Try different temperatures - some prefer room temperature food',
      'Reduce distractions during mealtimes (turn off TV)',
      'Offer nutritious smoothies or shakes if they refuse solids',
      'Consult a doctor if weight loss continues'
    ]
  },
  bathing_resistance: {
    category: 'Daily Care',
    explanation: 'Resistance to bathing is very common and can stem from fear of water, feeling cold, loss of dignity, or not understanding what\'s happening. Approaching bathing with patience, maintaining their dignity, and making it comfortable can help reduce anxiety.',
    tips: [
      'Maintain a warm bathroom temperature before bathing',
      'Use a calm, reassuring voice and explain each step simply',
      'Preserve modesty by keeping them covered as much as possible',
      'Let them do as much as they can themselves',
      'Try sponge baths instead of full showers if preferred',
      'Play their favorite music to create a calming atmosphere',
      'Schedule baths when they\'re most cooperative',
      'Consider having a same-gender caregiver assist',
      'Use shower chairs and handheld showerheads for safety',
      'Make it routine - same time, same way each time'
    ]
  },
  incontinence: {
    category: 'Daily Care',
    explanation: 'Incontinence is a difficult but common issue in dementia care. It can be caused by not recognizing the need, difficulty finding the bathroom, or physical changes. A compassionate, matter-of-fact approach helps maintain dignity while managing the situation.',
    tips: [
      'Take them to the bathroom every 2-3 hours on a schedule',
      'Make the bathroom easy to find with signs or colored tape',
      'Use nightlights to help them find the bathroom at night',
      'Choose clothing that\'s easy to remove quickly',
      'Limit fluids 2-3 hours before bedtime',
      'Keep a portable commode near their bed if needed',
      'Use protective pads on furniture and bedding',
      'React calmly to accidents without showing frustration',
      'Maintain good skin care to prevent irritation',
      'Consult a doctor to rule out urinary tract infections'
    ]
  },
  physical_aggression: {
    category: 'Behavior',
    explanation: 'Physical aggression in dementia usually isn\'t intentional - it\'s often a response to fear, pain, frustration, or feeling threatened. The person may be reacting to something they don\'t understand or can\'t communicate. Your safety is paramount, but understanding triggers can prevent future incidents.',
    tips: [
      'Stay calm and avoid reacting with anger or fear',
      'Give them space and don\'t corner or restrain them',
      'Identify triggers by keeping a log of when aggression occurs',
      'Check for physical discomfort, pain, or illness',
      'Approach from the front where they can see you',
      'Use a calm, low voice and reassuring body language',
      'Redirect their attention to something pleasant',
      'Remove potential weapons or dangerous objects from reach',
      'Consider if personal care tasks are too intrusive',
      'Consult a doctor about medications or underlying conditions'
    ]
  },
  verbal_aggression: {
    category: 'Behavior',
    explanation: 'Verbal outbursts, cursing, or mean comments are symptoms of the disease affecting impulse control and emotional regulation. The person may not realize what they\'re saying or may be expressing frustration they can\'t otherwise communicate. Try not to take it personally.',
    tips: [
      'Remember it\'s the disease talking, not the person',
      'Stay calm and don\'t argue or take it personally',
      'Try to identify what triggered the outburst',
      'Use a gentle tone and validate their feelings',
      'Redirect their attention to something calming',
      'Give them space if they need time to calm down',
      'Avoid crowded or overstimulating environments',
      'Maintain a predictable routine to reduce stress',
      'Ensure their basic needs are met (not tired, hungry, etc.)',
      'Take breaks for your own emotional well-being'
    ]
  },
  sundowning: {
    category: 'Behavior',
    explanation: 'Sundowning refers to increased confusion, agitation, and restlessness in the late afternoon and evening. It may be caused by fatigue, disrupted circadian rhythms, reduced lighting, or the accumulation of daily stress. Creating a calm environment and addressing physical needs can help.',
    tips: [
      'Maintain a structured daily routine with regular meal and sleep times',
      'Increase lighting in the late afternoon before sunset',
      'Schedule demanding activities for morning hours',
      'Limit caffeine and sugar, especially after lunch',
      'Encourage physical activity and outdoor time during the day',
      'Reduce noise and activity levels in the evening',
      'Close curtains before dark to minimize shadows',
      'Avoid large meals, alcohol, or caffeine in the evening',
      'Play calming music or engage in quiet activities',
      'Consider a sleep schedule consultation with their doctor'
    ]
  },
  sleep: {
    category: 'Health',
    explanation: 'Sleep disturbances are common in dementia due to changes in the brain, medications, inactivity, or confusion about time. Poor sleep affects behavior and health for both the person with dementia and caregivers. Establishing good sleep hygiene and addressing underlying causes is essential.',
    tips: [
      'Keep a consistent sleep schedule every day',
      'Increase daytime physical and social activity',
      'Get exposure to natural sunlight during the day',
      'Limit daytime napping to 30 minutes or less',
      'Create a calming bedtime routine',
      'Keep the bedroom cool, dark, and comfortable',
      'Avoid caffeine, alcohol, and large meals before bed',
      'Ensure they use the bathroom before bed',
      'Treat any pain or discomfort that disrupts sleep',
      'Discuss sleep medications with their doctor if needed'
    ]
  },
  repetitive: {
    category: 'Behavior',
    explanation: 'Repetitive questions and behaviors can be frustrating but often provide comfort and security for someone with dementia. They may have forgotten they already asked, be anxious about something, or seeking reassurance. Patience and creative strategies can help.',
    tips: [
      'Answer calmly each time as if it\'s the first time',
      'Look for the emotion or need behind the question',
      'Provide reassurance and validation of their feelings',
      'Try writing down the answer for them to reference',
      'Use distraction or redirection to other activities',
      'Keep a visible calendar or clock to orient them',
      'Engage them in activities that provide purpose',
      'Take deep breaths and remember it\'s not intentional',
      'Consider if anxiety or boredom is the cause',
      'Take breaks when you need them for your own sanity'
    ]
  },
  delusions: {
    category: 'Behavior',
    explanation: 'Delusions and hallucinations can be frightening for both the person and caregiver. They\'re caused by changes in the brain and are very real to the person experiencing them. Rather than arguing about what\'s real, focus on the emotions they\'re feeling and providing comfort.',
    tips: [
      'Don\'t argue about whether what they\'re seeing is real',
      'Validate their feelings and provide reassurance',
      'Respond to the emotion, not the delusion',
      'Gently try to redirect their attention',
      'Check if medications might be contributing',
      'Ensure adequate lighting to reduce shadows and confusion',
      'Keep the environment calm and familiar',
      'Check for physical causes like infections or pain',
      'Distract with an activity or change of scenery',
      'Consult a doctor if delusions become severe or frightening'
    ]
  },
  driving: {
    category: 'Safety',
    explanation: 'Stopping driving is often one of the hardest transitions for someone with dementia and their family. It represents loss of independence and identity. However, safety must come first. Having the conversation early, involving doctors, and providing alternatives can help.',
    tips: [
      'Have their doctor assess driving ability and write a prescription not to drive',
      'Disable the car or remove it from sight',
      'Hide or remove car keys in a secure location',
      'Arrange alternative transportation options ahead of time',
      'Offer to drive them or arrange rides with family/friends',
      'Research senior transportation services in your area',
      'Acknowledge their loss and validate their feelings',
      'Emphasize safety concerns rather than their ability',
      'Redirect conversations about driving to other topics',
      'Consider selling the car to provide closure'
    ]
  },
  recognition: {
    category: 'Communication',
    explanation: 'Not being recognized by a loved one is heartbreaking. As dementia progresses, people may forget relationships or confuse identities. While painful, remember that emotional connections often remain even when memory fades. Focus on the feeling of the moment rather than facts.',
    tips: [
      'Don\'t quiz them or correct who you are',
      'Go along with their reality to avoid distress',
      'Focus on emotional connection rather than identity',
      'Use familiar songs, scents, or photos from the past',
      'Speak calmly and maintain eye contact',
      'Identify yourself simply: "It\'s me, Mary"',
      'Take comfort in moments of connection when they occur',
      'Remember they may feel your love even if they don\'t know your name',
      'Process your grief and seek support for yourself',
      'Cherish the relationship you have now, not what was'
    ]
  },
  depression: {
    category: 'Health',
    explanation: 'Depression is common in dementia and can worsen cognitive symptoms, behavior, and quality of life. It may manifest as withdrawal, tearfulness, loss of interest, or increased confusion. Recognizing and treating depression can significantly improve daily functioning.',
    tips: [
      'Watch for signs: sadness, loss of interest, appetite changes',
      'Encourage social interaction and meaningful activities',
      'Ensure they get sunlight and outdoor time daily',
      'Stay physically active with walks or gentle exercise',
      'Maintain social connections with friends and family',
      'Play music they love or engage in past hobbies',
      'Validate their feelings and provide reassurance',
      'Consult their doctor about depression screening',
      'Consider counseling or support groups',
      'Discuss antidepressant medications if appropriate'
    ]
  },
  falls: {
    category: 'Safety',
    explanation: 'Falls can become more likely as dementia affects judgment, depth perception, balance, sleep, medications, and the ability to notice hazards. Treat a fall or near-fall as useful information: something in the body, routine, or home setup may need to change.',
    tips: [
      'Remove loose rugs, cords, clutter, and low furniture from common walking paths',
      'Add bright lighting and nightlights from the bedroom to the bathroom',
      'Install grab bars near the toilet and shower, and use non-slip mats',
      'Ask a doctor or pharmacist to review medications that may cause dizziness',
      'Watch for new pain, weakness, infection, dehydration, or vision changes',
      'Encourage supportive shoes instead of slippers or socks on smooth floors',
      'Use a shower chair, raised toilet seat, or walker if recommended',
      'Keep frequently used items within easy reach to avoid climbing',
      'Track when falls happen to identify patterns like nighttime bathroom trips',
      'Seek urgent medical help after head injury, severe pain, or sudden weakness'
    ]
  },
  medication_refusal: {
    category: 'Health',
    explanation: 'Medication refusal can happen when the person does not understand the purpose, dislikes the taste, feels rushed, has swallowing trouble, or is overwhelmed by too many instructions. The safest approach is to simplify the routine while confirming changes with a clinician.',
    tips: [
      'Use a calm, matter-of-fact tone and avoid arguing about whether medicine is needed',
      'Offer one medicine at a time with a familiar drink or snack if allowed',
      'Ask the prescriber whether pills can be crushed, changed, or simplified',
      'Use a pill organizer or pharmacy blister packs to reduce mistakes',
      'Give medication at the same time and place each day when possible',
      'Watch for swallowing problems, nausea, constipation, or side effects',
      'Do not hide medication in food unless the doctor or pharmacist approves it',
      'Keep an updated medication list for appointments and emergencies',
      'Call the care team if important doses are repeatedly missed',
      'Use reminders or supervised administration if forgetting is the main issue'
    ]
  },
  sudden_confusion: {
    category: 'Health',
    explanation: 'A sudden increase in confusion, sleepiness, agitation, weakness, or decline is not always “just dementia.” Infections, dehydration, pain, medication changes, constipation, and other medical issues can cause rapid changes and may need prompt medical attention.',
    tips: [
      'Call their doctor promptly when confusion changes suddenly or sharply',
      'Watch for fever, pain, urinary symptoms, cough, dehydration, or constipation',
      'Review recent medication changes, missed doses, or accidental double doses',
      'Check whether they are eating, drinking, and sleeping differently',
      'Keep the environment calm, familiar, and well lit while you assess the change',
      'Write down when the change started and what symptoms you noticed',
      'Bring a medication list and baseline behavior notes to urgent visits',
      'Seek emergency help for chest pain, stroke signs, head injury, severe weakness, or trouble breathing',
      'Avoid assuming behavior changes are intentional or permanent',
      'After treatment, ask what prevention steps should be added at home'
    ]
  },
  wants_to_go_home: {
    category: 'Communication',
    explanation: 'When someone with dementia asks to “go home,” they may be asking for safety, comfort, familiarity, or a time in life that feels secure. Correcting the facts often increases distress. Respond to the feeling first, then redirect gently.',
    tips: [
      'Validate the emotion: “You want to feel safe and settled”',
      'Avoid arguing that they are already home if that makes them more upset',
      'Ask a simple question about home, such as what they miss most',
      'Offer a comforting object, familiar music, photos, or a favorite snack',
      'Try a short walk, car ride, or change of room if safe and realistic',
      'Use calm body language and a reassuring tone',
      'Check for triggers like fatigue, hunger, noise, pain, or sundowning',
      'Create a predictable evening routine if it happens late in the day',
      'Keep explanations short and repeat reassurance as needed',
      'Give yourself permission to use therapeutic redirection instead of factual correction'
    ]
  },
  shadowing: {
    category: 'Behavior',
    explanation: 'Following a caregiver closely, sometimes called shadowing, often comes from anxiety, fear of being alone, or not understanding where the caregiver went. The goal is to increase reassurance and structure while giving the caregiver small pockets of relief.',
    tips: [
      'Tell them where you are going in short, reassuring phrases',
      'Set them up with a familiar activity before stepping away',
      'Use music, folding towels, sorting objects, or photo albums for comfort',
      'Keep transitions predictable and avoid disappearing suddenly',
      'Try a written note or visual cue that says when you will return',
      'Check for pain, hunger, bathroom needs, or overstimulation',
      'Ask another trusted person to sit with them when you need a break',
      'Use adult day care or respite if the behavior is constant and exhausting',
      'Stay calm, because visible frustration can increase fear',
      'Celebrate short successful separations and build gradually'
    ]
  },
  rummaging: {
    category: 'Behavior',
    explanation: 'Rummaging, hiding items, or accusing others of stealing can come from memory loss, anxiety, boredom, or a need to feel in control. It helps to protect valuables quietly while giving the person safe ways to search, sort, and feel useful.',
    tips: [
      'Avoid arguing about whether something was stolen',
      'Validate the worry and offer to help look together',
      'Create a safe rummage drawer or box with familiar harmless items',
      'Keep duplicate essentials like glasses, keys, and wallets when possible',
      'Store valuables, bills, and medications in a secure place',
      'Use labels, trays, or consistent drop zones for important items',
      'Watch for patterns in where they hide things',
      'Offer sorting tasks like folding towels or organizing cards',
      'Reduce clutter so missing items are easier to find',
      'Take breaks if accusations are becoming emotionally overwhelming'
    ]
  },
  financial_safety: {
    category: 'Safety',
    explanation: 'Dementia can make scams, repeated purchases, missed bills, and financial confusion more likely. Financial protection works best when it is set up early and quietly, before there is a crisis or major loss.',
    tips: [
      'Monitor bank and credit card activity for unusual charges',
      'Set up alerts for large withdrawals, new payees, or repeated purchases',
      'Reduce access to checkbooks, credit cards, and sensitive documents if needed',
      'Use call blocking and screen unknown phone numbers',
      'Place the person on do-not-call lists and reduce junk mail',
      'Discuss power of attorney and trusted decision-makers early',
      'Keep bills on autopay when appropriate',
      'Document concerning incidents in case professional help is needed',
      'Talk to the bank about safeguards for vulnerable adults',
      'Report fraud quickly if money or personal information is exposed'
    ]
  },
  kitchen_safety: {
    category: 'Safety',
    explanation: 'Kitchen risks can increase when dementia affects attention, sequencing, smell, judgment, or the ability to remember that a burner is on. The goal is to preserve independence where safe while reducing fire, burn, and food-safety risks.',
    tips: [
      'Remove or cover stove knobs if burners are being left on',
      'Use appliances with automatic shutoff when possible',
      'Keep knives, matches, and cleaning products secured',
      'Label safe snacks and simple foods clearly',
      'Check the refrigerator for spoiled food regularly',
      'Supervise cooking if sequencing or judgment has changed',
      'Install working smoke and carbon monoxide alarms',
      'Use contrasting dishes and simple place settings to reduce confusion',
      'Prepare ready-to-eat meals if cooking is no longer safe',
      'Watch for burns, smoke marks, or unexplained kitchen messes as warning signs'
    ]
  },
  caregiver_burnout: {
    category: 'General',
    explanation: 'Caregiver burnout is a real care issue, not a personal failure. Exhaustion, resentment, poor sleep, irritability, and feeling trapped are signals that the care plan needs more support, not that you are doing something wrong.',
    tips: [
      'Name the specific tasks that are hardest instead of asking for general help',
      'Ask family or friends for concrete shifts, errands, meals, or appointment help',
      'Use respite care, adult day programs, or paid help before a crisis',
      'Tell the doctor if sleep deprivation or stress is becoming unsafe',
      'Keep a short list of people to call when you need backup',
      'Lower nonessential standards around chores and perfect routines',
      'Join a caregiver support group or talk with a counselor',
      'Schedule one protected break each week, even if it is brief',
      'Watch for depression, anxiety, or health changes in yourself',
      'Remember that sustainable care requires a supported caregiver'
    ]
  },
  family_conflict: {
    category: 'General',
    explanation: 'Family conflict often grows when roles, money, time, guilt, and medical decisions are unclear. Dementia care works better when tasks are concrete, decisions are documented, and conversations focus on needs instead of blame.',
    tips: [
      'Write down the current care tasks, appointments, costs, and gaps',
      'Ask relatives to choose specific jobs rather than vague support',
      'Use a shared calendar or care app for visibility',
      'Keep medical and legal documents organized in one place',
      'Hold short focused meetings with one decision at a time',
      'Use the doctor, social worker, or care manager as a neutral voice',
      'Document agreements about money, transportation, and respite',
      'Avoid debating old family patterns during urgent care decisions',
      'Consider elder mediation if conflict blocks necessary care',
      'Protect the primary caregiver from being the default for everything'
    ]
  },
  care_transition: {
    category: 'General',
    explanation: 'Considering hospice, adult day care, home care, assisted living, or a nursing home does not mean giving up. It usually means the needs have changed and the care plan has to become more realistic, safer, and better supported.',
    tips: [
      'List the needs that are no longer manageable at home',
      'Ask the doctor whether hospice, palliative care, therapy, or home health should be evaluated',
      'Tour care options before a crisis whenever possible',
      'Compare staffing, dementia training, safety setup, costs, and communication style',
      'Use adult day care or respite as a lower-pressure first step when appropriate',
      'Bring familiar objects, photos, and routines into any new setting',
      'Expect an adjustment period after transitions',
      'Keep legal, medication, diagnosis, and emergency documents ready',
      'Ask how behavior changes, falls, wandering, and hospital transfers are handled',
      'Choose the setting that best matches current needs, not the care plan you hoped would be enough'
    ]
  }
};

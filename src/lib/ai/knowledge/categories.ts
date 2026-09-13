import type { ScenarioContent } from './scenarios';

// Fallback answer for a broad category when no specific scenario (see
// scenarios.ts) matched the caregiver's question.
export const categoryFallbacks: Record<string, ScenarioContent> = {
  activities: {
    category: 'Activities',
    explanation: 'Engaging activities are crucial in dementia care as they help maintain cognitive function, reduce anxiety, and improve quality of life. The key is to choose activities that match the person\'s current abilities and past interests, making them both enjoyable and achievable.',
    tips: [
      'Choose activities based on past interests and current abilities',
      'Break activities into simple, manageable steps',
      'Focus on the process and enjoyment, not the outcome',
      'Use music from their youth to trigger positive memories',
      'Try art activities like coloring, painting, or crafts',
      'Engage in gentle exercises like walking or chair yoga',
      'Look through photo albums and share memories together',
      'Schedule activities during their most alert times of day',
      'Be patient and flexible if they lose interest',
      'Celebrate participation, not perfection'
    ]
  },
  communication: {
    category: 'Communication',
    explanation: 'Communication changes are a natural part of dementia progression. Adapting your communication style can significantly reduce frustration for both you and your loved one. The goal is to maintain connection and understanding while respecting their dignity and emotional needs.',
    tips: [
      'Speak slowly, clearly, and in simple sentences',
      'Make eye contact and use a calm, reassuring tone',
      'Give them time to process and respond',
      'Ask one question at a time, avoiding complex choices',
      'Use gestures and visual cues to support understanding',
      'Listen actively and validate their feelings',
      'Avoid arguing or correcting minor mistakes',
      'Pay attention to non-verbal communication and body language',
      'Minimize background noise and distractions',
      'Stay patient and don\'t take things personally'
    ]
  },
  behavior: {
    category: 'Behavior',
    explanation: 'Challenging behaviors in dementia are often a way of communicating unmet needs or discomfort. Rather than focusing on stopping the behavior, try to understand what might be causing it. With patience and observation, you can often identify triggers and find effective strategies.',
    tips: [
      'Stay calm and avoid reacting emotionally to difficult behaviors',
      'Look for patterns - keep a log of when behaviors occur',
      'Check for physical causes: pain, hunger, thirst, or bathroom needs',
      'Reduce environmental triggers like noise, clutter, or overstimulation',
      'Use distraction and redirection rather than confrontation',
      'Maintain a consistent daily routine for predictability',
      'Ensure adequate rest and avoid overtiredness',
      'Simplify tasks to reduce frustration',
      'Validate their feelings even if the concern seems irrational',
      'Consult with healthcare providers about persistent behaviors'
    ]
  },
  safety: {
    category: 'Safety',
    explanation: 'Creating a safe environment is essential in dementia care, but it\'s equally important to balance safety with maintaining independence and dignity. A thoughtful approach to safety planning can prevent accidents while allowing your loved one to maintain as much autonomy as possible.',
    tips: [
      'Remove tripping hazards like loose rugs and clutter',
      'Install grab bars in bathrooms and adequate lighting throughout',
      'Use door alarms or monitoring systems if wandering occurs',
      'Keep medications, chemicals, and sharp objects secured',
      'Label cabinets and rooms with pictures or words',
      'Consider a medical alert system or GPS tracker',
      'Keep emergency numbers visible and easily accessible',
      'Ensure smoke detectors and carbon monoxide alarms work',
      'Remove or disable stove knobs if cooking is unsafe',
      'Create a safe, enclosed outdoor space if possible'
    ]
  },
  daily: {
    category: 'Daily Care',
    explanation: 'Daily care routines provide structure and familiarity, which can be very comforting for someone with dementia. The key is to maintain consistency while being flexible and allowing them to participate as much as possible, preserving their dignity and sense of independence.',
    tips: [
      'Establish and stick to a consistent daily routine',
      'Allow plenty of time for each task - avoid rushing',
      'Let them do as much as they can independently',
      'Break tasks into simple, manageable steps',
      'Prepare clothes and items ahead of time',
      'Use visual cues and simple verbal instructions',
      'Make bathing more comfortable with warm room, music, and reassurance',
      'Choose clothing that\'s easy to put on and comfortable',
      'Keep the environment calm and minimize distractions',
      'Be patient and offer encouragement throughout'
    ]
  },
  health: {
    category: 'Health',
    explanation: 'Managing health needs in dementia care requires close attention and coordination with healthcare providers. Regular monitoring, medication management, and preventive care are essential, along with recognizing when changes need medical attention.',
    tips: [
      'Keep a detailed medication schedule and organize pills carefully',
      'Attend all medical appointments and take notes',
      'Monitor for changes in behavior, appetite, or physical condition',
      'Maintain a list of all medications and medical conditions',
      'Watch for signs of pain, discomfort, or illness',
      'Ensure regular dental, vision, and hearing check-ups',
      'Keep emergency contact information readily available',
      'Communicate any concerns to healthcare providers promptly',
      'Follow prescribed treatments consistently',
      'Maintain good nutrition and hydration'
    ]
  },
  planning: {
    category: 'General',
    explanation: 'Care planning helps families move from reacting to each crisis toward a clearer support system. This can include legal documents, home help, respite, adult day programs, care homes, hospice, transportation, and a realistic plan for what happens when needs increase.',
    tips: [
      'Write down current care needs, safety risks, and the tasks that are hardest to sustain',
      'Organize diagnosis records, medication lists, insurance information, and emergency contacts',
      'Discuss power of attorney, advance directives, and trusted decision-makers early',
      'Compare home care, adult day care, respite, assisted living, memory care, and hospice based on current needs',
      'Ask the doctor or a social worker which services the person may qualify for',
      'Create a backup plan for nights, falls, wandering, illness, and caregiver emergencies',
      'Review costs, transportation, staffing, and family responsibilities directly',
      'Revisit the plan regularly because dementia care needs change over time',
      'Use transitions to increase support, not as a judgment on the family',
      'Keep the person’s routines, preferences, and dignity central in every decision'
    ]
  },
  support: {
    category: 'General',
    explanation: 'Caregiver support is part of the care plan. When the caregiver is exhausted, isolated, or unsupported, the whole system becomes more fragile. The most useful support is concrete: named tasks, scheduled breaks, backup contacts, and help before crisis.',
    tips: [
      'Identify the exact jobs that need backup: meals, bathing, transportation, nights, paperwork, or appointments',
      'Ask for specific help instead of broad offers',
      'Schedule respite before exhaustion becomes unsafe',
      'Use support groups, counseling, adult day programs, or paid care when possible',
      'Track sleep, stress, and health changes in the caregiver too',
      'Set boundaries around what one person can realistically do',
      'Use a shared calendar so family members can see real care demands',
      'Talk with the doctor if caregiver stress is affecting safety or health',
      'Prepare an emergency backup contact list',
      'Treat rest as a care requirement, not a reward'
    ]
  },
  general: {
    category: 'General',
    explanation: 'Understanding dementia care is an ongoing journey that combines practical knowledge with compassionate support. While each person\'s experience with dementia is unique, having a strong foundation of care principles and resources helps provide consistent, quality care. Regular learning and adaptation to changing needs ensures the best possible support for both the person with dementia and their caregivers.',
    tips: [
      'Learn about the specific type of dementia and its progression',
      'Establish and maintain consistent daily routines',
      'Stay connected with healthcare providers and specialists',
      'Create a support network of family, friends, and professionals',
      'Keep organized records of medications and appointments',
      'Attend caregiver education programs and workshops',
      'Plan for future care needs and decisions',
      'Practice self-care and stress management',
      'Use available community resources and services',
      'Regular assessment of care needs and adjustments as necessary'
    ]
  }
};

import type { AITrustedSource } from '../types';

// The outside articles/orgs Ask Aide can cite alongside its own answers.
export const trustedCareSources: Record<string, AITrustedSource> = {
  alzCaregiving: {
    title: 'Caregiving',
    publisher: "Alzheimer's Association",
    summary: 'Caregiving basics, planning, safety, communication, behavior, and daily care support.',
    url: 'https://www.alz.org/help-support/caregiving',
  },
  niaCaregiving: {
    title: "Alzheimer's Caregiving",
    publisher: 'National Institute on Aging',
    summary: 'Federal guidance on daily care, behavior changes, safety, caregiver health, and medical planning.',
    url: 'https://www.nia.nih.gov/health/alzheimers-caregiving',
  },
  alzheimersGovTips: {
    title: 'Tips for Caregivers and Families',
    publisher: 'Alzheimers.gov',
    summary: 'Practical caregiver tips for routines, appointments, home organization, and day-to-day support.',
    url: 'https://www.alzheimers.gov/life-with-dementia/tips-caregivers',
  },
  communication: {
    title: 'Communicating With Someone Who Has Alzheimer’s',
    publisher: 'National Institute on Aging',
    summary: 'How to speak, listen, give time, and reduce frustration as communication changes.',
    url: 'https://www.nia.nih.gov/health/alzheimers-changes-behavior-and-communication/communicating-someone-who-has-alzheimers',
  },
  behavior: {
    title: 'Managing Personality and Behavior Changes',
    publisher: 'National Institute on Aging',
    summary: 'Ways to respond to behavior changes by looking for triggers and unmet needs.',
    url: 'https://www.nia.nih.gov/health/alzheimers-changes-behavior-and-communication/alzheimers-caregiving-managing-personality-and',
  },
  agitation: {
    title: 'Coping With Agitation, Aggression, and Sundowning',
    publisher: 'National Institute on Aging',
    summary: 'Guidance for staying calm, reducing triggers, and responding to late-day agitation.',
    url: 'https://www.nia.nih.gov/health/alzheimers-changes-behavior-and-communication/coping-agitation-aggression-and-sundowning',
  },
  wandering: {
    title: 'Wandering',
    publisher: "Alzheimer's Association",
    summary: 'Risk signs and safety steps for wandering, getting lost, door safety, and alert planning.',
    url: 'https://www.alz.org/help-support/caregiving/stages-behaviors/wandering',
  },
  bathing: {
    title: 'Bathing',
    publisher: "Alzheimer's Association",
    summary: 'Practical bathing support that protects comfort, warmth, privacy, and dignity.',
    url: 'https://www.alz.org/help-support/caregiving/daily-care/bathing',
  },
  homeSafety: {
    title: 'Home Safety',
    publisher: "Alzheimer's Association",
    summary: 'Room-by-room safety ideas for judgment changes, falls, exits, kitchen risks, and emergencies.',
    url: 'https://www.alz.org/help-support/caregiving/safety/home-safety',
  },
  dailyPlan: {
    title: 'Daily Care Plan',
    publisher: "Alzheimer's Association",
    summary: 'How structured routines and pleasant activities can support mood, engagement, and predictability.',
    url: 'https://www.alz.org/help-support/caregiving/daily-care/daily-care-plan',
  },
  strokeSigns: {
    title: 'Signs and Symptoms of Stroke',
    publisher: 'CDC',
    summary: 'Stroke warning signs include sudden weakness, speech trouble, vision changes, severe headache, confusion, dizziness, or loss of balance. Call 911 right away.',
    url: 'https://www.cdc.gov/stroke/signs-symptoms/index.html',
  },
  hospital: {
    title: "Taking a Person With Alzheimer's Disease to the Hospital",
    publisher: 'National Institute on Aging',
    summary: 'How to prepare for urgent hospital care and reduce confusion during emergency visits.',
    url: 'https://www.nia.nih.gov/health/alzheimers-caregiving/taking-person-alzheimers-disease-hospital',
  },
};

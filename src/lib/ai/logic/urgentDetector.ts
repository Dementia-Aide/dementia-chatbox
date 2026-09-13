import { urgentNoticeRules, type UrgentNoticeRule } from '../knowledge/urgentNotices';

export function detectUrgentNotice(query: string): UrgentNoticeRule | undefined {
  const lowerQuery = query.toLowerCase();
  return urgentNoticeRules.find((rule) => lowerQuery.match(rule.pattern));
}

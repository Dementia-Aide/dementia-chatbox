// Checks a query for emergency patterns, independent of the topic router,
// so urgent situations are flagged regardless of what category they match.
import { urgentNoticeRules, type UrgentNoticeRule } from '../knowledge/urgentNotices';

export function detectUrgentNotice(query: string): UrgentNoticeRule | undefined {
  const lowerQuery = query.toLowerCase();
  return urgentNoticeRules.find((rule) => lowerQuery.match(rule.pattern));
}

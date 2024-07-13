import { Subscription as TSubscription } from "../api/subscription/Subscription";

export const SUBSCRIPTION_TITLE_FIELD = "planName";

export const SubscriptionTitle = (record: TSubscription): string => {
  return record.planName?.toString() || String(record.id);
};

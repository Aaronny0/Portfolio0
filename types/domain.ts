export const USER_ROLES = [
  "SUPER_ADMIN",
  "ADMIN",
  "EMPLOYEE",
  "CLIENT",
] as const;

export type UserRole = (typeof USER_ROLES)[number];

export const PROJECT_STATUSES = [
  "WAITING",
  "IN_PROGRESS",
  "REVISION",
  "DELIVERED",
  "ARCHIVED",
] as const;

export type ProjectStatus = (typeof PROJECT_STATUSES)[number];

export const BRIEF_STATUSES = [
  "PENDING",
  "ACCEPTED",
  "REJECTED",
] as const;

export type BriefStatus = (typeof BRIEF_STATUSES)[number];

export const QUOTE_STATUSES = [
  "DRAFT",
  "SENT",
  "ACCEPTED",
  "REFUSED",
] as const;

export type QuoteStatus = (typeof QUOTE_STATUSES)[number];

export const INVOICE_STATUSES = ["SENT", "SEEN", "PAID"] as const;

export type InvoiceStatus = (typeof INVOICE_STATUSES)[number];

export type Money = Readonly<{
  amountMinor: number;
  currency: string;
}>;

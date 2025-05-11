import { Prisma } from '@prisma/client';

export type Lead = Prisma.LeadGetPayload<{}>;
export type Contact = Prisma.ContactGetPayload<{}>;
export type Conversation = Prisma.ConversationGetPayload<{}>;
export type Message = Prisma.MessageGetPayload<{}>;

export const LeadStatus = {
  NEW: 'NEW',
  CONTACTED: 'CONTACTED',
  QUALIFIED: 'QUALIFIED',
  CONVERTED: 'CONVERTED',
  LOST: 'LOST',
} as const;

export type LeadStatus = typeof LeadStatus[keyof typeof LeadStatus];

export const SenderType = {
  USER: 'USER',
  BOT: 'BOT',
} as const;

export type SenderType = typeof SenderType[keyof typeof SenderType]; 
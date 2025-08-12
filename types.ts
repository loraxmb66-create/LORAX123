
export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export interface User {
  id: string;
  username: string;
  passwordHash: string;
  balance: number;
  role: Role;
  createdAt: string;
}

export enum AccountStatus {
  AVAILABLE = 'AVAILABLE',
  SOLD = 'SOLD',
}

export interface AccountForSale {
  id: string;
  name: string;
  description: string;
  price: number;
  status: AccountStatus;
  sellerId: string; // admin ID
  buyerId?: string;
  listedAt: string;
  soldAt?: string;
}

export enum ActivityType {
  DEPOSIT = 'DEPOSIT',
  PURCHASE = 'PURCHASE',
  SALE_ADDED = 'SALE_ADDED',
  REGISTER = 'REGISTER',
  PASSWORD_CHANGE = 'PASSWORD_CHANGE',
  FUNDS_ADDED_BY_ADMIN = 'FUNDS_ADDED_BY_ADMIN',
}

export interface ActivityLogItem {
  id: string;
  userId: string;
  username: string;
  type: ActivityType;
  description: string;
  amount: number;
  timestamp: string;
  relatedId?: string; // e.g., accountId for a purchase
}

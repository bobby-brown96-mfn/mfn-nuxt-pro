import type { Role } from "#graphql-operations";

export interface IDecodedToken {
  email: string;
  sub: string;
  role: Role;
  tokenId: string;
  iat: number;
  exp: number;
}

export interface IDecodedRefreshToken
  extends Omit<IDecodedToken, "sub" | "tokenId"> {
  userId: string;
  userAgent: string;
  uid: string;
  activeBookId?: string;
}

export interface IFormattedToken
  extends Pick<IDecodedToken, "email" | "role" | "tokenId"> {
  isExpired: boolean;
  userId: string;
  expiresAt: string;
}

export interface IFormattedRefreshToken extends IFormattedToken {
  activeBookId: string | null;
}

export type Period = "daily" | "weekly" | "monthly";

export interface Range {
  start: Date;
  end: Date;
}

export interface IFormattedTokData {
  access: IFormattedToken | null;
  refresh: IFormattedRefreshToken | null;
}

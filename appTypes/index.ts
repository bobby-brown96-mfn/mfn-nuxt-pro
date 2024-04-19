import type { Role } from "#graphql-operations";

export interface IDecodedToken {
  email: string;
  sub: string;
  role: Role;
  tokenId: string;
  iat: number;
  exp: number;
}

export interface IFormattedToken extends Pick<IDecodedToken, "email" | "role"> {
  isExpired: boolean;
  userId: string;
  expiresAt: string;
}

export type Period = "daily" | "weekly" | "monthly";

export interface Range {
  start: Date;
  end: Date;
}

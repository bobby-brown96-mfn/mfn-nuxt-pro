import type { Role } from "~/api/generated/types";

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

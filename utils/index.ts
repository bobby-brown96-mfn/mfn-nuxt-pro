import type { AuthUserTokensFragment } from "#graphql-operations";
import { jwtDecode } from "jwt-decode";
import type {
  IDecodedRefreshToken,
  IDecodedToken,
  IFormattedRefreshToken,
  IFormattedTokData,
  IFormattedToken,
} from "~/appTypes";

export const accessDecode = (tok: string): IFormattedToken | null => {
  try {
    const decoded = jwtDecode(tok) as IDecodedToken;
    if (!decoded) return null;
    else {
      const { exp, sub, email, role, tokenId } = decoded;

      const isExpired = new Date(exp * 1000) < new Date();
      return {
        email,
        role,
        isExpired,
        tokenId,
        userId: sub,
        expiresAt: new Date(exp * 1000).toISOString(),
      };
    }
  } catch (e) {
    console.log(`accessDecode error: ${e}`);
    return null;
  }
};

export const refreshDecode = (tok: string): IFormattedRefreshToken | null => {
  try {
    const decoded = jwtDecode(tok) as IDecodedRefreshToken;
    if (!decoded) return null;
    else {
      const { exp, email, role, uid, userId, activeBookId = null } = decoded;

      const isExpired = new Date(exp * 1000) < new Date();

      return {
        email,
        role,
        tokenId: uid,
        userId,
        activeBookId,
        isExpired,
        expiresAt: new Date(exp * 1000).toISOString(),
      };
    }
  } catch (e) {
    console.log(`refreshDecode error: ${e}`);
    return null;
  }
};

export const decodeTokens = ({
  access_token,
  refresh_token,
}: AuthUserTokensFragment): IFormattedTokData => {
  const access = accessDecode(access_token);
  const refresh = refreshDecode(refresh_token);

  return {
    access,
    refresh,
  };
};

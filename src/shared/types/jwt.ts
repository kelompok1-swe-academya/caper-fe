import type { User } from "@/shared/types";

export type JWTClaims = {
	// TODO: Define REAL JWT claims
	// sub: string;
	// iat: number;
	// exp: number;
	// iss: string;
	// aud: string;
	// jti: string;
	user: User;
};

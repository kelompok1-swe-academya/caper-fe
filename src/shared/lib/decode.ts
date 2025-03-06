import * as jose from "jose";

interface TokenPayload {
	iss: string;
	exp: number;
}

export function decodeToken(token: string): TokenPayload {
	return jose.decodeJwt(token);
}

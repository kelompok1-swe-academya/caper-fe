import { env } from "@/shared/lib/env";
import type { User } from "@/shared/types";
import type { SessionOptions } from "iron-session";

// 16 hours in milliseconds
const MAX_AGE = 16 * 60 * 60 * 1000;

export type Session =
	| {
			isLoggedIn: false;
	  }
	| {
			isLoggedIn: true;
			user: User;
	  };

export const defaultSession: Session = {
	isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
	password: env.SESSION_PASSWORD,
	cookieName: "session",
	cookieOptions: {
		//  allow 1 minute buffer
		maxAge: MAX_AGE - 60 * 1000,
		secure: true,
	},
};

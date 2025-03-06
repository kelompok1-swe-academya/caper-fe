"use server";

import { type Session, sessionOptions } from "@/shared/lib/session";
import type { JWTClaims } from "@/shared/types";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

async function _getSession() {
	const session = await getIronSession<Session>(
		await cookies(),
		sessionOptions,
	);

	return session;
}

export async function createSession({ user }: JWTClaims) {
	const session = await _getSession();

	session.isLoggedIn = true;

	// TODO
	if (session.isLoggedIn) {
		session.user = user;
	}

	await session.save();
}

export async function destroySession() {
	const session = await _getSession();
	session.destroy();
}

export async function getSession(): Promise<Session> {
	const session = await _getSession();

	// https://github.com/vercel/next.js/discussions/46137
	return JSON.parse(JSON.stringify(session));
}

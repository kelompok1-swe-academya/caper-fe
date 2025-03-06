"use server";

import type { LoginRequest, LoginResponse } from "@/shared/repository/dto/auth";
import type { User } from "@/shared/types";
import type { Response } from "@/shared/types/response";

const dummyCredentials: (User & {
	password: string;
})[] = [
	{
		email: "user@example.com",
		password: "password",
		role: "user",
	},
	{
		email: "admin@example.com",
		password: "password",
		role: "admin",
	},
];

export const login = async (
	req: LoginRequest,
): Promise<Response<LoginResponse>> => {
	const user = dummyCredentials.find((cred) => cred.email === req.email);

	if (!user) {
		return {
			success: false,
			message: "User not found",
			data: null,
		};
	}

	if (user.password !== req.password) {
		return {
			success: false,
			message: "Invalid password",
			data: null,
		};
	}

	// Simulate a delay
	await new Promise((resolve) => setTimeout(resolve, 2000));

	return {
		success: true,
		message: "Login successful",
		data: {
			user,
		},
	};
};

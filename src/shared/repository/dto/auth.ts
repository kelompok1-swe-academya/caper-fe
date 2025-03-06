import type { User } from "@/shared/types";
import { z } from "zod";

export const LoginSchema = z.object({
	email: z.string().email("Email is invalid").min(1, "Email is required"),
	password: z
		.string()
		.min(1, "Password is required")
		.min(8, "Password must be at least 8 characters"),
});

export type LoginRequest = z.infer<typeof LoginSchema>;

export type LoginResponse = {
	user: User;
};

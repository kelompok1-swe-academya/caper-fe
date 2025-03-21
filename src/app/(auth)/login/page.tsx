"use client";

import AuthForm from "@/features/auth/components/auth-form";
import { useDialogStore } from "@/shared/stores/use-dialog-store";

export default function Page() {
	const { openDialog } = useDialogStore();

	return (
		<div className="h-screen flex flex-col items-center justify-center">
			<AuthForm
				title="Login"
				description="Enter your email below to login your account"
				quest="Don't have an account?"
				isHaveAccount="Sign up"
				isLogin={true}
				btnDescription="Login"
				path="register"
			/>
		</div>
	);
}

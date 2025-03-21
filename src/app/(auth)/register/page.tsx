"use client";

import AuthForm from "@/features/auth/components/auth-form";
import { useDialogStore } from "@/shared/stores/use-dialog-store";

export default function Page() {
	const { openDialog } = useDialogStore();

	return (
		<div className="h-screen flex flex-col items-center justify-center">
			<AuthForm
				title="Create an account"
				description="Enter your email below to create your account"
				quest="Already have an account?"
				isHaveAccount="Sign in"
				isLogin={false}
				btnDescription="Create an account"
				path="login"
			/>
		</div>
	);
}

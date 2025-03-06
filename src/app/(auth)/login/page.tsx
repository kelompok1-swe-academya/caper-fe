"use client";

import { Button } from "@/shared/components/ui/button";
import { useDialogStore } from "@/shared/stores/use-dialog-store";

export default function Page() {
	const { openDialog } = useDialogStore();

	return (
		<div className="h-screen flex flex-col items-center justify-center">
			<h1>Login Page</h1>
			<Button
				onClick={() =>
					openDialog({ children: <h1>Dialog</h1>, title: "Dialog" })
				}
			>
				Open Dialog
			</Button>
		</div>
	);
}

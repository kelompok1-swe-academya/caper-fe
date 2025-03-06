"use client";

import ReactQueryProvider from "@/shared/components/providers/tanstack";
import {
	Dialog,
	DialogContent,
	DialogTitle,
} from "@/shared/components/ui/dialog";
import { Toaster } from "@/shared/components/ui/sonner";
import { useDialogStore } from "@/shared/stores/use-dialog-store";

export default function Provider({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const {
		isOpen,
		children: modalChildren,
		closeDialog,
		title: dialogTitle,
	} = useDialogStore();

	return (
		<ReactQueryProvider>
			{children}
			<Dialog open={isOpen} onOpenChange={() => closeDialog()}>
				<DialogContent>
					<DialogTitle>{dialogTitle}</DialogTitle>
					{modalChildren}
				</DialogContent>
			</Dialog>
			<Toaster richColors position="bottom-right" />
		</ReactQueryProvider>
	);
}

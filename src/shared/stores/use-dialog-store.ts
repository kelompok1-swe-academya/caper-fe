import type { ReactNode } from "react";
import { create } from "zustand";

type DialogStore = {
	isOpen: boolean;
	openDialog: (props: { children: ReactNode; title: string }) => void;
	closeDialog: () => void;
	children: ReactNode;
	title: string;
};

export const useDialogStore = create<DialogStore>((set) => ({
	isOpen: false,
	openDialog: ({ children, title }) => {
		set({ isOpen: true, children, title });
	},
	closeDialog: () => {
		set({ isOpen: false, children: null, title: "" });
	},
	children: null,
	title: "",
}));
